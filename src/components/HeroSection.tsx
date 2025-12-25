import { Sparkles, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const targetDate = new Date('2026-01-01T00:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-burgundy/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-forest/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-luxury-gold/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-luxury-gold/50" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/30 bg-card/50 backdrop-blur-sm">
              <Crown className="w-4 h-4 text-luxury-gold" />
              <span className="text-xs md:text-sm font-medium text-luxury-gold tracking-[0.2em] uppercase font-body">
                Collection Noël 2024
              </span>
            </div>
            <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-luxury-gold/50" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-4 leading-[0.95] animate-slide-up">
            <span className="block text-luxury-champagne">Quebec</span>
            <span className="block text-gradient-luxury mt-2">IPTV</span>
          </h1>

          {/* Discount Display */}
          <div className="my-10 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-4">
              <div className="text-6xl md:text-8xl font-display font-bold text-gradient-gold">
                80%
              </div>
              <div className="text-left">
                <div className="text-luxury-burgundy-light font-display text-2xl md:text-3xl">RABAIS</div>
                <div className="text-luxury-gold/70 text-sm font-body tracking-wider">OFFRE LIMITÉE</div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-body leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Sparkles className="inline w-4 h-4 text-luxury-gold mr-2" />
            Cadeau exclusif: <span className="text-luxury-gold">1 Mois Gratuit</span> avec tout abonnement.
            <br className="hidden md:block" />
            Streaming 4K Premium • 15 000+ Chaînes • Contenu Illimité
          </p>

          {/* Countdown */}
          <div className="mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs text-muted-foreground mb-5 font-body uppercase tracking-[0.3em]">
              L'offre expire dans
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#pricing">
              <Button className="bg-gradient-gold text-luxury-forest-dark font-semibold px-8 py-6 text-base rounded-md hover:opacity-90 transition-all group font-body">
                Découvrir les Forfaits
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-luxury-gold/40 text-luxury-gold hover:bg-luxury-gold/10 px-8 py-6 text-base rounded-md font-body">
                Essai Gratuit 24H
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
