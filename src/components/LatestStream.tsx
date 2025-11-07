import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export const LatestStream = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="max-w-2xl mx-auto px-4 mb-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Content</h2>
      <Card className="overflow-hidden bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
        <div className="aspect-video bg-gradient-to-br from-muted to-secondary relative group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm group-hover:bg-background/30 transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-all duration-300">
                <Play className="w-10 h-10 text-primary fill-primary" />
              </div>
              <p className="text-muted-foreground">Latest stream will appear here</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Check out my latest streams!</h3>
          <p className="text-muted-foreground">
            Catch me live on Twitch or watch the highlights on YouTube
          </p>
        </div>
      </Card>
    </motion.section>
  );
};
