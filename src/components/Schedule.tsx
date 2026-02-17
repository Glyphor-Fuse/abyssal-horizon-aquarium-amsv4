import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Star, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const EVENTS = [
  {
    time: '10:30 AM',
    title: 'Great Reef Feeding',
    location: 'Lagoon A',
    type: 'Feeding',
    intensity: 'High'
  },
  {
    time: '01:00 PM',
    title: 'Shark Alley Encounter',
    location: 'Apex Predator Tank',
    type: 'Interactive',
    intensity: 'Medium'
  },
  {
    time: '03:30 PM',
    title: 'Bioluminescence Show',
    location: 'Abyssal Theater',
    type: 'Live Show',
    intensity: 'Epic'
  },
  {
    time: '05:00 PM',
    title: 'Research Lab Tour',
    location: 'Lab Wing',
    type: 'Workshop',
    intensity: 'Medium'
  }
];

export const Schedule = () => {
  return (
    <section className="py-32 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Daily Expeditions</h2>
            <p className="text-foreground/60 text-lg">
              Coordinate your journey. From predator feedings to research spotlights, our world evolves throughout the day.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-background p-4 rounded-2xl border border-border shadow-xl">
            <Calendar className="h-6 w-6 text-primary" />
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-primary/70">Current Date</div>
              <div className="font-bold text-foreground">September 14, 2024</div>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1">Online Now</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center gap-6 p-8 bg-background/40 hover:bg-background rounded-[2rem] border border-border/50 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="text-center min-w-[90px] border-r border-border/50 pr-6">
                <div className="text-3xl font-black font-display text-primary leading-none mb-1">{event.time.split(' ')[0]}</div>
                <div className="text-[10px] text-foreground/40 font-black uppercase tracking-tighter">{event.time.split(' ')[1]}</div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-accent/20 text-accent-foreground text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border-none">
                    {event.type}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/50">
                    <MapPin className="h-4 w-4 text-primary/60" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/50">
                    <Star className="h-4 w-4 text-accent/60" />
                    {event.intensity} Intensity
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex h-14 w-14 rounded-2xl bg-muted items-center justify-center text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all border border-border">
                <Clock className="h-6 w-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
