import React from 'react';
import { Waves, Facebook, Instagram, Twitter, Mail, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background py-24 border-t border-border relative overflow-hidden">
      {/* Decorative Wave lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <Waves className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-foreground uppercase">
                Abyssal Horizon
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              Pioneering the next era of marine exploration and biodiversity protection. Join us in the depths.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center text-foreground/40 hover:text-primary hover:bg-muted/50 transition-all border border-border">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-8 uppercase tracking-[0.2em] text-[10px]">The Experience</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/50">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Underwater Tunnels</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">4D Abyssal Theater</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shark Diving Tours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research Lab Access</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VIP Expeditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-8 uppercase tracking-[0.2em] text-[10px]">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/50">
              <li className="flex items-start gap-3">
                <span className="text-primary/70">A:</span> 1000 Deep Sea Blvd, Oceanic District
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary/70">P:</span> +1 (800) 229-7725
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary/70">E:</span> deep@abyssalhorizon.com
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary/70">H:</span> 9:00 AM — 10:00 PM Daily
              </li>
            </ul>
          </div>

          <div className="bg-muted p-8 rounded-[2rem] border border-border">
            <h4 className="font-black text-foreground mb-4 uppercase tracking-[0.2em] text-[10px]">Join the Pod</h4>
            <p className="text-xs text-foreground/50 mb-6 leading-relaxed">
              Get weekly deep-sea insights and exclusive ticket drops.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Deep sea email" 
                className="bg-background border border-border rounded-xl px-5 py-3 text-sm w-full focus:outline-none focus:ring-2 ring-primary/30 transition-all" 
              />
              <button className="bg-primary text-primary-foreground font-black text-[10px] uppercase tracking-widest w-full py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-foreground/30 font-black tracking-widest uppercase">
          <div>© 2024 Abyssal Horizon. Scientific excellence in depth.</div>
          <div className="flex flex-wrap gap-8 justify-center">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Tickets Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            <a href="#" className="hover:text-primary transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
