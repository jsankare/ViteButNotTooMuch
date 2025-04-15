"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

export function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl no-underline hover:no-underline">
          ViteButNotTooMuch
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/browse" className="no-underline hover:no-underline">Browse</Link>
          <Link href="/about" className="no-underline hover:no-underline">About</Link>
          <Link href="/blog" className="no-underline hover:no-underline">Blog</Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}