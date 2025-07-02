"use client";

import { useState } from "react";
import { getRandomChallenge, type Challenge } from "@/lib/challenges";
import Image from "next/image";

export default function Home() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);

  const handleGetChallenge = () => {
    setCurrentChallenge(getRandomChallenge());
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg_seo.webp"
          alt="Arrière-plan illustrant des micro-challenges quotidiens et la progression personnelle"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Aller vite, mais pas trop vite #ViteButNotTooMuch
        </h1>
        <p className="text-xl mb-12 max-w-2xl text-white/90">
          Des micro-défis quotidiens pour vous aider à progresser lentement et régulièrement.
          Des petits pas mènent à de grands changements.
        </p>
        {currentChallenge ? (
          <div className="challenge-card max-w-xl w-full mb-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
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
    </section>
  );
}