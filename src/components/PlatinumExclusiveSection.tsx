import { Check, Gem, ArrowRight, Shield, Zap, Globe, Users, Headphones, Star, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumExclusiveSection = () => {
  const exclusivePerks = [
    { icon: Globe, title: '50 000+ Chaînes', subtitle: 'Mondiales' },
    { icon: Zap, title: '200K+ VOD', subtitle: 'En 8K Ultra' },
    { icon: Users, title: '5 Écrans', subtitle: 'Simultanés' },
    { icon: Shield, title: 'VPN Premium', subtitle: 'Inclus' },
    { icon: Star, title: 'Serveur Dédié', subtitle: 'Haute Vitesse' },
    { icon: Headphones, title: 'Support VIP', subtitle: '24/7' },
  ];

  return (
    <section id="platinum" className="py-24 relative overflow-hidden">
      {/* Luxurious background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Floating diamonds decoration */}
      <div className="absolute top-20 left-10 text-purple-500/20 animate-pulse">
        <Gem className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 text-pink-500/20 animate-pulse delay-300">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-1/4 text-purple-500/20 animate-pulse delay-500">
        <Crown className="w-10 h-10" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
              <span className="text-purple-400 font-body text-sm tracking-widest uppercase">Exclusif</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                PLATINUM
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              L'abonnement ultime pour une expérience sans compromis
            </p>
          </div>
        </ScrollReveal>

        {/* Main card with asymmetric design */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-2xl scale-105" />
              
              {/* Main card */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-purple-950/80 via-background to-pink-950/40 border border-purple-500/30 overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
                
                {/* Floating badge */}
                <div className="absolute -top-0 right-8 md:right-16">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-b-2xl shadow-lg shadow-purple-500/30">
                    <div className="text-xs font-body opacity-80">ÉCONOMISEZ</div>
                    <div className="text-2xl font-display font-bold">200$</div>
                  </div>
                </div>

                <div className="p-8 md:p-12 lg:p-16">
                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                    
                    {/* Left: Perks grid */}
                    <div className="lg:col-span-3 order-2 lg:order-1">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {exclusivePerks.map((perk, index) => (
                          <div 
                            key={index}
                            className="group relative p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
                          >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                              <perk.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="font-body">
                              <div className="font-bold text-foreground text-sm">{perk.title}</div>
                              <div className="text-xs text-purple-400">{perk.subtitle}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Additional features */}
                      <div className="mt-6 flex flex-wrap gap-3">
                        {['Netflix', 'Prime', 'Disney+', 'HBO Max', 'Apple TV+'].map((platform, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 rounded-full text-xs font-body bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            ✓ {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Pricing */}
                    <div className="lg:col-span-2 order-1 lg:order-2">
                      <div className="text-center lg:text-right">
                        <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-1.5 mb-4">
                          <Gem className="w-4 h-4 text-purple-400" />
                          <span className="text-xs font-bold text-purple-300 font-body">24 MOIS D'ACCÈS</span>
                        </div>
                        
                        <div className="mb-2">
                          <span className="text-muted-foreground line-through text-xl font-body">$299.99</span>
                        </div>
                        
                        <div className="text-7xl md:text-8xl font-display font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-2">
                          $99<span className="text-4xl">.99</span>
                        </div>
                        
                        <p className="text-purple-400 font-bold font-body mb-6">
                          $4.17/mois • 2 mois gratuits inclus
                        </p>

                        <a 
                          href="https://order.quebeciptv.ca/step/checkout-24-months-iptv-platinum-subscriptions/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full lg:w-auto px-10 py-7 text-lg rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 text-white shadow-xl shadow-purple-500/30 group font-body border-0">
                            <Gem className="w-5 h-5 mr-2" />
                            Devenir Membre Platinum
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>

                        <div className="flex items-center justify-center lg:justify-end gap-4 mt-4 text-sm text-muted-foreground font-body">
                          <span className="flex items-center gap-1">
                            <Check className="w-4 h-4 text-purple-400" />
                            Garantie 14 jours
                          </span>
                          <span className="flex items-center gap-1">
                            <Shield className="w-4 h-4 text-purple-400" />
                            Paiement sécurisé
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom testimonial strip */}
                <div className="border-t border-purple-500/20 bg-purple-500/5 px-8 md:px-12 py-4">
                  <div className="flex items-center justify-center gap-2 text-sm font-body text-muted-foreground">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-background" />
                      ))}
                    </div>
                    <span className="ml-2">
                      <span className="text-purple-400 font-bold">2,500+</span> membres Platinum satisfaits
                    </span>
                    <div className="flex text-yellow-400 ml-2">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumExclusiveSection;
