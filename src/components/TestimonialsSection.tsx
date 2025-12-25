import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Michel T.', location: 'Montréal, QC', rating: 5, text: "Meilleur service IPTV que j'ai utilisé au Canada. Qualité 4K cristalline sur toutes mes chaînes sports. Aucun buffering!", date: 'Décembre 2024', avatar: 'MT' },
    { name: 'Sarah L.', location: 'Québec, QC', rating: 5, text: "Enfin coupé le câble! 15 000+ chaînes pour une fraction du coût. L'installation était instantanée!", date: 'Décembre 2024', avatar: 'SL' },
    { name: 'David R.', location: 'Laval, QC', rating: 5, text: "Le forfait Platinum est incroyable. Toutes les chaînes canadiennes plus tous les services de streaming.", date: 'Décembre 2024', avatar: 'DR' },
    { name: 'Jennifer K.', location: 'Gatineau, QC', rating: 5, text: "J'ai quitté le câble il y a 6 mois. Jamais regardé en arrière. La bibliothèque VOD en vaut la peine!", date: 'Décembre 2024', avatar: 'JK' },
    { name: 'Robert M.', location: 'Sherbrooke, QC', rating: 5, text: "La technologie anti-gel fonctionne vraiment! Zéro buffering même aux heures de pointe.", date: 'Décembre 2024', avatar: 'RM' },
    { name: 'Lisa W.', location: 'Trois-Rivières, QC', rating: 5, text: "Fonctionne parfaitement sur tous mes appareils. L'application est si facile à utiliser!", date: 'Décembre 2024', avatar: 'LW' }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-christmas-red/5 to-background" />
      <div className="absolute top-20 right-10 text-4xl opacity-30 animate-swing">🎄</div>
      <div className="absolute bottom-20 left-10 text-4xl opacity-30 animate-float">⭐</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-christmas-red/20 text-christmas-gold text-sm font-semibold mb-4 font-body">
              🎄 Approuvé par 50 000+ Canadiens 🎄
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Ce Que Disent Nos <span className="text-christmas-gold">Clients</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100} duration={600}>
              <div className="h-full christmas-border rounded-2xl p-6 bg-card/30 hover:glow-gold transition-all duration-300 hover:-translate-y-1">
                <Quote className="w-8 h-8 text-christmas-gold/30 mb-4" />
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-christmas-gold text-christmas-gold" />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed mb-4 font-body">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-christmas flex items-center justify-center text-sm font-bold text-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{testimonial.location} • {testimonial.date}</p>
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
