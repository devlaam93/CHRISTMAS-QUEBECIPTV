import { Check, Crown, Zap, Shield, Tv, Film, Headphones, Gift, Star } from 'lucide-react';
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
      color: 'christmas-green',
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
      color: 'christmas-gold',
      popular: true,
      options: [
        { duration: '12 Mois', price: '59.99', originalPrice: '179', discount: '80%', link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/', popular: true },
        { duration: '24 Mois', price: '99.99', originalPrice: '259', discount: '80%', link: 'https://order.quebeciptv.ca/step/checkout-24-months-iptv-premium-subscriptions-2/' },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Christmas decorations */}
      <div className="absolute top-10 left-10 text-4xl animate-swing">🎄</div>
      <div className="absolute top-20 right-10 text-3xl animate-float">⭐</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-swing" style={{ animationDelay: '-2s' }}>🎁</div>
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-christmas-red/20 border border-christmas-red/40 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-christmas-gold" />
              <span className="text-sm font-medium text-christmas-gold font-body">OFFRE DE NOËL - CANADA SEULEMENT</span>
              <Gift className="w-4 h-4 text-christmas-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              🎄 Forfaits <span className="text-christmas-red">Festifs</span> 🎄
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Célébrez Noël avec nos meilleures offres de l'année! 
              <span className="text-christmas-gold font-semibold"> +1 Mois GRATUIT</span> sur tous les forfaits!
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Comparison Table */}
        <ScrollReveal delay={0.2}>
          <div className="christmas-border rounded-3xl overflow-hidden mb-16 bg-card/50 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-christmas-red/20 via-christmas-green/20 to-christmas-red/20">
                    <th className="text-left p-4 text-foreground font-display">Fonctionnalités</th>
                    <th className="text-center p-4">
                      <div className="flex flex-col items-center">
                        <Zap className="w-6 h-6 text-christmas-green mb-1" />
                        <span className="text-christmas-green font-display">Standard</span>
                      </div>
                    </th>
                    <th className="text-center p-4">
                      <div className="flex flex-col items-center">
                        <Crown className="w-6 h-6 text-christmas-gold mb-1" />
                        <span className="text-christmas-gold font-display">Premium</span>
                        <span className="text-xs text-christmas-red mt-1 font-body">🔥 Populaire</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={feature.name} className={`border-t border-border/30 ${index % 2 === 0 ? 'bg-card/30' : ''}`}>
                      <td className="p-4 text-muted-foreground flex items-center gap-2 font-body">
                        {feature.icon && <feature.icon className="w-4 h-4 text-christmas-gold" />}
                        {feature.name}
                      </td>
                      <td className="text-center p-4">
                        {typeof feature.standard === 'boolean' ? (
                          feature.standard ? (
                            <Check className="w-5 h-5 text-christmas-green mx-auto" />
                          ) : (
                            <span className="text-muted-foreground/50">—</span>
                          )
                        ) : (
                          <span className="text-christmas-green font-semibold font-body">{feature.standard}</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof feature.premium === 'boolean' ? (
                          feature.premium ? (
                            <Check className="w-5 h-5 text-christmas-gold mx-auto" />
                          ) : (
                            <span className="text-muted-foreground/50">—</span>
                          )
                        ) : (
                          <span className="text-christmas-gold font-semibold font-body">{feature.premium}</span>
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, planIndex) => (
            <ScrollReveal key={plan.type} delay={0.1 * planIndex}>
              <div className={`relative christmas-border rounded-3xl p-8 bg-card/50 backdrop-blur-sm ${plan.popular ? 'ring-2 ring-christmas-gold' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-christmas-red text-foreground px-4 py-1 rounded-full text-sm font-semibold font-body flex items-center gap-1">
                    <Star className="w-4 h-4" /> Plus Populaire 🎁
                  </div>
                )}
                
                {/* Christmas decoration */}
                <div className="absolute -top-6 -right-6 text-4xl animate-swing">🎄</div>
                
                <div className="text-center mb-8">
                  <plan.icon className={`w-12 h-12 mx-auto mb-4 text-${plan.color}`} />
                  <h3 className={`text-2xl font-display font-bold text-${plan.color}`}>{plan.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{plan.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {plan.options.map((option) => (
                    <div key={option.duration} className={`p-4 rounded-xl border ${option.popular ? 'border-christmas-gold bg-christmas-gold/10' : 'border-border/50 bg-card/30'}`}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-foreground font-body">{option.duration}</span>
                        <span className="bg-christmas-red text-foreground text-xs px-2 py-1 rounded-full font-body">
                          -{option.discount} 🎅
                        </span>
                      </div>
                      <div className="flex items-end gap-2 mb-3">
                        <span className="text-3xl font-display font-bold text-foreground">${option.price}</span>
                        <span className="text-muted-foreground line-through text-sm font-body">${option.originalPrice}</span>
                        <span className="text-christmas-green text-xs font-body">+1 MOIS GRATUIT</span>
                      </div>
                      <a href={option.link} target="_blank" rel="noopener noreferrer">
                        <Button className={`w-full rounded-full font-body ${option.popular ? 'bg-gradient-christmas glow-red' : 'bg-christmas-green/80 hover:bg-christmas-green'} text-foreground`}>
                          🎁 Commander Maintenant
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Payment Badges */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-4 font-body">Paiement 100% sécurisé</p>
            <img src={paymentBadges} alt="Méthodes de paiement sécurisées" className="h-10 mx-auto opacity-70" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
