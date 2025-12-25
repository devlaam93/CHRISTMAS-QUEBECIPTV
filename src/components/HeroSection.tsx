import { Gift, ArrowRight, Sparkles, TreePine, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import heroBanner from '@/assets/christmas-hero-banner.jpg';

const HeroSection = () => {
  const targetDate = new Date('2026-01-01T00:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20">
      {/* Christmas Hero Banner Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Christmas decorations" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-xmas-red/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-xmas-green/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-xmas-gold/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 text-6xl animate-float opacity-70">🎄</div>
      <div className="absolute top-48 right-16 text-5xl animate-bounce-slow opacity-70">🎁</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-sway opacity-60">⭐</div>
      <div className="absolute bottom-60 right-24 text-5xl animate-float opacity-60" style={{ animationDelay: '1s' }}>🎅</div>
      <div className="absolute top-72 left-1/4 text-3xl animate-twinkle opacity-50">✨</div>
      <div className="absolute top-96 right-1/3 text-3xl animate-twinkle opacity-50" style={{ animationDelay: '0.5s' }}>❄️</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 card-dark border-xmas-red/40 px-5 py-2.5 rounded-full mb-8 animate-scale-in">
            <Gift className="w-5 h-5 text-xmas-red animate-bounce-slow" />
            <span className="text-sm font-bold text-xmas-red font-body">🎄 Offre Spéciale de Noël</span>
            <TreePine className="w-5 h-5 text-xmas-green animate-sway" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-2 animate-slide-up leading-[1.1]">
            <span className="text-foreground">Quebec</span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient-xmas">IPTV</span>
          </h1>

          {/* Discount Display */}
          <div className="my-10 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-4 card-dark border-xmas-green/40 px-8 py-6 rounded-3xl glow-gold">
              <Star className="w-10 h-10 text-xmas-gold animate-twinkle" />
              <span className="text-6xl md:text-8xl font-display font-bold text-gradient-xmas">80%</span>
              <div className="text-left border-l-2 border-xmas-green/40 pl-4 ml-2">
                <div className="text-xmas-green font-display text-2xl md:text-3xl font-bold">RABAIS</div>
                <div className="text-muted-foreground text-sm font-body flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-xmas-gold" />
                  OFFRE DE NOËL
                </div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-body animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            <span className="text-xmas-red font-bold">🎁 +1 Mois Gratuit</span> avec tout abonnement!
            <br />
            Streaming 4K Premium • 15 000+ Chaînes • Canada
          </p>

          {/* Countdown */}
          <div className="mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-5 font-body uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="text-lg">🎄</span> L'offre expire dans <span className="text-lg">🎄</span>
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#pricing">
              <Button className="btn-xmas rounded-full px-10 py-7 text-lg font-body group shadow-xl">
                🎁 Voir les Forfaits
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
              <Button className="btn-green rounded-full px-10 py-7 text-lg font-body shadow-xl">
                🎄 Essai Gratuit 24H
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