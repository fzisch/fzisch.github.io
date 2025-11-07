import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Coffee, DollarSign } from "lucide-react";

const donationOptions = [
  {
    name: "Ko-fi",
    icon: Coffee,
    url: "https://ko-fi.com/fzisch",
    description: "Buy me a coffee",
  },
  {
    name: "PayPal",
    icon: DollarSign,
    url: "https://paypal.me/fzisch",
    description: "Direct donation",
  },
];

export const DonationLinks = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className="max-w-2xl mx-auto px-4 mb-12"
    >
      <Card className="p-8 bg-gradient-to-br from-card to-secondary border-border shadow-card text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse relative" />
        <h2 className="text-3xl font-bold mb-2 font-orbitron tracking-wide relative">SUPPORT THE STREAM</h2>
        <p className="text-muted-foreground mb-6 font-rajdhani text-lg relative">
          Your support helps me create better content and improve the stream quality
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {donationOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
            >
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow transition-all duration-300 group font-rajdhani font-bold tracking-wide"
              >
                <a 
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <option.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {option.description}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.section>
  );
};
