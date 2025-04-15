"use client";

import { useState } from "react";
import { getRandomChallenge, type Challenge } from "@/lib/challenges";

export default function Home() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);

  const handleGetChallenge = () => {
    setCurrentChallenge(getRandomChallenge());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-5xl font-bold mb-6">
        Go fast... but not too much
      </h1>
      <p className="text-xl mb-12 max-w-2xl">
        Daily micro-challenges to help you improve slowly and consistently.
        Small steps lead to big changes.
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
        {currentChallenge ? "Get Another Challenge" : "Get Today's Challenge"}
      </button>
    </div>
  );
}