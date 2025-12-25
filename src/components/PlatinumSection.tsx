import { Check, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumSection = () => {
  const plans = [
    { duration: '6', unit: 'Mois', price: '69.99', originalPrice: '139.99', perMonth: '11.67', link: 'https://order.quebeciptv.ca/step/checkout-6-months-iptv-premium-subscriptions-2/' },
    { duration: '12', unit: 'Mois', price: '89.99', originalPrice: '199.99', perMonth: '7.50', popular: true, link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-premium-subscriptions-3/' },
  ];

  const allFeatures = [
    '🇨🇦 Contenu Exclusif Canada', '+35 000 Chaînes en Direct', '+130K Films & Séries', 'Qualité 8K/4K/UHD/FHD',
    'Netflix, Prime, Disney+', 'Toutes les Chaînes Sports', 'Apps Hotiptv & Ibo Gratuites', 'Technologie Anti-Gel™ 9.8',
    'Protection VPN', 'Support 24/7', 'Activation Instantanée', 'Remboursement 7 Jours',
  ];

  return (
    <section id="platinum" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/5 via-transparent to-luxury-burgundy/5" />
      <div className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-luxury-gold/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-luxury-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Crown className="w-5 h-5 text-luxury-gold" />
              <span className="text-xs font-medium text-luxury-gold tracking-[0.3em] uppercase font-body">
                Collection Platinum
              </span>
              <Crown className="w-5 h-5 text-luxury-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-4">
              L'Excellence <span className="text-gradient-gold">Platinum</span>
            </h2>
            <p className="text-muted-foreground font-body">
              Notre offre la plus complète pour une expérience de divertissement sans compromis
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.duration} animation="fade-up" delay={index * 100}>
              <div className={`relative luxury-border rounded-xl p-8 bg-card/40 backdrop-blur-sm ${plan.popular ? 'ring-1 ring-luxury-gold/50 glow-gold' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-luxury-burgundy text-luxury-champagne px-4 py-1 rounded-full text-xs font-semibold font-body tracking-wider">
                    MEILLEURE VALEUR
                  </div>
                )}
                
                <div className="text-center">
                  <Crown className="w-10 h-10 mx-auto mb-4 text-luxury-gold" />
                  <div className="text-5xl font-display font-bold text-luxury-gold mb-1">{plan.duration}</div>
                  <div className="text-muted-foreground font-body mb-6">{plan.unit}</div>
                  
                  <div className="mb-6">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-4xl font-display font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground line-through font-body mb-1">${plan.originalPrice}</span>
                    </div>
                    <p className="text-luxury-forest text-sm font-body mt-2">${plan.perMonth}/mois + 1 MOIS GRATUIT</p>
                  </div>
                  
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full rounded-md font-body text-base py-6 group ${plan.popular ? 'bg-gradient-gold text-luxury-forest-dark' : 'bg-luxury-gold/80 text-luxury-forest-dark'} hover:opacity-90`}>
                      Commander
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="luxury-border rounded-xl p-8 bg-card/30 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-xl font-display font-semibold text-center mb-8 text-luxury-gold">
              Tout Inclus dans Platinum
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/40">
                  <Check className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <span className="text-muted-foreground text-sm font-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumSection;
