import { Check, Crown, Zap, Shield, Tv, Film, Headphones, ArrowRight } from 'lucide-react';
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
      color: 'forest',
      options: [
        { duration: '12 Mois', price: '39.99', originalPrice: '119', discount: '80%', link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-subscriptions-2/' },
        { duration: '24 Mois', price: '79.99', originalPrice: '199', discount: '80%', link: 'https://order.quebeciptv.ca/step/checkout-24-month-iptv-subscriptions-2/' },
      ],
    },
    {
      type: 'premium',
      icon: Crown,
      title: 'Premium',
      subtitle: 'Serveur Performance',
      color: 'gold',
      popular: true,
      options: [
        { duration: '12 Mois', price: '59.99', originalPrice: '179', discount: '80%', link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/', popular: true },
        { duration: '24 Mois', price: '99.99', originalPrice: '259', discount: '80%', link: 'https://order.quebeciptv.ca/step/checkout-24-months-iptv-premium-subscriptions-2/' },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-burgundy/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-luxury-gold/50" />
              <span className="text-xs font-medium text-luxury-gold tracking-[0.3em] uppercase font-body">
                Forfaits Exclusifs
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-luxury-gold/50" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4">
              Choisissez Votre <span className="text-luxury-gold">Expérience</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-body">
              Deux niveaux d'excellence pour votre divertissement premium
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal delay={0.2}>
          <div className="luxury-border rounded-xl overflow-hidden mb-16 bg-card/40 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-luxury-gold/10">
                    <th className="text-left p-5 text-foreground font-display text-lg">Fonctionnalités</th>
                    <th className="text-center p-5 w-40">
                      <div className="flex flex-col items-center">
                        <Zap className="w-6 h-6 text-luxury-forest mb-2" />
                        <span className="text-luxury-forest font-display text-lg">Standard</span>
                      </div>
                    </th>
                    <th className="text-center p-5 w-40 bg-luxury-gold/5">
                      <div className="flex flex-col items-center">
                        <Crown className="w-6 h-6 text-luxury-gold mb-2" />
                        <span className="text-luxury-gold font-display text-lg">Premium</span>
                        <span className="text-[10px] text-luxury-burgundy-light mt-1 font-body tracking-wider">POPULAIRE</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={feature.name} className="border-b border-border/30 hover:bg-card/30 transition-colors">
                      <td className="p-4 text-muted-foreground flex items-center gap-2 font-body text-sm">
                        {feature.icon && <feature.icon className="w-4 h-4 text-luxury-gold/60" />}
                        {feature.name}
                      </td>
                      <td className="text-center p-4">
                        {typeof feature.standard === 'boolean' ? (
                          feature.standard ? <Check className="w-5 h-5 text-luxury-forest mx-auto" /> : <span className="text-muted-foreground/30">—</span>
                        ) : (
                          <span className="text-luxury-forest font-semibold font-body text-sm">{feature.standard}</span>
                        )}
                      </td>
                      <td className="text-center p-4 bg-luxury-gold/5">
                        {typeof feature.premium === 'boolean' ? (
                          feature.premium ? <Check className="w-5 h-5 text-luxury-gold mx-auto" /> : <span className="text-muted-foreground/30">—</span>
                        ) : (
                          <span className="text-luxury-gold font-semibold font-body text-sm">{feature.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, planIndex) => (
            <ScrollReveal key={plan.type} delay={0.1 * planIndex}>
              <div className={`relative luxury-border rounded-xl p-8 bg-card/40 backdrop-blur-sm ${plan.popular ? 'ring-1 ring-luxury-gold/50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-luxury-burgundy text-luxury-champagne px-4 py-1 rounded-full text-xs font-semibold font-body tracking-wider">
                    RECOMMANDÉ
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <plan.icon className={`w-10 h-10 mx-auto mb-4 ${plan.color === 'gold' ? 'text-luxury-gold' : 'text-luxury-forest'}`} />
                  <h3 className={`text-2xl font-display font-semibold ${plan.color === 'gold' ? 'text-luxury-gold' : 'text-luxury-forest'}`}>
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mt-1">{plan.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {plan.options.map((option) => (
                    <div key={option.duration} className={`p-5 rounded-lg border transition-all ${option.popular ? 'border-luxury-gold/40 bg-luxury-gold/5' : 'border-border/30 bg-card/30'}`}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-foreground font-body">{option.duration}</span>
                        <span className="bg-luxury-burgundy/80 text-luxury-champagne text-xs px-2 py-1 rounded font-body">
                          -{option.discount}
                        </span>
                      </div>
                      <div className="flex items-end gap-2 mb-4">
                        <span className="text-3xl font-display font-bold text-foreground">${option.price}</span>
                        <span className="text-muted-foreground line-through text-sm font-body mb-1">${option.originalPrice}</span>
                        <span className="text-luxury-forest text-xs font-body mb-1 ml-auto">+1 MOIS GRATUIT</span>
                      </div>
                      <a href={option.link} target="_blank" rel="noopener noreferrer">
                        <Button className={`w-full rounded-md font-body group ${option.popular ? 'bg-gradient-gold text-luxury-forest-dark hover:opacity-90' : 'bg-luxury-forest hover:bg-luxury-forest-light text-foreground'}`}>
                          Commander
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Payment */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-4 font-body">Paiement 100% sécurisé</p>
            <img src={paymentBadges} alt="Méthodes de paiement" className="h-8 mx-auto opacity-60" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
