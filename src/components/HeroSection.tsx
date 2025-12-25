import { Flame, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const targetDate = new Date('2026-01-01T00:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-fire-orange/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-fire-amber/10 rounded-full blur-[150px]" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--fire-orange)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--fire-orange)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 card-dark px-4 py-2 rounded-full mb-8 animate-scale-in border-fire-orange/30">
            <Flame className="w-4 h-4 text-fire-orange animate-flicker" />
            <span className="text-sm font-medium text-fire-orange font-body">Offre Limitée de Noël</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-2 animate-slide-up leading-[1.1]">
            <span className="text-foreground">Quebec</span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient-fire">IPTV</span>
          </h1>

          {/* Discount Display */}
          <div className="my-10 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-3 card-glow px-8 py-5 rounded-2xl">
              <Zap className="w-8 h-8 text-fire-amber" />
              <span className="text-5xl md:text-7xl font-display font-bold text-gradient-fire">80%</span>
              <div className="text-left border-l border-border/50 pl-4 ml-2">
                <div className="text-fire-orange font-display text-xl md:text-2xl font-bold">RABAIS</div>
                <div className="text-muted-foreground text-xs font-body">OFFRE DE NOËL</div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-body animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            <span className="text-fire-orange font-semibold">+1 Mois Gratuit</span> avec tout abonnement!
            <br />
            Streaming 4K Premium • 15 000+ Chaînes • Canada
          </p>

          {/* Countdown */}
          <div className="mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs text-muted-foreground mb-5 font-body uppercase tracking-[0.3em]">
              🔥 L'offre expire dans 🔥
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#pricing">
              <Button className="btn-fire rounded-lg px-8 py-6 text-base font-body group">
                Voir les Forfaits
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
              <Button className="btn-outline-fire rounded-lg px-8 py-6 text-base font-body">
                Essai Gratuit 24H
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
