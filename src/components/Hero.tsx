import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero-ocean.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold text-foreground tracking-tighter mb-6 leading-tight">
            THE OCEAN'S <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
              LAST FRONTIER
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Descend into 12 million gallons of wonder at the world's largest aquatic sanctuary. Witness life in the deep as never before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full group bg-primary hover:bg-primary/90">
              Reserve Tickets
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-md">
              Explore Habitats
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-foreground/50 font-bold">The Descent</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary via-accent/50 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;
