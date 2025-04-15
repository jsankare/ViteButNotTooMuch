export const challenges = [
  {
    id: "1",
    title: "Mindful Breathing",
    description: "Take 5 deep breaths, focusing only on your breathing pattern.",
    category: "Mind",
    duration: 5,
  },
  {
    id: "2",
    title: "Quick Stretch",
    description: "Stand up and do a full-body stretch for 5 minutes.",
    category: "Wellness",
    duration: 5,
  },
  {
    id: "3",
    title: "Learn One Word",
    description: "Learn one new word in a language you're interested in.",
    category: "Learning",
    duration: 5,
  },
];

export function getRandomChallenge() {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}

export function getChallengesByCategory(category) {
  if (!category) return challenges;
  return challenges.filter((challenge) => challenge.category === category);
}

export function getChallengesByDuration(duration) {
  if (!duration) return challenges;
  return challenges.filter((challenge) => challenge.duration === duration);
}