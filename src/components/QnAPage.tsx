"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function QnAPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const suggestedQuestions = [
    "What projects are you most proud of?",
    "What is your core tech stack?",
    "What kind of roles are you looking for?",
    "What problems do you enjoy solving?",
  ];

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/qna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: nextMessages.slice(-6),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Request failed");
      }

      const data = (await response.json()) as { answer: string };
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer },
      ]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      <div className="container mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl flex-col px-6">
        <div className="mb-6 space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
            Q&A
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Ask Me Anything</h1>
          <p className="text-sm text-slate-400">
            I only answer based on my profile document.
          </p>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto pr-2">
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => setInput(question)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-purple-500/40 hover:bg-white/10 transition"
              >
                {question}
              </button>
            ))}
          </div>

          {messages.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
              Try: “What projects are you most proud of?” or “What is your core
              tech stack?”
            </div>
          )}

          {messages.map((message, index) => {
            const isUser = message.role === "user";
            return (
              <div
                key={`${message.role}-${index}`}
                className={`flex items-end gap-3 ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!isUser && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-xs font-semibold text-purple-200">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl border px-5 py-4 ${
                    isUser
                      ? "border-purple-500/30 bg-linear-to-r from-purple-600/20 to-blue-600/20 text-white"
                      : "border-white/10 bg-white/5 text-slate-200"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
                {isUser && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80">
                    You
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-end gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-xs font-semibold text-purple-200">
                AI
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-300">
                Thinking...
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
              {error}
            </div>
          )}
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-3">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question about Jin Lee..."
              rows={3}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
            />
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading}
                className="rounded-full bg-linear-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-purple-500/40 disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
