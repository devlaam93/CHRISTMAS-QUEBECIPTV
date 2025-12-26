import { Check, Crown, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumExclusiveSection = () => {
  const features = [
    '🇨🇦 & 🇺🇸 Contenu Exclusif',
    '+130K Films & Séries',
    'Netflix, Prime, Disney+',
    'Apps Hotiptv & Ibo Gratuites',
    'Protection VPN',
    'Activation Instantanée',
    '+35,000 Chaînes Live',
    'Qualité 8K/4K/UHD/FHD',
    'Toutes Chaînes Sports',
    'Anti-Freeze™ 9.8 Tech',
    'Support 24/7',
    'Remboursement 7 Jours',
  ];

  const plans = [
    {
      name: 'STARTER',
      duration: '6',
      durationLabel: 'Mois',
      subtitle: 'Serveur Platinum',
      price: '69.99',
      originalPrice: '139.99',
      perMonth: '11.67',
      featured: false,
      link: 'https://order.quebeciptv.ca/step/checkout-6-months-iptv-platinum-subscriptions/',
    },
    {
      name: 'BEST VALUE',
      duration: '12',
      durationLabel: 'Mois',
      subtitle: 'Serveur Platinum',
      price: '89.99',
      originalPrice: '199.99',
      perMonth: '7.50',
      featured: true,
      link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-platinum-subscriptions/',
    },
  ];

  // Split features into two columns
  const leftFeatures = features.slice(0, 6);
  const rightFeatures = features.slice(6, 12);

  return (
    <section id="platinum" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Floating dots decoration */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-xmas-gold/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-xmas-gold/50" />
              <Crown className="w-5 h-5 text-xmas-gold" />
              <span className="text-xmas-gold font-body text-sm tracking-widest uppercase font-bold">PLATINUM</span>
              <Crown className="w-5 h-5 text-xmas-gold" />
              <div className="h-px w-8 bg-xmas-gold/50" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              Canada & USA Only <span className="inline-block">🇨🇦</span> <span className="inline-block">🇺🇸</span>
            </h2>
            
            <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto">
              <span className="text-xmas-gold font-semibold">Disponible uniquement dans notre offre de Noël.</span>{' '}
              Ce forfait offre une large sélection de chaînes Platinum canadiennes et américaines, avec des fonctionnalités avancées et une qualité de streaming ultra-haute.
            </p>
            
            <p className="text-muted-foreground font-body mt-4 max-w-3xl mx-auto">
              Inclut des chaînes 4K et même 8K, sports exclusifs, films, séries et une puissante bibliothèque VOD — le tout optimisé pour des performances rapides et stables. Si vous voulez plus d'options, plus de qualité et plus de chaînes Platinum, c'est le choix parfait.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 md:p-8 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-2 border-xmas-red shadow-[0_0_30px_rgba(220,38,38,0.2)]'
                    : 'bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-[#333]'
                }`}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-xmas-red text-white px-6 py-2 rounded-full text-sm font-bold font-body flex items-center gap-2">
                    <span>✨</span> BEST VALUE <span>✨</span>
                  </div>
                )}

                {/* Plan name for non-featured */}
                {!plan.featured && (
                  <div className="text-center mb-6">
                    <span className="text-muted-foreground font-body text-sm tracking-widest uppercase">{plan.name}</span>
                  </div>
                )}
                {plan.featured && <div className="h-4" />}

                {/* Duration and Price row */}
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-display font-bold text-foreground">{plan.duration}</span>
                      <span className="text-xl font-body text-muted-foreground">{plan.durationLabel}</span>
                    </div>
                    <p className="text-muted-foreground font-body text-sm mt-1">{plan.subtitle}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-muted-foreground line-through font-body text-sm">${plan.originalPrice}</div>
                    <div className={`text-4xl md:text-5xl font-display font-bold ${plan.featured ? 'text-xmas-gold' : 'text-foreground'}`}>
                      ${plan.price}
                    </div>
                    <div className={`text-sm font-body ${plan.featured ? 'text-xmas-gold' : 'text-xmas-green'}`}>
                      ${plan.perMonth}/mo
                    </div>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  <div className="space-y-2">
                    {leftFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-xmas-gold' : 'text-xmas-green'}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {rightFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-xmas-gold' : 'text-xmas-green'}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Money Back Guarantee */}
                <div className={`w-full py-3 px-4 rounded-xl border ${plan.featured ? 'border-xmas-gold/50 bg-xmas-gold/5' : 'border-xmas-red/50 bg-xmas-red/5'} flex items-center justify-center gap-2 mb-4`}>
                  <Shield className={`w-4 h-4 ${plan.featured ? 'text-xmas-gold' : 'text-xmas-red'}`} />
                  <span className={`text-sm font-body font-semibold ${plan.featured ? 'text-xmas-gold' : 'text-xmas-red'}`}>
                    Garantie Remboursement
                  </span>
                </div>

                {/* CTA Button */}
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full py-6 text-lg rounded-xl font-body font-bold group ${
                      plan.featured
                        ? 'bg-xmas-gold hover:bg-xmas-gold/90 text-background'
                        : 'bg-xmas-red hover:bg-xmas-red/90 text-white'
                    }`}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Obtenir Platinum
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumExclusiveSection;
