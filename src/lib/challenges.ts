export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: "Mind" | "Wellness" | "Learning";
  duration: 5 | 10 | 15;
  keywords?: string[];  // SEO keywords
  benefits?: string[];  // Benefits for motivation and SEO
}

export const challenges: Challenge[] = [
  {
    id: "1",
    title: "5-Minute Mindful Breathing Exercise",
    description: "Practice focused breathing to reduce stress and improve mental clarity. Focus on each breath, noticing the rhythm and sensation.",
    category: "Mind",
    duration: 5,
    keywords: ["meditation", "mindfulness", "stress relief", "breathing exercise", "mental health"],
    benefits: ["Reduces stress", "Improves focus", "Calms anxiety", "Better oxygen flow"],
  },
  {
    id: "2",
    title: "Quick Full-Body Stretch Routine",
    description: "Energize your body with a comprehensive stretching sequence targeting major muscle groups.",
    category: "Wellness",
    duration: 5,
    keywords: ["stretching", "flexibility", "fitness", "body wellness", "quick exercise"],
    benefits: ["Improves flexibility", "Reduces muscle tension", "Increases energy", "Better posture"],
  },
  {
    id: "3",
    title: "Daily Vocabulary Builder Challenge",
    description: "Expand your vocabulary by learning and using one new word in your target language.",
    category: "Learning",
    duration: 5,
    keywords: ["language learning", "vocabulary", "education", "self-improvement", "linguistics"],
    benefits: ["Expands vocabulary", "Improves memory", "Enhances communication", "Cultural awareness"],
  },
  {
    id: "4",
    title: "Mindful Body Scan Meditation",
    description: "Perform a progressive body scan meditation, bringing awareness to each part of your body.",
    category: "Mind",
    duration: 10,
    keywords: ["meditation", "body awareness", "relaxation", "mindfulness", "stress relief"],
    benefits: ["Deep relaxation", "Body awareness", "Stress reduction", "Better sleep"],
  },
  {
    id: "5",
    title: "Quick Memory Training Exercise",
    description: "Challenge your memory by memorizing a sequence of numbers or words in 5 minutes.",
    category: "Learning",
    duration: 5,
    keywords: ["memory training", "brain exercise", "cognitive improvement", "mental fitness"],
    benefits: ["Improves memory", "Enhances focus", "Boosts cognitive function", "Mental agility"],
  },
  {
    id: "6",
    title: "15-Minute Productivity Planning",
    description: "Plan your day using the ViteButNotTooMuch method, focusing on essential tasks and breaks.",
    category: "Mind",
    duration: 15,
    keywords: ["productivity", "planning", "time management", "organization", "goal setting"],
    benefits: ["Better organization", "Reduced stress", "Increased productivity", "Clear priorities"],
  },
  {
    id: "7",
    title: "Quick Desk Yoga Sequence",
    description: "Practice simple yoga poses that can be done at your desk to relieve tension.",
    category: "Wellness",
    duration: 5,
    keywords: ["desk yoga", "office exercise", "workplace wellness", "stretching", "fitness"],
    benefits: ["Reduces stiffness", "Improves posture", "Increases energy", "Reduces stress"],
  },
  {
    id: "8",
    title: "10-Minute Language Immersion",
    description: "Listen to and repeat phrases in your target language, focusing on pronunciation.",
    category: "Learning",
    duration: 10,
    keywords: ["language learning", "pronunciation", "speaking practice", "immersion"],
    benefits: ["Improves pronunciation", "Builds confidence", "Enhances listening skills", "Cultural learning"],
  },
  {
    id: "9",
    title: "Gratitude Journaling Exercise",
    description: "Write down three things you're grateful for, focusing on the present moment.",
    category: "Mind",
    duration: 5,
    keywords: ["gratitude", "journaling", "mental health", "positive psychology", "mindfulness"],
    benefits: ["Increases positivity", "Reduces stress", "Improves mood", "Better perspective"],
  },
  {
    id: "10",
    title: "Quick Core Strengthening",
    description: "Perform a series of simple core exercises to build strength and stability.",
    category: "Wellness",
    duration: 5,
    keywords: ["core exercise", "fitness", "strength training", "physical health", "workout"],
    benefits: ["Strengthens core", "Improves posture", "Reduces back pain", "Better stability"],
  },
  {
    id: "11",
    title: "15-Minute Reading Comprehension",
    description: "Read a short article and summarize the main points to improve comprehension.",
    category: "Learning",
    duration: 15,
    keywords: ["reading", "comprehension", "learning", "education", "study skills"],
    benefits: ["Improves understanding", "Enhances retention", "Better analysis", "Knowledge building"],
  },
  {
    id: "12",
    title: "Mindful Walking Exercise",
    description: "Take a short mindful walk, focusing on each step and your surroundings.",
    category: "Mind",
    duration: 10,
    keywords: ["walking meditation", "mindfulness", "exercise", "outdoor activity", "mental health"],
    benefits: ["Physical activity", "Mental clarity", "Stress relief", "Nature connection"],
  },
  {
    id: "13",
    title: "Quick Balance Training",
    description: "Practice simple balance exercises to improve stability and body awareness.",
    category: "Wellness",
    duration: 5,
    keywords: ["balance", "fitness", "coordination", "exercise", "physical health"],
    benefits: ["Improves balance", "Better coordination", "Core strength", "Fall prevention"],
  },
  {
    id: "14",
    title: "5-Minute Math Challenge",
    description: "Solve quick mental math problems to sharpen numerical skills.",
    category: "Learning",
    duration: 5,
    keywords: ["math", "mental arithmetic", "brain training", "education", "cognitive skills"],
    benefits: ["Mental math skills", "Quick thinking", "Problem-solving", "Cognitive function"],
  },
  {
    id: "15",
    title: "Positive Affirmation Practice",
    description: "Create and repeat positive affirmations to boost confidence and mindset.",
    category: "Mind",
    duration: 5,
    keywords: ["affirmations", "positive thinking", "self-improvement", "mental health", "motivation"],
    benefits: ["Builds confidence", "Positive mindset", "Self-improvement", "Mental strength"],
  }
];

// Additional helper function for keyword-based search
export function getChallengesByKeyword(keyword: string): Challenge[] {
  const lowercaseKeyword = keyword.toLowerCase();
  return challenges.filter(challenge => 
    challenge.keywords?.some(k => k.toLowerCase().includes(lowercaseKeyword)) ||
    challenge.title.toLowerCase().includes(lowercaseKeyword) ||
    challenge.description.toLowerCase().includes(lowercaseKeyword)
  );
}

// Helper function to get challenges by benefit
export function getChallengesByBenefit(benefit: string): Challenge[] {
  const lowercaseBenefit = benefit.toLowerCase();
  return challenges.filter(challenge =>
    challenge.benefits?.some(b => b.toLowerCase().includes(lowercaseBenefit))
  );
}

// Original functions remain unchanged
export function getRandomChallenge(): Challenge {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}

export function getChallengesByCategory(category?: Challenge["category"]): Challenge[] {
  if (!category) return challenges;
  return challenges.filter((challenge) => challenge.category === category);
}

export function getChallengesByDuration(duration?: Challenge["duration"]): Challenge[] {
  if (!duration) return challenges;
  return challenges.filter((challenge) => challenge.duration === duration);
}