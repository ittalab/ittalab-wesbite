export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "in-development" | "beta" | "live";
  icon: string;
  logo?: string;
  features: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
}

export const apps: App[] = [
  {
    slug: "fanpitch",
    name: "FanPitch",
    tagline: "PREDICT. WIN. BRAG.",
    description:
      "FanPitch is a football fan engagement mobile app. It combines score predictions with a competitive leaderboard and a social hot-takes debate feed. The app that is made by someone who genuinely loves football - not assembled from UI templates.",
    status: "live",
    icon: "⚽",
    logo: "/icons/fanpitch_logo.png",
    features: [
      "Predict exact scores and earn points across every matchday",
      "Create private leagues and compete with friends via invite code",
      "Leaderboards with Overall, Today, and Matchday scopes",
      "Hot Takes arena to post opinions, vote, and debate",
      "The Gaffer — your AI prediction coach (coming soon)",
    ],
  },
  {
    slug: "cardgame",
    name: "CardGame",
    tagline: "Traditional card game with fun rules",
    description:
      "Fun traditional card game to play with friends. Easy to learn, quick rounds, and a great way to pass the time. Perfect for game night or a casual hangout.",
    status: "in-development",
    icon: "🃏",
    features: [
      "2v2 team-based gameplay",
      "Use creative tactics to win hands and score points",
      "More rules will be added soon",
    ],
  },
  {
    slug: "salesTracker",
    name: "SalesTracker",
    tagline: "Track your sales performance with ease",
    description:
      "A simple tool to track your sales performance, visualize trends, and identify opportunities for growth. Connect your data and get insights at a glance.",
    status: "in-development",
    icon: "📊",
    features: [
      "Enter your inventory items",
      "Record sales and revenue",
      "Generate visual reports and trends",
      "Add credit sales and returns",
    ],
  },
];