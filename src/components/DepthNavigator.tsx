import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ZONES = [
  {
    name: 'Sunlight Zone',
    depth: '0 - 200m',
    description: 'The vibrant heart of the ocean where light fuels life and color explodes.',
    image: '/images/reef.jpg',
    species: ['Green Sea Turtle', 'Reef Shark', 'Clownfish']
  },
  {
    name: 'Twilight Zone',
    depth: '200 - 1,000m',
    description: 'A shadowy realm where bioluminescence begins to shimmer in the dark.',
    image: '/images/jellyfish.jpg',
    species: ['Moon Jelly', 'Humboldt Squid', 'Silver Hatchetfish']
  },
  {
    name: 'Midnight Zone',
    depth: '1,000 - 4,000m',
    description: 'Total darkness. Only the glow of strange, ancient creatures breaks the void.',
    image: '/images/deep-sea.jpg',
    species: ['Anglerfish', 'Giant Isopod', 'Gulper Eel']
  }
];

export const DepthNavigator = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25
  });

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-muted">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Depth Meter */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 h-1/2 flex flex-col items-center">
          <div className="w-1 h-full bg-background/50 relative rounded-full overflow-hidden border border-border">
            <motion.div 
              style={{ scaleY: smoothScroll }}
              className="absolute inset-0 bg-gradient-to-b from-primary to-accent origin-top shadow-[0_0_20px_rgba(var(--primary),0.5)]"
            />
          </div>
          <motion.div className="mt-6 font-mono text-sm text-primary font-bold">
            {useTransform(smoothScroll, [0, 1], [0, 4000]).get().toFixed(0)}m
          </motion.div>
        </div>

        {/* Dynamic Content Layers */}
        {ZONES.map((zone, index) => (
          <ZoneLayer 
            key={zone.name} 
            zone={zone} 
            index={index} 
            progress={smoothScroll} 
          />
        ))}
      </div>
    </section>
  );
};

const ZoneLayer = ({ zone, index, progress }: { zone: any, index: number, progress: any }) => {
  const start = index / ZONES.length;
  const end = (index + 1) / ZONES.length;
  
  const opacity = useTransform(progress, [start, start + 0.15, end - 0.15, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [1.15, 1]);
  const y = useTransform(progress, [start, end], [100, -100]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center p-6 md:p-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <motion.div style={{ y }} className="space-y-6 order-2 lg:order-1">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em]">
            {zone.depth}
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-foreground">
            {zone.name}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-body max-w-md leading-relaxed">
            {zone.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-6">
            {zone.species.map((s: string) => (
              <span key={s} className="px-5 py-4 rounded-xl bg-background/50 border border-border text-sm font-medium text-foreground/80 backdrop-blur-sm">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          style={{ scale }}
          className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 order-1 lg:order-2 ring-1 ring-border"
        >
          <img 
            src={zone.image} 
            alt={zone.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-muted/80 via-transparent to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DepthNavigator;
