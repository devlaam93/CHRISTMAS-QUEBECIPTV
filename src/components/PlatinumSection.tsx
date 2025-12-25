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
    'Netflix, Prime, Disney+', 'Toutes les Chaînes Sports', 'Apps Hotiptv & Ibo Gratuites', 'Technologie Anti-Gel™',
    'Protection VPN', 'Support 24/7', 'Activation Instantanée', 'Remboursement 7 Jours',
  ];

  return (
    <section id="platinum" className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Crown className="w-4 h-4 text-xmas-gold" />
              <span className="text-sm font-medium text-xmas-gold font-body">Collection Platinum</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Expérience <span className="text-gradient-gold">Platinum</span>
            </h2>
            <p className="text-muted-foreground font-body">
              Notre offre la plus complète pour un divertissement sans limites
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.duration} animation="fade-up" delay={index * 100}>
              <div className={`relative glass-card p-8 ${plan.popular ? 'ring-2 ring-xmas-gold/50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 btn-gradient-gold text-white px-4 py-1 rounded-full text-xs font-semibold font-body">
                    ⭐ MEILLEURE VALEUR
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl btn-gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-display font-bold text-gradient-gold mb-1">{plan.duration}</div>
                  <div className="text-muted-foreground font-body mb-6">{plan.unit}</div>
                  
                  <div className="mb-6">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-4xl font-display font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground line-through font-body mb-1">${plan.originalPrice}</span>
                    </div>
                    <p className="text-xmas-green text-sm font-body mt-2">${plan.perMonth}/mois + 1 MOIS GRATUIT</p>
                  </div>
                  
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full rounded-full font-body text-base py-6 group ${plan.popular ? 'btn-gradient-gold' : 'btn-gradient-green'} hover:opacity-90`}>
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
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-display font-bold text-center mb-8 text-gradient-gold">
              🎁 Tout Inclus dans Platinum
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                  <Check className="w-4 h-4 text-xmas-green flex-shrink-0" />
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
