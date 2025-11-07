import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-50 animate-pulse" />
            <img 
              src={profileAvatar} 
              alt="fzisch profile" 
              className="relative w-32 h-32 rounded-full border-4 border-primary shadow-glow"
            />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-6xl md:text-8xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent font-orbitron tracking-wider"
        >
          FZISCH
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-muted-foreground max-w-md mx-auto font-rajdhani font-semibold tracking-wide"
        >
          STREAMER • CONTENT CREATOR • GAMER
        </motion.p>
      </motion.div>
    </section>
  );
};
