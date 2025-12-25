import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Michel T.', location: 'Montréal, QC', rating: 5, text: "Meilleur service IPTV que j'ai utilisé. Qualité 4K cristalline sur toutes mes chaînes sports.", avatar: 'MT' },
    { name: 'Sarah L.', location: 'Québec, QC', rating: 5, text: "Enfin coupé le câble! 15 000+ chaînes pour une fraction du coût. Installation instantanée!", avatar: 'SL' },
    { name: 'David R.', location: 'Laval, QC', rating: 5, text: "Le forfait Platinum est incroyable. Toutes les chaînes canadiennes plus Netflix et Disney+.", avatar: 'DR' },
    { name: 'Jennifer K.', location: 'Gatineau, QC', rating: 5, text: "J'ai quitté le câble il y a 6 mois. Jamais regardé en arrière. La bibliothèque VOD est superbe!", avatar: 'JK' },
    { name: 'Robert M.', location: 'Sherbrooke, QC', rating: 5, text: "La technologie anti-gel fonctionne vraiment! Zéro buffering même aux heures de pointe.", avatar: 'RM' },
    { name: 'Lisa W.', location: 'Trois-Rivières, QC', rating: 5, text: "Fonctionne parfaitement sur tous mes appareils. L'application est si facile à utiliser!", avatar: 'LW' }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-xmas-gold text-xmas-gold" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Avis de Nos <span className="text-gradient-xmas">Clients</span>
            </h2>
            <p className="text-muted-foreground font-body">
              Plus de 50 000 Canadiens nous font confiance
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100} duration={600}>
              <div className="h-full glass-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Quote className="w-8 h-8 text-xmas-red/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-xmas-gold text-xmas-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5 font-body">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                  <div className="w-10 h-10 rounded-full btn-gradient-red flex items-center justify-center text-sm font-bold text-white font-body">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
