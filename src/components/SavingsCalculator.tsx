import { useState } from 'react';
import { Calculator, Sparkles, TrendingDown, DollarSign } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SavingsCalculator = () => {
  const plans = [
    { name: 'Standard 12 Mois', originalPrice: 99.99, discountedPrice: 39.99 },
    { name: 'Premium 12 Mois', originalPrice: 149.99, discountedPrice: 59.99 },
    { name: 'Platinum 12 Mois', originalPrice: 224.99, discountedPrice: 89.99 },
    { name: 'Standard 24 Mois', originalPrice: 199.99, discountedPrice: 79.99 },
    { name: 'Premium 24 Mois', originalPrice: 249.99, discountedPrice: 99.99 },
  ];

  const [selectedPlan, setSelectedPlan] = useState(2); // Default to Platinum

  const currentPlan = plans[selectedPlan];
  const savings = currentPlan.originalPrice - currentPlan.discountedPrice;
  const savingsPercent = Math.round((savings / currentPlan.originalPrice) * 100);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-xmas-green/5 via-transparent to-xmas-red/5" />
      
      <div className="container mx-auto px-4 relative">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 card-dark border-xmas-gold/50 px-4 py-2 rounded-full mb-4">
                <Calculator className="w-4 h-4 text-xmas-gold" />
                <span className="text-sm font-bold text-xmas-gold font-body">Calculateur d'Économies</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Voyez Combien Vous <span className="text-gradient-xmas">Économisez</span>
              </h3>
            </div>

            {/* Calculator Card */}
            <div className="card-dark p-6 md:p-8 rounded-2xl border-xmas-gold/30">
              {/* Plan Selector */}
              <div className="mb-8">
                <label className="block text-sm font-body text-muted-foreground mb-3">
                  Sélectionnez votre forfait:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {plans.map((plan, index) => (
                    <button
                      key={plan.name}
                      onClick={() => setSelectedPlan(index)}
                      className={`px-3 py-2.5 rounded-xl text-sm font-body font-medium transition-all ${
                        selectedPlan === index
                          ? 'bg-gradient-xmas text-white shadow-lg'
                          : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 border border-border/50'
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Savings Display */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Original Price */}
                <div className="bg-muted/20 rounded-xl p-4 text-center border border-border/30">
                  <DollarSign className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground font-body mb-1">Prix Original</p>
                  <p className="text-xl font-display font-bold text-muted-foreground line-through">
                    ${currentPlan.originalPrice.toFixed(2)}
                  </p>
                </div>

                {/* Discount */}
                <div className="bg-xmas-red/10 rounded-xl p-4 text-center border border-xmas-red/30">
                  <TrendingDown className="w-5 h-5 text-xmas-red mx-auto mb-2" />
                  <p className="text-xs text-xmas-red font-body mb-1">Rabais Appliqué</p>
                  <p className="text-xl font-display font-bold text-xmas-red">
                    -{savingsPercent}%
                  </p>
                </div>

                {/* Final Price */}
                <div className="bg-xmas-green/10 rounded-xl p-4 text-center border border-xmas-green/30">
                  <Sparkles className="w-5 h-5 text-xmas-green mx-auto mb-2" />
                  <p className="text-xs text-xmas-green font-body mb-1">Vous Payez</p>
                  <p className="text-xl font-display font-bold text-xmas-green">
                    ${currentPlan.discountedPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Total Savings Highlight */}
              <div className="relative bg-gradient-to-r from-xmas-gold/20 via-xmas-gold/10 to-xmas-gold/20 rounded-2xl p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
                <div className="relative">
                  <p className="text-sm text-xmas-gold font-body mb-2 uppercase tracking-wider">
                    Vos Économies Totales
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-5xl md:text-6xl font-display font-bold text-xmas-gold">
                      ${savings.toFixed(2)}
                    </span>
                    <div className="text-left">
                      <div className="bg-xmas-gold text-background text-xs font-bold px-2 py-1 rounded-full font-body">
                        ÉCONOMISÉ
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm font-body mt-3">
                    avec le forfait <span className="text-xmas-gold font-semibold">{currentPlan.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SavingsCalculator;
