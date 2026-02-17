import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TIERS = [
  {
    name: 'Explorer Pass',
    price: '$45',
    description: 'Daylight zone access & reef exhibits.',
    features: ['General Admission', 'Touch Tank Access', 'Daily Presentations', 'Digital Guide'],
    popular: false
  },
  {
    name: 'Deep Diver',
    price: '$79',
    description: 'Full access including the Abyssal Zone.',
    features: ['Everything in Explorer', 'Midnight Abyss Entry', '4D Cinema Seat', 'Fast Pass Entry'],
    popular: true
  },
  {
    name: 'Horizon Elite',
    price: '$149',
    description: 'Guided VIP research expedition.',
    features: ['All Area Access', 'Guided Lab Tour', 'Animal Interaction', 'Research Donation'],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="tickets" className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[160px] animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary py-1 px-4 uppercase tracking-[0.3em] font-black text-[10px]">Reservations</Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Choose Your Immersion</h2>
          <p className="text-foreground/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Every ticket supports our global reef restoration initiatives. Experience wonder while funding the future of our oceans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative overflow-hidden flex flex-col bg-muted/30 backdrop-blur-xl border-border transition-all duration-500 hover:border-primary/50 hover:translate-y-[-8px] ${tier.popular ? 'ring-2 ring-primary/50 shadow-[0_0_40px_rgba(var(--primary),0.15)]' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-primary text-primary-foreground py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                    <SparklesCore className="h-3 w-3" /> Most Popular <SparklesCore className="h-3 w-3" />
                  </div>
                )}
                
                <CardHeader className={tier.popular ? 'pt-10' : ''}>
                  <CardTitle className="text-3xl font-display font-bold mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-foreground/50 font-medium">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-8 pb-8 border-b border-border/50">
                    <span className="text-6xl font-black font-display text-foreground">{tier.price}</span>
                    <span className="text-foreground/40 ml-2 font-bold text-sm tracking-widest uppercase">/ guest</span>
                  </div>
                  
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4 text-sm text-foreground/70 font-medium">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button className={`w-full h-14 rounded-2xl text-lg font-black transition-all ${tier.popular ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30' : 'bg-muted hover:bg-muted/80 text-foreground border border-border'}`}>
                    Book Admission
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted rounded-full border border-border text-sm text-foreground/40 font-bold">
            <Info className="h-5 w-5 text-primary" />
            Group discounts available for parties of 10 or more. 
            <a href="#" className="text-primary hover:underline ml-1">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
