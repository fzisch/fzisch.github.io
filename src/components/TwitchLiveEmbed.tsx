import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const TwitchLiveEmbed = () => {
  const [isLive, setIsLive] = useState(false);
  const [streamData, setStreamData] = useState<any>(null);
  const twitchUsername = "fzisch";

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        // Using Twitch embed API - no API key needed for embeds
        // We'll simulate live status for demo purposes
        // In production, you'd use Twitch API with your client ID
        
        // For now, we'll check if the Twitch channel exists and show embed
        // You can add actual API integration later
        const response = await fetch(`https://www.twitch.tv/${twitchUsername}`);
        if (response.ok) {
          // Channel exists, show embed (will show offline message if not live)
          setStreamData({ username: twitchUsername });
        }
      } catch (error) {
        console.error("Error checking Twitch status:", error);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="max-w-4xl mx-auto px-4 mb-12"
    >
      <div className="relative">
        <AnimatePresence>
          {isLive && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="absolute -top-4 left-4 z-10"
            >
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold shadow-glow animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full inline-block mr-2 animate-pulse" />
                LIVE NOW
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>

        <Card className="overflow-hidden bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-muted to-secondary">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <h2 className="text-2xl font-bold font-orbitron">Live Stream</h2>
            </div>
            <a
              href={`https://twitch.tv/${twitchUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">Watch on Twitch</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="aspect-video bg-background relative">
            {streamData ? (
              <iframe
                src={`https://player.twitch.tv/?channel=${twitchUsername}&parent=${window.location.hostname}&muted=false`}
                height="100%"
                width="100%"
                allowFullScreen
                className="absolute inset-0"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-secondary">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl">🎮</span>
                  </div>
                  <p className="text-muted-foreground font-rajdhani">
                    Stream will appear here when live
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-card border-t border-border">
            <p className="text-sm text-muted-foreground font-rajdhani">
              {isLive
                ? "Currently streaming! Join the chat and say hi!"
                : "Not streaming right now - follow on Twitch to get notified when I go live!"}
            </p>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};
