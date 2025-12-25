import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Michel T.',
      location: 'Montréal, QC',
      rating: 5,
      text: "Meilleur service IPTV que j'ai utilisé au Canada. Qualité 4K cristalline sur toutes mes chaînes sports. Aucun buffering pendant les matchs de la LNH!",
      date: 'Novembre 2024',
      avatar: 'MT'
    },
    {
      name: 'Sarah L.',
      location: 'Québec, QC',
      rating: 5,
      text: "Enfin coupé le câble! 15 000+ chaînes pour une fraction du coût du câble. L'installation était instantanée et le support a répondu en quelques minutes.",
      date: 'Décembre 2024',
      avatar: 'SL'
    },
    {
      name: 'David R.',
      location: 'Laval, QC',
      rating: 5,
      text: "Le forfait Platinum est incroyable. Toutes les chaînes canadiennes plus tous les services de streaming. Toute ma famille adore!",
      date: 'Octobre 2024',
      avatar: 'DR'
    },
    {
      name: 'Jennifer K.',
      location: 'Gatineau, QC',
      rating: 5,
      text: "J'ai quitté le câble il y a 6 mois. Jamais regardé en arrière. La bibliothèque VOD seule en vaut la peine. Super offre aussi!",
      date: 'Décembre 2024',
      avatar: 'JK'
    },
    {
      name: 'Robert M.',
      location: 'Sherbrooke, QC',
      rating: 5,
      text: "La technologie anti-gel fonctionne vraiment! Zéro buffering même aux heures de pointe. Le service client est excellent et rapide.",
      date: 'Novembre 2024',
      avatar: 'RM'
    },
    {
      name: 'Lisa W.',
      location: 'Trois-Rivières, QC',
      rating: 5,
      text: "Fonctionne parfaitement sur tous mes appareils - Smart TV, téléphone, tablette. L'application est si facile à utiliser. Je recommande fortement Quebec IPTV!",
      date: 'Octobre 2024',
      avatar: 'LW'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-4xl opacity-20 animate-float">⭐</div>
      <div className="absolute bottom-20 left-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '-2s' }}>💬</div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-quebec-orange/10 text-quebec-orange text-sm font-semibold mb-4">
              ⭐ Approuvé par 50 000+ Canadiens
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4">
              Ce Que Disent Nos <span className="text-quebec-orange">Clients</span>
            </h2>
            <p className="text-muted-foreground">
              Avis réels de clients satisfaits de Quebec IPTV à travers le Canada
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100} duration={600}>
              <div className="h-full glass rounded-2xl p-6 border border-border/50 hover:border-quebec-orange/30 transition-all duration-300 hover:-translate-y-1">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-quebec-orange/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-quebec-orange text-quebec-orange" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-quebec flex items-center justify-center text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location} • {testimonial.date}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Rating Badge */}
        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-quebec-orange text-quebec-orange" />
                ))}
              </div>
              <span className="font-display font-bold text-2xl">4.9</span>
            </div>
            <p className="text-sm text-muted-foreground">Basé sur 500+ avis vérifiés</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;