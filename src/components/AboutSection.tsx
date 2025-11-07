import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="max-w-2xl mx-auto px-4 mb-12"
    >
      <Card className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
        <h2 className="text-2xl font-bold mb-4 text-primary">About Me</h2>
        <p className="text-foreground/90 leading-relaxed">
          Welcome to my streaming hub! I'm passionate about gaming and sharing epic moments with my community. 
          Whether I'm grinding competitive matches or exploring new games, you'll find me live on my channels. 
          Join the squad and let's create some unforgettable gaming memories together!
        </p>
      </Card>
    </motion.section>
  );
};
