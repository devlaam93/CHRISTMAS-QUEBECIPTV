import { Check, Crown, Gift, Star } from 'lucide-react';
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
    <section id="platinum" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-christmas-gold/5 via-transparent to-christmas-red/5" />
      
      {/* Christmas decorations */}
      <div className="absolute top-10 right-10 text-4xl animate-swing">🎄</div>
      <div className="absolute bottom-20 left-10 text-3xl animate-float">⭐</div>
      <div className="absolute top-1/2 right-5 text-3xl animate-twinkle">✨</div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-christmas-gold/20 border border-christmas-gold/40 rounded-full px-4 py-2 mb-6">
              <Crown className="w-5 h-5 text-christmas-gold" />
              <span className="text-sm font-medium text-christmas-gold font-body">COLLECTION PLATINUM DE NOËL</span>
              <Crown className="w-5 h-5 text-christmas-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              🎁 Expérience <span className="text-christmas-gold">Platinum</span> 🎁
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Le cadeau parfait pour les fêtes! Notre meilleure offre avec toutes les fonctionnalités 
              premium et le meilleur contenu au Canada.
            </p>
          </div>
        </ScrollReveal>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.duration} animation="fade-up" delay={index * 100}>
              <div className={`relative christmas-border rounded-3xl p-8 bg-card/50 backdrop-blur-sm ${plan.popular ? 'ring-2 ring-christmas-gold glow-gold' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-christmas-red text-foreground px-4 py-1 rounded-full text-sm font-semibold font-body flex items-center gap-1">
                    <Star className="w-4 h-4" /> Meilleure Valeur 🎅
                  </div>
                )}
                
                {/* Christmas decoration */}
                <div className="absolute -top-6 -right-6 text-4xl animate-swing">🎁</div>
                
                <div className="text-center">
                  <Crown className="w-12 h-12 mx-auto mb-4 text-christmas-gold" />
                  <div className="text-5xl font-display font-bold text-christmas-gold mb-2">
                    {plan.duration}
                  </div>
                  <div className="text-lg text-muted-foreground font-body mb-4">{plan.unit}</div>
                  
                  <div className="mb-6">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-4xl font-display font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground line-through font-body">${plan.originalPrice}</span>
                    </div>
                    <p className="text-christmas-green text-sm font-body mt-1">
                      Seulement ${plan.perMonth}/mois + 1 MOIS GRATUIT
                    </p>
                  </div>
                  
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full rounded-full font-body text-lg py-6 ${plan.popular ? 'bg-gradient-christmas glow-red' : 'bg-christmas-gold/80 hover:bg-christmas-gold'} text-foreground`}>
                      <Gift className="w-5 h-5 mr-2" />
                      Commander Maintenant
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features Grid */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="christmas-border rounded-3xl p-8 bg-card/30 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-center mb-8 text-christmas-gold">
              🎄 Tout Inclus dans Platinum 🎄
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-card/50">
                  <Check className="w-5 h-5 text-christmas-green flex-shrink-0" />
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
