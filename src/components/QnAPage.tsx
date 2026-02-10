"use client";

import Image from "next/image";
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
    "What visa are you on? Do you need sponsorship?",
  ] as const;

  const cannedAnswers: Record<(typeof suggestedQuestions)[number], string> = {
    "What projects are you most proud of?":
      "I'm especially proud of projects like Before You Go (AI review summarisation), Smart Farm Monitoring (ML-based behaviour detection), and AI Crop Doctor (real-time plant disease diagnosis). They each combine real user problems with production-level engineering.",
    "What is your core tech stack?":
      "For web products, my core stack is Next.js, React, TypeScript, Tailwind CSS on the frontend, and Node.js, Supabase/PostgreSQL on the backend. I also work with AI APIs like Gemini and OpenAI.",
    "What kind of roles are you looking for?":
      "I'm most interested in roles where I can build production-ready web applications end-to-end: from designing the data model and APIs to shipping polished frontend experiences.",
    "What problems do you enjoy solving?":
      "I enjoy simplifying complex flows, making data-heavy experiences feel intuitive, and building systems that stay reliable under real-world constraints.",
    "What visa are you on? Do you need sponsorship?":
      "I'm currently in Sydney on a subclass 820 partner visa. I can work full-time with no work restrictions, and I don't require employer sponsorship to be hired.",
  };

  const handleSuggestedClick = (question: (typeof suggestedQuestions)[number]) => {
    const answer = cannedAnswers[question];
    if (!answer) {
      setInput(question);
      return;
    }

    // Add user message + temporary assistant typing indicator
    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
      { role: "assistant", content: "..." },
    ]);
    setInput("");
    setError(null);

    // After a short delay, replace "..." with the canned answer
    window.setTimeout(() => {
      setMessages((prev) => {
        const next = [...prev];
        for (let i = next.length - 1; i >= 0; i -= 1) {
          if (next[i].role === "assistant" && next[i].content === "...") {
            next[i] = { ...next[i], content: answer };
            break;
          }
        }
        return next;
      });
    }, 2000);
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];

    // 사용자가 직접 타이핑한 질문(추천 질문이 아닌 것)의 개수 계산
    const typedQuestionCount = nextMessages.filter(
      (message) =>
        message.role === "user" &&
        !suggestedQuestions.includes(
          message.content as (typeof suggestedQuestions)[number],
        ),
    ).length;

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
      let finalAnswer = data.answer;

      // 직접 타이핑한 질문이 두 번째 이상일 때, 토큰/커피 관련 유쾌한 문구 추가
      if (typedQuestionCount >= 2) {
        finalAnswer +=
          "\n\n---\nBy the way, this AI runs on Jin's own tokens. If you keep firing lots of questions, his wallet might end up a little empty—consider this a tiny coffee-fund reminder ☕.";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: finalAnswer }]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-slate-950 text-white pt-24'>
      <div className='container mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl flex-col px-4 md:px-6'>
        <div className='mb-6 space-y-2'>
          <p className='text-sm uppercase tracking-[0.2em] text-purple-300'>AI Chat</p>
          <h1 className='text-3xl md:text-4xl font-bold'>Ask Me Anything</h1>
          <p className='text-sm text-slate-400'>
            This is an AI version of me. It answers questions based on my profile, projects, and experience.
          </p>
        </div>

        <div className='flex-1 space-y-6 pr-2'>
          <div className='flex flex-wrap gap-2'>
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type='button'
                onClick={() => handleSuggestedClick(question)}
                className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-purple-500/40 hover:bg-white/10 transition'>
                {question}
              </button>
            ))}
          </div>

          {messages.length === 0 && (
            <div className='rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300'>
              Try: “What projects are you most proud of?” or “What is your core tech stack?”
            </div>
          )}

          {messages.map((message, index) => {
            const isUser = message.role === "user";
            const isTyping = message.role === "assistant" && message.content === "...";
            return (
              <div
                key={`${message.role}-${index}`}
                className={`flex items-end gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
                {!isUser && (
                  <div className='relative h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-white/5'>
                    <Image src='/profile.png' alt='Jin Lee' fill className='object-cover' />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl border px-5 py-4 ${
                    isUser
                      ? "border-purple-500/30 bg-linear-to-r from-purple-600/20 to-blue-600/20 text-white"
                      : "border-white/10 bg-white/5 text-slate-200"
                  }`}>
                  <p className='leading-relaxed whitespace-pre-wrap'>
                    {isTyping ? (
                      <span className='inline-flex items-center gap-1'>
                        <span className='h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce' />
                        <span className='h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:150ms]' />
                        <span className='h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:300ms]' />
                      </span>
                    ) : (
                      message.content
                    )}
                  </p>
                </div>
                {isUser && (
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80'>
                    You
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className='flex items-end gap-3'>
              <div className='relative h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-white/5'>
                <Image src='/profile.png' alt='Jin Lee' fill className='object-cover' />
              </div>
              <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-300'>
                <span className='inline-flex items-center gap-2'>
                  <span>Thinking</span>
                  <span className='inline-flex items-center gap-1'>
                    <span className='h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce' />
                    <span className='h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:150ms]' />
                    <span className='h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:300ms]' />
                  </span>
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className='rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-200'>
              {error}
            </div>
          )}
        </div>

        <div className='mt-6 border-t border-white/10 pt-4'>
          <div className='flex flex-col gap-3'>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder='Ask a question about Jin Lee...'
              rows={3}
              className='w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500'
            />
            <div className='flex items-center justify-end gap-3 mb-50'>
              <button
                type='button'
                onClick={handleSend}
                disabled={isLoading}
                className='rounded-full bg-linear-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-purple-500/40 disabled:opacity-60'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
