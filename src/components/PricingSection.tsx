import { Check, Crown, Zap, Shield, Tv, Film, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import paymentBadges from '@/assets/payment-badges.webp';

const PricingSection = () => {
  const features = [
    { name: 'Chaînes en Direct', standard: '15 000+', premium: '30 000+', icon: Tv },
    { name: 'Films & Séries (VOD)', standard: '60K+', premium: '120K+', icon: Film },
    { name: 'Application Hotiptv', standard: true, premium: true },
    { name: 'Application Ibo Player', standard: true, premium: true },
    { name: 'Activation Instantanée', standard: true, premium: true },
    { name: 'Netflix, Prime, Disney+', standard: true, premium: true },
    { name: 'Toutes les Chaînes Sports', standard: true, premium: true },
    { name: 'Rattrapage & EPG', standard: true, premium: true },
    { name: 'Qualité UHD, FHD, HD', standard: true, premium: true },
    { name: 'Technologie Anti-Gel™', standard: '9.8', premium: '10.0' },
    { name: 'Protection VPN + Vie Privée', standard: false, premium: true, icon: Shield },
    { name: 'Support 24/7', standard: true, premium: true, icon: Headphones },
    { name: 'Garantie Remboursement', standard: '7 Jours', premium: '14 Jours' },
  ];

  const plans = [
    {
      type: 'standard',
      icon: Zap,
      title: 'Standard',
      subtitle: 'Serveur Performance',
      color: 'quebec-orange',
      options: [
        {
          duration: '12 Mois',
          price: '39.99',
          originalPrice: '119',
          discount: '80%',
          link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-subscriptions-2/',
        },
        {
          duration: '24 Mois',
          price: '79.99',
          originalPrice: '199',
          discount: '80%',
          link: 'https://order.quebeciptv.ca/step/checkout-24-month-iptv-subscriptions-2/',
        },
      ],
    },
    {
      type: 'premium',
      icon: Crown,
      title: 'Premium',
      subtitle: 'Serveur Performance',
      color: 'quebec-gold',
      popular: true,
      options: [
        {
          duration: '12 Mois',
          price: '59.99',
          originalPrice: '179',
          discount: '80%',
          link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/',
          popular: true,
        },
        {
          duration: '24 Mois',
          price: '99.99',
          originalPrice: '259',
          discount: '80%',
          link: 'https://order.quebeciptv.ca/step/checkout-24-months-iptv-premium-subscriptions-2/',
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-quebec-orange/10 text-quebec-orange text-sm font-semibold mb-4">
              🍁 Exclusif Canada
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Choisissez Votre <span className="text-quebec-orange">Forfait</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tous les forfaits incluent 1 mois gratuit et garantie remboursement
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal animation="fade-up" delay={100} duration={600}>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="glass rounded-3xl overflow-hidden border border-border/50">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-muted/50 p-4 md:p-6 border-b border-border/50">
                <div className="text-sm font-medium text-muted-foreground">Fonctionnalités</div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quebec-orange/20">
                    <Zap className="w-4 h-4 text-quebec-orange" />
                    <span className="text-sm font-bold text-quebec-orange">Standard</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quebec-gold/20">
                    <Crown className="w-4 h-4 text-quebec-gold" />
                    <span className="text-sm font-bold text-quebec-gold">Premium</span>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-border/30">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 p-4 md:px-6 hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      {feature.icon && <feature.icon className="w-4 h-4 text-quebec-orange" />}
                      {feature.name}
                    </div>
                    <div className="text-center">
                      {typeof feature.standard === 'boolean' ? (
                        feature.standard ? (
                          <Check className="w-5 h-5 text-quebec-orange mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm font-medium text-foreground">{feature.standard}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <Check className="w-5 h-5 text-quebec-gold mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm font-medium text-quebec-gold">{feature.premium}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, planIndex) => (
            <ScrollReveal
              key={plan.type}
              animation="fade-up"
              delay={200 + planIndex * 100}
              duration={600}
            >
              <div
                className={`glass rounded-3xl overflow-hidden border ${
                  plan.popular ? 'border-quebec-gold/50 shadow-lg shadow-quebec-gold/10' : 'border-border/50'
                }`}
              >
                {/* Plan Header */}
                <div
                  className={`p-6 text-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-quebec-gold/20 to-quebec-gold/10'
                      : 'bg-muted/30'
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 ${
                      plan.popular ? 'bg-quebec-gold/20 text-quebec-gold' : 'bg-quebec-orange/20 text-quebec-orange'
                    }`}
                  >
                    <plan.icon className="w-5 h-5" />
                    <span className="font-bold">{plan.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                {/* Pricing Options */}
                <div className="p-6 space-y-4">
                  {plan.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`p-4 rounded-2xl border ${
                        option.popular
                          ? 'border-quebec-gold/50 bg-quebec-gold/5'
                          : 'border-border/50 hover:border-quebec-orange/30'
                      } transition-colors`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-lg font-bold">{option.duration}</span>
                          {option.popular && (
                            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-quebec-gold text-background font-semibold">
                              POPULAIRE
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground line-through">
                            ${option.originalPrice}
                          </div>
                          <div className="text-2xl font-display font-black">${option.price}</div>
                        </div>
                      </div>
                      <a href={option.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={option.popular ? 'accent' : 'hero'}
                          size="lg"
                          className="w-full"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Commander Maintenant
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Guarantee */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-quebec-orange/10 border border-quebec-orange/20">
                    <Shield className="w-4 h-4 text-quebec-orange" />
                    <span className="text-xs font-semibold text-quebec-orange">
                      Garantie Remboursement
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Payment Badges */}
        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Paiement 100% Sécurisé</p>
            <img
              src={paymentBadges}
              alt="Méthodes de paiement acceptées"
              className="h-8 mx-auto opacity-60"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;