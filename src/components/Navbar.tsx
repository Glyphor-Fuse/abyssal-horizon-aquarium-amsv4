import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Star, Waves, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Habitats', href: '#' },
    { name: 'Experiences', href: '#' },
    { name: 'Daily Schedule', href: '#' },
    { name: 'Our Impact', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-background/80 backdrop-blur-2xl border-b border-border shadow-2xl' : 'py-10 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-300">
            <Waves className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter text-foreground uppercase flex flex-col leading-[0.8]">
            Abyssal <span className="text-primary text-sm tracking-[0.3em] font-black">Horizon</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="rounded-2xl px-8 h-12 font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/30 group">
            Buy Tickets
            <Star className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 bg-background flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <Waves className="h-8 w-8 text-primary" />
                <span className="text-2xl font-display font-black text-foreground uppercase">Abyssal</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-10">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  className="text-4xl font-display font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <Button className="w-full py-8 text-xl rounded-3xl font-black uppercase tracking-widest">
                Buy Tickets
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
