"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getChallengesByCategory, getChallengesByDuration, type Challenge } from "@/lib/challenges";

export default function Browse() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as Challenge["category"] | undefined;
  const initialDuration = searchParams.get("duration") ? Number(searchParams.get("duration")) as Challenge["duration"] : undefined;

  const [selectedCategory, setSelectedCategory] = useState<Challenge["category"] | undefined>(initialCategory);
  const [selectedDuration, setSelectedDuration] = useState<Challenge["duration"] | undefined>(initialDuration);

  const challenges = selectedCategory
    ? getChallengesByCategory(selectedCategory)
    : selectedDuration
    ? getChallengesByDuration(selectedDuration)
    : getChallengesByCategory();

  const handleCategoryChange = (category: Challenge["category"] | undefined) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/browse?${params.toString()}`);
  };

  const handleDurationChange = (duration: Challenge["duration"] | undefined) => {
    setSelectedDuration(duration);
    const params = new URLSearchParams(searchParams);
    if (duration) {
      params.set("duration", duration.toString());
    } else {
      params.delete("duration");
    }
    router.push(`/browse?${params.toString()}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1>Browse Challenges</h1>
      
      <div className="flex gap-4 mb-8">
        <select
          className="button-secondary"
          onChange={(e) => handleCategoryChange(e.target.value as Challenge["category"] || undefined)}
          value={selectedCategory || ""}
        >
          <option value="">All Categories</option>
          <option value="Mind">Mind</option>
          <option value="Wellness">Wellness</option>
          <option value="Learning">Learning</option>
        </select>

        <select
          className="button-secondary"
          onChange={(e) => handleDurationChange(Number(e.target.value) as Challenge["duration"] || undefined)}
          value={selectedDuration || ""}
        >
          <option value="">All Durations</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
            <p className="mb-4">{challenge.description}</p>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{challenge.category}</span>
              <span>{challenge.duration} minutes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}