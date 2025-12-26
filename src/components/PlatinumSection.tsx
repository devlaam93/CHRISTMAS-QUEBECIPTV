import { Check, Crown, ArrowRight, TreePine, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumSection = () => {
  const plans = [
    { 
      type: 'standard',
      title: 'Standard',
      duration: '12', 
      unit: 'Mois', 
      price: '69.99', 
      originalPrice: '174.99', 
      perMonth: '5.83',
      icon: Zap,
      link: 'https://quebeciptv.ca/step/checkout-12-months-iptv-subscriptions-2/',
      features: ['30 000+ Chaînes', '120K+ Films & Séries', 'Qualité 4K/FHD/HD', 'Netflix, Prime, Disney+', 'Apps Gratuites', 'Support 24/7']
    },
    { 
      type: 'premium',
      title: 'Premium',
      duration: '12', 
      unit: 'Mois', 
      price: '89.99', 
      originalPrice: '224.99', 
      perMonth: '7.50', 
      popular: true,
      icon: Crown,
      link: 'https://quebeciptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/',
      features: ['30 000+ Chaînes', '120K+ Films & Séries', 'Qualité 8K/4K/UHD', 'Netflix, Prime, Disney+', 'Protection VPN', 'Support Prioritaire']
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-xmas-green/5 via-transparent to-xmas-red/5" />
      
      <div className="container mx-auto px-4 relative">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 card-dark border-xmas-red/50 px-5 py-2.5 rounded-full mb-6">
              <Crown className="w-5 h-5 text-xmas-gold" />
              <span className="text-sm font-bold text-xmas-red font-body">🎁 Offre de Noël - 60% Rabais</span>
              <TreePine className="w-5 h-5 text-xmas-green" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Choisissez Votre <span className="text-gradient-xmas">Forfait</span>
            </h2>
            <p className="text-muted-foreground font-body">
              Deux options pour un divertissement illimité au Canada
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.type} animation="fade-up" delay={index * 100}>
              <div className={`relative card-dark p-6 h-full ${plan.popular ? 'ring-2 ring-xmas-gold/50 glow-gold' : 'border-xmas-green/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-background px-4 py-1.5 rounded-full text-xs font-bold font-body shadow-lg">
                    ⭐ RECOMMANDÉ
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`w-14 h-14 rounded-2xl ${plan.popular ? 'bg-gradient-xmas' : 'bg-gradient-green'} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-display font-bold mb-1 ${plan.popular ? 'text-xmas-red' : 'text-xmas-green'}`}>{plan.title}</h3>
                  <div className="text-muted-foreground font-body text-sm mb-4">{plan.duration} {plan.unit}</div>
                  
                  <div className="mb-4">
                    <div className="flex items-end justify-center gap-2">
                      <span className={`text-4xl font-display font-bold ${plan.popular ? 'text-gradient-xmas' : 'text-gradient-green'}`}>${plan.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-body mt-2">
                      <span className="line-through">${plan.originalPrice}</span>
                      <span className="text-xmas-gold font-bold ml-2">-60%</span>
                    </p>
                    <p className="text-xmas-gold text-sm font-bold font-body mt-2">${plan.perMonth}/mois</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-xmas-red' : 'text-xmas-green'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full rounded-full font-body text-sm py-5 group ${plan.popular ? 'btn-xmas' : 'btn-green'}`}>
                      🎁 Commander
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  <p className="text-xs text-muted-foreground mt-4 font-body">Garantie remboursement 7 jours</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatinumSection;