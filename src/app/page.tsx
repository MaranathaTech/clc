"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [compliment, setCompliment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setCompliment("");

    try {
      const res = await fetch("/api/compliment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() || undefined }),
      });
      const data = await res.json();
      setCompliment(data.compliment);
    } catch {
      setCompliment("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-zinc-900 dark:via-purple-950 dark:to-indigo-950 p-6">
      <div className="w-full max-w-md bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
          Compliment Me
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          Enter your name and get a sweet compliment!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 disabled:opacity-50 transition"
          >
            {loading ? "Crafting your compliment..." : "Get My Compliment"}
          </button>
        </form>

        {compliment && (
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border border-purple-200 dark:border-purple-800">
            <p className="text-lg font-medium text-zinc-700 dark:text-zinc-200">
              {compliment}
            </p>
          </div>
        )}
      </div>

      <p className="mt-8 text-sm text-zinc-400 dark:text-zinc-600">
        Made with love
      </p>
    </div>
  );
}
