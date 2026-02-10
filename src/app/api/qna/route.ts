import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const buildSystemPrompt = (
  aboutContent: string,
  aboutData: Record<string, unknown>
) => {
  const metaLines = Object.entries(aboutData)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");

  return `You are Jin Lee's portfolio Q&A assistant.
Answer ONLY using the information provided below.
If the answer is not in the provided information, say "I don't know based on the provided info."
Keep responses concise, helpful, and conversational.

[Profile Metadata]
${metaLines}

[Profile Notes]
${aboutContent}
`;
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing OPENAI_API_KEY" },
      { status: 500 }
    );
  }

  const { message, history = [] } = (await request.json()) as {
    message: string;
    history?: ChatMessage[];
  };

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const aboutPath = path.join(process.cwd(), "data", "about.md");
  const raw = await fs.readFile(aboutPath, "utf8");
  const { content, data } = matter(raw);

  const systemPrompt = buildSystemPrompt(content, data as Record<string, unknown>);

  const inputMessages = [
    {
      role: "system",
      content: [{ type: "text", text: systemPrompt }],
    },
    ...history.map((item) => ({
      role: item.role,
      content: [{ type: "text", text: item.content }],
    })),
    {
      role: "user",
      content: [{ type: "text", text: message }],
    },
  ];

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      input: inputMessages,
      temperature: 0.2,
      max_output_tokens: 400,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: "OpenAI request failed", detail: errorText },
      { status: 500 }
    );
  }

  const dataJson = await response.json();
  const answer =
    dataJson.output_text ??
    dataJson.output?.[0]?.content?.[0]?.text ??
    "I don't know based on the provided info.";

  return NextResponse.json({ answer });
}
