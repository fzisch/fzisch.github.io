import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Twitch",
    icon: "🎮",
    url: "https://twitch.tv/fzisch",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    name: "YouTube",
    icon: "📺",
    url: "https://youtube.com/@fzisch",
    color: "from-red-500/20 to-red-600/20",
  },
  {
    name: "TikTok",
    icon: "🎵",
    url: "https://tiktok.com/@fzisch",
    color: "from-pink-500/20 to-pink-600/20",
  },
  {
    name: "Discord",
    icon: "💬",
    url: "https://discord.gg/fzisch",
    color: "from-blue-500/20 to-blue-600/20",
  },
];

export const PlatformLinks = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Connect With Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          >
            <Card className={`p-6 bg-gradient-to-br ${platform.color} border-border hover:border-primary transition-all duration-300 hover:scale-105 group`}>
              <a 
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{platform.icon}</span>
                  <span className="text-lg font-semibold">{platform.name}</span>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
