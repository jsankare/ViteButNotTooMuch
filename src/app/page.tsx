"use client";

import { useState } from "react";
import { getRandomChallenge, type Challenge } from "@/lib/challenges";

export default function Home() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);

  const handleGetChallenge = () => {
      console.log("handleGetChallenge called");
    setCurrentChallenge(getRandomChallenge());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-5xl font-bold mb-6">
        Aller vite, mais pas trop vite #ViteButNotTooMuch
      </h1>
      <p className="text-xl mb-12 max-w-2xl">
        Des micro-défis quotidiens pour vous aider à progresser lentement et régulièrement.
        Des petits pas mènent à de grands changements.
      </p>
      
      {currentChallenge ? (
        <div className="challenge-card max-w-xl w-full mb-8">
          <h2 className="text-2xl font-bold mb-4">{currentChallenge.title}</h2>
          <p className="mb-4">{currentChallenge.description}</p>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>{currentChallenge.category}</span>
            <span>{currentChallenge.duration} minutes</span>
          </div>
        </div>
      ) : null}

      <button 
        className="button-primary"
        onClick={handleGetChallenge}
      >
        {currentChallenge ? "Avoir un nouveau challenge" : "Challenge du jour"}
      </button>
    </div>
  );
}