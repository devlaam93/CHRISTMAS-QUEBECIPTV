import { Check, Crown, ArrowRight, TreePine } from 'lucide-react';
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
      <div className="absolute inset-0 bg-gradient-to-b from-xmas-green/5 via-transparent to-xmas-red/5" />
      
      <div className="container mx-auto px-4 relative">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-xmas-gold/50 px-5 py-2.5 rounded-full mb-6 shadow-md">
              <Crown className="w-5 h-5 text-xmas-gold" />
              <span className="text-sm font-bold text-xmas-gold font-body">Collection Platinum</span>
              <TreePine className="w-5 h-5 text-xmas-green" />
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
              <div className={`relative bg-white p-8 rounded-3xl shadow-xl ${plan.popular ? 'ring-4 ring-xmas-gold/50 glow-gold' : 'border-2 border-xmas-green/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-foreground px-6 py-2 rounded-full text-sm font-bold font-body shadow-lg">
                    ⭐ MEILLEURE VALEUR
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Crown className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="text-5xl font-display font-bold text-gradient-gold mb-1">{plan.duration}</div>
                  <div className="text-muted-foreground font-body mb-6">{plan.unit}</div>
                  
                  <div className="mb-6">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-4xl font-display font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground line-through font-body mb-1">${plan.originalPrice}</span>
                    </div>
                    <p className="text-xmas-gold text-sm font-bold font-body mt-2">${plan.perMonth}/mois + 🎁 1 MOIS GRATUIT</p>
                  </div>
                  
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full rounded-full font-body text-base py-6 group ${plan.popular ? 'btn-xmas' : 'btn-green'}`}>
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
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-xmas-green/20 max-w-3xl mx-auto">
            <h3 className="text-xl font-display font-bold text-center mb-8 text-gradient-xmas flex items-center justify-center gap-2">
              🎄 Tout Inclus dans Platinum 🎁
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
                  <Check className="w-5 h-5 text-xmas-green flex-shrink-0" />
                  <span className="text-foreground text-sm font-body font-medium">{feature}</span>
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