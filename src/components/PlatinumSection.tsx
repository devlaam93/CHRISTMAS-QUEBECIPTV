import { Check, Crown, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumSection = () => {
  const plans = [
    {
      duration: '6',
      unit: 'Mois',
      price: '69.99',
      originalPrice: '139.99',
      perMonth: '11.67',
      link: 'https://order.quebeciptv.ca/step/checkout-6-months-iptv-premium-subscriptions-2/',
    },
    {
      duration: '12',
      unit: 'Mois',
      price: '89.99',
      originalPrice: '199.99',
      perMonth: '7.50',
      popular: true,
      link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-premium-subscriptions-3/',
    },
  ];

  const allFeatures = [
    '🇨🇦 Contenu Exclusif Canada',
    '+35 000 Chaînes en Direct',
    '+130K Films & Séries',
    'Qualité 8K/4K/UHD/FHD',
    'Netflix, Prime, Disney+',
    'Toutes les Chaînes Sports',
    'Apps Hotiptv & Ibo Gratuites',
    'Technologie Anti-Gel™ 9.8',
    'Protection VPN',
    'Support 24/7',
    'Activation Instantanée',
    'Remboursement 7 Jours',
  ];

  return (
    <section id="platinum" className="py-16 md:py-24 relative pt-[96px]">
      <div className="absolute inset-0 bg-gradient-to-b from-quebec-gold/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-quebec-gold" />
            <Crown className="w-5 h-5 text-quebec-gold" />
            <span className="text-xs font-bold text-quebec-gold uppercase tracking-[0.2em]">
              Platinum
            </span>
            <Crown className="w-5 h-5 text-quebec-gold" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-quebec-gold" />
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-display font-black mb-4">
            Exclusif Canada 🇨🇦
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-3 text-sm md:text-base">
            <span className="text-quebec-gold font-semibold">
              Disponible uniquement avec notre offre spéciale.
            </span>{' '}
            Ce forfait offre une large sélection de chaînes canadiennes platinum, avec des fonctionnalités avancées et une qualité de streaming ultra-haute.
          </p>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10 text-sm md:text-base">
            Inclut les chaînes 4K et même 8K, sports exclusifs, films, séries, et une puissante bibliothèque VOD — le tout optimisé pour une performance rapide et stable.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal animation="fade-up" delay={150} duration={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'md:-mt-2 md:mb-2' : ''
                }`}
              >
                {/* Card */}
                <div
                  className={`h-full rounded-2xl overflow-hidden ${
                    plan.popular
                      ? 'bg-gradient-to-b from-quebec-gold/20 to-quebec-gold/5 border-2 border-quebec-gold shadow-lg shadow-quebec-gold/10'
                      : 'bg-muted/20 border border-border/60'
                  }`}
                >
                  {/* Header Bar */}
                  <div
                    className={`py-3 px-4 text-center ${
                      plan.popular ? 'bg-gradient-quebec' : 'bg-muted/50'
                    }`}
                  >
                    <span
                      className={`text-sm font-bold flex items-center justify-center gap-2 ${
                        plan.popular ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {plan.popular && <Sparkles className="w-4 h-4" />}
                      {plan.popular ? 'MEILLEURE VALEUR' : 'DÉBUTANT'}
                      {plan.popular && <Sparkles className="w-4 h-4" />}
                    </span>
                  </div>

                  <div className="p-5 md:p-6">
                    {/* Duration & Price Row */}
                    <div className="flex items-center justify-between mb-5 pb-5 border-b border-border/30">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`text-5xl font-display font-black ${
                              plan.popular ? 'text-quebec-gold' : ''
                            }`}
                          >
                            {plan.duration}
                          </span>
                          <span className="text-lg font-bold text-muted-foreground">
                            {plan.unit}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Serveur Platinum</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground line-through">
                          ${plan.originalPrice}
                        </div>
                        <div className="text-3xl font-display font-black">${plan.price}</div>
                        <div className="text-xs text-quebec-gold font-semibold">
                          ${plan.perMonth}/mois
                        </div>
                      </div>
                    </div>

                    {/* Features - 2 columns */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
                      {allFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Check
                            className={`w-3.5 h-3.5 flex-shrink-0 ${
                              plan.popular ? 'text-quebec-gold' : 'text-quebec-orange'
                            }`}
                          />
                          <span className="text-xs text-muted-foreground truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center gap-2 py-2.5 mb-4 rounded-lg bg-quebec-orange/10 border border-quebec-orange/20">
                      <Shield className="w-4 h-4 text-quebec-orange" />
                      <span className="text-xs font-semibold text-quebec-orange">
                        Garantie Remboursement
                      </span>
                    </div>

                    {/* CTA */}
                    <a href={plan.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant={plan.popular ? 'accent' : 'hero'}
                        size="lg"
                        className="w-full font-bold"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Obtenir Platinum
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom Stats */}
        <ScrollReveal animation="fade-up" delay={300} duration={500}>
          <div className="mt-8 flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-display font-black text-quebec-gold">50K+</div>
              <div className="text-xs text-muted-foreground">Clients Satisfaits</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-display font-black text-quebec-orange">99.9%</div>
              <div className="text-xs text-muted-foreground">Disponibilité</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-display font-black text-quebec-gold">4.9★</div>
              <div className="text-xs text-muted-foreground">Évaluation</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumSection;