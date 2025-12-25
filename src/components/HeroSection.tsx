import { Gift, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  // Set countdown to January 1st, 2026
  const targetDate = new Date('2026-01-01T00:00:00');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-christmas-red/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-christmas-green/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-christmas-gold/5 rounded-full blur-3xl" />
      
      {/* Christmas Decorative Elements */}
      <div className="absolute top-32 left-10 text-4xl animate-swing">🎄</div>
      <div className="absolute top-48 right-20 text-3xl animate-float" style={{ animationDelay: '-1s' }}>⭐</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-swing" style={{ animationDelay: '-2s' }}>🎁</div>
      <div className="absolute bottom-32 right-10 text-4xl animate-float" style={{ animationDelay: '-5s' }}>🦌</div>
      <div className="absolute top-1/3 right-1/4 text-2xl animate-twinkle">✨</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl animate-twinkle" style={{ animationDelay: '-1s' }}>❄️</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mt-[20px]">
          {/* Christmas Badge */}
          <div className="inline-flex items-center gap-2 bg-christmas-red/20 border border-christmas-red/40 rounded-full px-4 py-2 mb-8 animate-scale-in">
            <Star className="w-4 h-4 text-christmas-gold animate-twinkle" />
            <span className="text-sm font-medium text-christmas-gold">🎄 OFFRE SPÉCIALE DE NOËL 🎄</span>
            <Star className="w-4 h-4 text-christmas-gold animate-twinkle" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight animate-slide-up">
            <span className="text-christmas-red">Quebec</span>
            <br />
            <span className="text-christmas-green">IPTV</span>
          </h1>

          {/* Discount Badge */}
          <div className="inline-block mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="text-6xl md:text-8xl font-display font-black text-gradient-gold">
                80%
              </div>
              <div className="absolute -right-4 -top-4 bg-christmas-red text-foreground font-body font-bold text-xl px-3 py-1 rounded-lg rotate-12 shadow-lg">
                RABAIS
              </div>
              {/* Christmas bow */}
              <div className="absolute -left-6 -top-2 text-3xl animate-swing">🎀</div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up font-body" style={{ animationDelay: '0.3s' }}>
            <Gift className="inline w-5 h-5 text-christmas-red mr-2" />
            Cadeau de Noël: <span className="text-christmas-gold font-semibold">1 Mois GRATUIT</span> avec tout abonnement!
            Streaming 4K premium, 15 000+ chaînes au Canada.
          </p>

          {/* Countdown Timer */}
          <div className="mb-10 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider flex items-center justify-center gap-2 font-body">
              <span>🎅</span> L'offre de Noël se termine dans: <span>🎅</span>
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#pricing">
              <Button className="bg-gradient-christmas hover:opacity-90 text-foreground font-semibold px-8 py-6 text-lg rounded-full glow-red">
                🎄 Voir les Forfaits
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=14508040166&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-christmas-green text-christmas-green hover:bg-christmas-green/10 px-8 py-6 text-lg rounded-full">
                🎁 Essai Gratuit 24H
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
