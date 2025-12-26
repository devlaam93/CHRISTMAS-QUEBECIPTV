import { Check, Gem, ArrowRight, Shield, Zap, Globe, Users, Headphones, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumExclusiveSection = () => {
  const features = [
    { icon: Globe, title: '50 000+ Chaînes', description: 'Accès mondial illimité' },
    { icon: Zap, title: '200K+ VOD', description: 'Films & séries en 8K' },
    { icon: Users, title: 'Multi-Écrans (5)', description: 'Toute la famille connectée' },
    { icon: Shield, title: 'VPN Premium', description: 'Protection maximale incluse' },
    { icon: Star, title: 'Serveur Dédié', description: 'Performance garantie' },
    { icon: Headphones, title: 'Support VIP', description: '24/7 priorité absolue' },
  ];

  const allFeatures = [
    '50 000+ Chaînes Mondiales',
    '200K+ Films & Séries',
    'Qualité 8K Ultra HD',
    'Toutes Plateformes Streaming',
    'VPN Premium Inclus',
    'Multi-Écrans (5 appareils)',
    'Serveur Dédié Haute Vitesse',
    'Support VIP 24/7',
    'Mises à jour Prioritaires',
    'Aucune Publicité',
  ];

  return (
    <section id="platinum" className="py-24 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-background to-purple-950/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 px-5 py-2.5 rounded-full mb-6">
              <Gem className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-body">
                💎 EXPÉRIENCE EXCLUSIVE
              </span>
              <Gem className="w-5 h-5 text-pink-400" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Forfait <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Platinum</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              L'expérience IPTV ultime pour les vrais connaisseurs
            </p>
          </div>
        </ScrollReveal>

        {/* Features grid */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-bold text-foreground font-body mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground font-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main Platinum card */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-b from-purple-900/40 to-background border-2 border-purple-500/50 p-8 md:p-12 shadow-[0_0_60px_rgba(168,85,247,0.3)]">
              {/* Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold font-body shadow-lg animate-pulse">
                💎 MEILLEURE VALEUR - ÉCONOMISEZ 200$
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Pricing */}
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                      <Gem className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Platinum
                      </h3>
                      <p className="text-muted-foreground font-body">24 Mois d'accès</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 justify-center md:justify-start">
                      <span className="text-6xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        $99.99
                      </span>
                    </div>
                    <p className="text-muted-foreground font-body mt-2">
                      <span className="line-through text-lg">$299.99</span>
                      <span className="text-purple-400 font-bold ml-3 text-lg">-67% RABAIS</span>
                    </p>
                    <p className="text-purple-400 font-bold font-body text-xl mt-2">
                      Seulement $4.17/mois + 🎁 2 MOIS GRATUITS
                    </p>
                  </div>

                  <a 
                    href="https://order.quebeciptv.ca/step/checkout-24-months-iptv-platinum-subscriptions/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full md:w-auto px-12 py-6 text-lg rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 group font-body">
                      💎 Devenir Platinum
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  <p className="text-sm text-muted-foreground mt-4 font-body">
                    ✓ Garantie remboursement 14 jours
                  </p>
                </div>

                {/* Right side - Features list */}
                <div className="bg-purple-500/5 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-lg font-bold text-foreground mb-4 font-body">Tout ce qui est inclus :</h4>
                  <ul className="space-y-3">
                    {allFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground font-body">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
