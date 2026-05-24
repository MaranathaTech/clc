export const compliments = [
  "You are doing amazing and you should be proud of yourself!",
  "The world is better because you are in it.",
  "You have an incredible ability to make people feel valued.",
  "Your creativity is truly inspiring.",
  "You bring positivity wherever you go.",
  "You are stronger than you think and braver than you believe.",
  "Your kindness makes a bigger difference than you know.",
  "You have such a wonderful perspective on life.",
  "People around you are lucky to have you.",
  "You handle challenges with grace and determination.",
  "Your smile could light up a room.",
  "You are someone who makes the world a little brighter.",
  "The way you care about others is truly special.",
  "You are exactly who someone needs right now.",
  "You have a gift for making people feel at home.",
  "Your hard work does not go unnoticed.",
  "You are a natural problem solver -- that is a superpower.",
  "You deserve all the good things coming your way.",
  "You make even the hardest days look easy.",
  "You are more talented than you give yourself credit for.",
];

export function getRandomCompliment(name?: string): string {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];

  if (name && name.trim()) {
    const personalizations = [
      name + ", " + compliment[0].toLowerCase() + compliment.slice(1),
      "Here is the truth, " + name + ": " + compliment,
      name + ", seriously -- " + compliment[0].toLowerCase() + compliment.slice(1),
    ];
    return personalizations[Math.floor(Math.random() * personalizations.length)];
  }

  return compliment;
}
