import { Gift, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const targetDate = new Date('2026-01-01T00:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient-hero" />
      
      {/* Floating Decorations */}
      <div className="absolute top-32 left-[10%] text-5xl animate-float opacity-80">🎄</div>
      <div className="absolute top-40 right-[15%] text-4xl animate-float opacity-70" style={{ animationDelay: '-2s' }}>⭐</div>
      <div className="absolute bottom-32 left-[15%] text-4xl animate-float opacity-70" style={{ animationDelay: '-3s' }}>🎁</div>
      <div className="absolute bottom-40 right-[10%] text-5xl animate-float opacity-80" style={{ animationDelay: '-1s' }}>🎅</div>
      <div className="absolute top-1/2 left-[5%] text-3xl animate-bounce-slow opacity-60">❄️</div>
      <div className="absolute top-1/3 right-[8%] text-3xl animate-bounce-slow opacity-60" style={{ animationDelay: '-1.5s' }}>✨</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-scale-in">
            <Star className="w-4 h-4 text-xmas-gold" />
            <span className="text-sm font-medium text-foreground font-body">Offre Spéciale de Noël 2024</span>
            <Star className="w-4 h-4 text-xmas-gold" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 animate-slide-up leading-tight">
            <span className="text-foreground">Quebec</span>
            <br />
            <span className="text-gradient-xmas">IPTV</span>
          </h1>

          {/* Discount */}
          <div className="my-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-4">
              <span className="text-6xl md:text-8xl font-display font-bold text-gradient-gold">80%</span>
              <div className="text-left">
                <div className="text-xmas-red font-display text-2xl md:text-3xl font-bold">RABAIS</div>
                <div className="text-muted-foreground text-sm font-body">Durée limitée</div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-body animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            <Gift className="inline w-5 h-5 text-xmas-red mr-2" />
            Cadeau: <span className="text-xmas-green font-semibold">1 Mois Gratuit</span> avec tout abonnement!
            <br />
            Streaming 4K • 15 000+ Chaînes • Canada
          </p>

          {/* Countdown */}
          <div className="mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs text-muted-foreground mb-5 font-body uppercase tracking-widest">
              🎄 L'offre expire dans 🎄
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#pricing">
              <Button className="btn-gradient-red rounded-full px-8 py-6 text-base font-body group hover:opacity-90 transition-opacity">
                Voir les Forfaits
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
              <Button className="glass-card bg-white/80 hover:bg-white text-foreground rounded-full px-8 py-6 text-base font-body border-2 border-xmas-green/30">
                🎁 Essai Gratuit 24H
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
