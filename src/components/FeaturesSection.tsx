import { Tv, Film, Zap, Shield, Globe, Headphones, Clock, Smartphone } from 'lucide-react';
import FeatureCard from './FeatureCard';
import ScrollReveal from './ScrollReveal';

const FeaturesSection = () => {
  const features = [
    { icon: Tv, title: '15 000+ Chaînes en Direct', description: "Accédez à des milliers de chaînes TV du monde entier en qualité HD et 4K." },
    { icon: Film, title: '60 000+ Contenu VOD', description: "Bibliothèque massive de films, séries et contenu exclusif à portée de main." },
    { icon: Zap, title: 'Technologie Anti-Gel™', description: "Notre technologie 9.8 assure une expérience de streaming fluide et sans tampon." },
    { icon: Shield, title: 'Protection VPN & Vie Privée', description: "Protection VPN intégrée pour garder votre activité de streaming privée." },
    { icon: Globe, title: 'Support Multi-Appareils', description: "Regardez sur Smart TV, téléphone, tablette ou ordinateur simultanément." },
    { icon: Headphones, title: 'Support 24/7', description: "Service client disponible 24h/24 via chat en direct pour vous assister." },
    { icon: Clock, title: 'Rattrapage & EPG', description: "Ne manquez jamais une émission avec le rattrapage TV et le guide électronique." },
    { icon: Smartphone, title: 'Applications Gratuites', description: "Applications Hotiptv et Ibo player incluses gratuitement avec votre abonnement." },
  ];

  return (
    <section id="features" className="py-24 relative bg-xmas-pattern">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-xmas-green/30 text-sm font-bold text-xmas-green mb-4 font-body shadow-md">
              ⚡ Avantages
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Pourquoi Choisir <span className="text-gradient-green">Quebec IPTV</span>?
            </h2>
            <p className="text-muted-foreground font-body">
              Une expérience de streaming premium conçue pour les canadiens
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