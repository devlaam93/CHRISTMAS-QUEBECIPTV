import { Crown, Sparkles, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PlatinumBanner = () => {
  return (
    <ScrollReveal animation="fade-up" duration={700}>
      <div className="relative py-8 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-xmas-gold/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-xmas-gold/20 blur-3xl rounded-full" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Left decorations */}
            <div className="hidden md:flex items-center gap-2">
              <Star className="w-4 h-4 text-xmas-gold animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-xmas-gold/50" />
            </div>
            
            {/* Main content */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-xmas-gold/20 border border-xmas-gold/30">
                <Crown className="w-6 h-6 text-xmas-gold" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-xmas-gold/80 font-body mb-1">
                  Exclusivité Canada & USA
                </p>
                <h3 className="text-lg md:text-xl font-display font-bold bg-gradient-to-r from-xmas-gold via-yellow-300 to-xmas-gold bg-clip-text text-transparent">
                  Découvrez l'Offre Platinum
                </h3>
              </div>
              <Sparkles className="w-5 h-5 text-xmas-gold animate-pulse" />
            </div>
            
            {/* Right decorations */}
            <div className="hidden md:flex items-center gap-2">
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-xmas-gold/50" />
              <Star className="w-4 h-4 text-xmas-gold animate-pulse" />
            </div>
          </div>
          
          {/* Animated line below */}
          <div className="mt-6 flex justify-center">
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-xmas-gold to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default PlatinumBanner;
