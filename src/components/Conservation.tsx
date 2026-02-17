import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Leaf, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const MISSIONS = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Coral Restoration',
    content: 'Our reef labs outplant 5,000+ coral fragments annually to restore bleaching-damaged reefs.',
    stats: '15,000+ fragments'
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Genetic Resilience',
    content: 'Decoding genomes of deep-sea species to understand evolutionary adaptation.',
    stats: '12 Global Papers'
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Species Rescue',
    content: 'Specialized intensive care for injured marine mammals and stranded sea turtles.',
    stats: '890+ Successful Releases'
  }
];

export const Conservation = () => {
  return (
    <section className="py-32 bg-muted relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <div>
            <Badge variant="outline" className="mb-6 bg-accent/20 text-accent border-none px-4 py-1 font-black text-[10px] tracking-widest uppercase">Our Mission</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 leading-[1.1]">
              A Future for <br />
              <span className="text-primary">Our Blue Planet</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed font-body">
              Every admission ticket funds our global research initiatives. We aren't just an aquarium—we are a frontline defender of oceanic biodiversity.
            </p>
            
            <div className="grid gap-6">
              {MISSIONS.map((m, idx) => (
                <motion.div 
                  key={m.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 rounded-3xl bg-background/50 border border-border group hover:border-accent/40 hover:bg-background transition-all"
                >
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    {m.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-foreground mb-2">{m.title}</h4>
                    <p className="text-sm text-foreground/50 leading-relaxed mb-3">{m.content}</p>
                    <div className="inline-block text-[10px] font-black font-mono text-accent uppercase tracking-widest py-1 px-3 bg-accent/10 rounded-lg">
                      {m.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-border shadow-3xl">
              <img 
                src="/images/conservation.jpg" 
                alt="Coral research scientist" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-muted via-transparent to-transparent opacity-60" />
            </div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute -bottom-10 -left-10 md:-left-16 bg-accent p-10 rounded-[2.5rem] shadow-2xl max-w-xs ring-4 ring-muted"
            >
              <div className="text-5xl font-black font-display text-accent-foreground mb-3">94%</div>
              <div className="text-accent-foreground/80 font-bold text-sm uppercase tracking-widest leading-relaxed">
                Of net revenue goes into habitat restoration.
              </div>
            </motion.div>

            <div className="absolute top-10 right-10 flex flex-col gap-4">
              <div className="h-12 w-12 bg-muted/30 backdrop-blur-md rounded-full flex items-center justify-center border border-border">
                <ArrowRight className="text-foreground h-5 w-5 -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conservation;
