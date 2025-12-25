import { Tv, Film, Zap, Shield, Globe, Headphones, Clock, Smartphone } from 'lucide-react';
import FeatureCard from './FeatureCard';
import ScrollReveal from './ScrollReveal';

const FeaturesSection = () => {
  const features = [
    { icon: Tv, title: '15 000+ Chaînes en Direct', description: "Accédez à des milliers de chaînes TV du monde entier en qualité HD et 4K." },
    { icon: Film, title: '60 000+ Contenu VOD', description: "Bibliothèque massive de films, séries et contenu exclusif à portée de main." },
    { icon: Zap, title: 'Technologie Anti-Gel™', description: "Notre technologie 9.8 assure une expérience de streaming fluide et sans tampon." },
    { icon: Shield, title: 'Protection VPN & Vie Privée', description: "Protection VPN intégrée pour garder votre activité de streaming privée et sécurisée." },
    { icon: Globe, title: 'Support Multi-Appareils', description: "Regardez sur n'importe quel appareil - Smart TV, téléphone, tablette ou ordinateur." },
    { icon: Headphones, title: 'Support 24/7', description: "Service client disponible 24h/24 via chat en direct pour vous assister." },
    { icon: Clock, title: 'Rattrapage & EPG', description: "Ne manquez jamais une émission avec le rattrapage TV et le guide électronique." },
    { icon: Smartphone, title: 'Applications Gratuites', description: "Applications Hotiptv et Ibo player incluses gratuitement avec votre abonnement." },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-luxury-gold/50" />
              <span className="text-xs font-medium text-luxury-gold tracking-[0.3em] uppercase font-body">
                Avantages
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-luxury-gold/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Pourquoi Choisir <span className="text-luxury-burgundy-light">Quebec IPTV</span>?
            </h2>
            <p className="text-muted-foreground font-body">
              Une expérience de streaming premium conçue pour les canadiens exigeants
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 75} duration={500}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
