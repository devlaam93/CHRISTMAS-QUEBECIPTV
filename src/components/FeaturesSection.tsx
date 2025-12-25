import { 
  Tv, 
  Film, 
  Zap, 
  Shield, 
  Globe, 
  Headphones, 
  Clock,
  Smartphone
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import ScrollReveal from './ScrollReveal';

const FeaturesSection = () => {
  const features = [
    {
      icon: Tv,
      title: '15 000+ Chaînes en Direct',
      description: "Accédez à des milliers de chaînes TV du monde entier en qualité HD et 4K."
    },
    {
      icon: Film,
      title: '60 000+ Contenu VOD',
      description: "Bibliothèque massive de films, séries et contenu exclusif à portée de main."
    },
    {
      icon: Zap,
      title: 'Technologie Anti-Gel™',
      description: "Notre technologie 9.8 assure une expérience de streaming fluide et sans tampon."
    },
    {
      icon: Shield,
      title: 'Protection VPN & Vie Privée',
      description: "Protection VPN intégrée pour garder votre activité de streaming privée et sécurisée."
    },
    {
      icon: Globe,
      title: 'Support Multi-Appareils',
      description: "Regardez sur n'importe quel appareil - Smart TV, téléphone, tablette ou ordinateur simultanément."
    },
    {
      icon: Headphones,
      title: 'Support 24/7',
      description: "Service client disponible 24h/24 via chat en direct pour vous assister à tout moment."
    },
    {
      icon: Clock,
      title: 'Rattrapage & EPG',
      description: "Ne manquez jamais une émission avec le rattrapage TV et le guide électronique complet."
    },
    {
      icon: Smartphone,
      title: 'Applications Gratuites Incluses',
      description: "Applications Hotiptv et Ibo player incluses gratuitement avec votre abonnement."
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 text-3xl opacity-20 animate-float">⭐</div>
      <div className="absolute bottom-10 left-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '-2s' }}>🍁</div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Pourquoi Choisir <span className="text-quebec-orange">Quebec IPTV?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              🍁 Nous sommes le meilleur fournisseur IPTV au Canada, offrant un streaming fiable avec une vidéo de haute qualité 
              qui donne vie à votre divertissement préféré.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up"
              delay={index * 75}
              duration={500}
            >
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;