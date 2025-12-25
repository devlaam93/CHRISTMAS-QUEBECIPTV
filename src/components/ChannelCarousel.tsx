import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

// Import official logos
import netflixLogo from '@/assets/logos/netflix.svg';
import primeVideoLogo from '@/assets/logos/prime-video.svg';
import disneyPlusLogo from '@/assets/logos/disney-plus.svg';
import maxLogo from '@/assets/logos/max.svg';
import huluLogo from '@/assets/logos/hulu.svg';
import appleTvLogo from '@/assets/logos/apple-tv.svg';
import paramountLogo from '@/assets/logos/paramount.svg';
import peacockLogo from '@/assets/logos/peacock.svg';

// Import channel category images
import sportsImg from '@/assets/channels/sports.png';
import moviesImg from '@/assets/channels/movies.png';
import newsImg from '@/assets/channels/news.png';
import kidsImg from '@/assets/channels/kids.png';
import documentaryImg from '@/assets/channels/documentary.png';
import musicImg from '@/assets/channels/music.png';
import comedyImg from '@/assets/channels/comedy.png';
import dramaImg from '@/assets/channels/drama.png';

const platforms = [
  { name: 'Netflix', logo: netflixLogo },
  { name: 'Prime Video', logo: primeVideoLogo },
  { name: 'Disney+', logo: disneyPlusLogo },
  { name: 'Max', logo: maxLogo },
  { name: 'Hulu', logo: huluLogo },
  { name: 'Apple TV+', logo: appleTvLogo },
  { name: 'Paramount+', logo: paramountLogo },
  { name: 'Peacock', logo: peacockLogo },
];

const channels = [
  {
    name: 'Sports',
    image: sportsImg,
    count: '500+',
    description: 'Matchs en direct, faits saillants & analyses',
    features: ['LNH', 'NBA', 'UEFA', 'Événements PPV'],
  },
  {
    name: 'Films',
    image: moviesImg,
    count: '60K+',
    description: 'Derniers blockbusters & classiques',
    features: ['4K HDR', 'Nouveautés', 'Gagnants Oscar'],
  },
  {
    name: 'Nouvelles',
    image: newsImg,
    count: '200+',
    description: 'Couverture mondiale 24/7',
    features: ['RDI', 'TVA', 'Radio-Canada', 'LCN'],
  },
  {
    name: 'Enfants',
    image: kidsImg,
    count: '300+',
    description: 'Contenu sécuritaire pour tous âges',
    features: ['Disney', 'Cartoon Network', 'Nick'],
  },
  {
    name: 'Documentaires',
    image: documentaryImg,
    count: '400+',
    description: 'Explorez notre monde & au-delà',
    features: ['Nature', 'Histoire', 'Science', 'Crime'],
  },
  {
    name: 'Musique',
    image: musicImg,
    count: '150+',
    description: 'Concerts, vidéos & radio',
    features: ['MTV', 'VH1', 'Concerts Live'],
  },
  {
    name: 'Comédie',
    image: comedyImg,
    count: '250+',
    description: 'Stand-up & spéciaux comédie',
    features: ['Stand-up', 'Sitcoms', 'Roasts'],
  },
  {
    name: 'Drame',
    image: dramaImg,
    count: '1000+',
    description: 'Séries primées & émissions',
    features: ['Séries Premium', 'Téléromans', 'K-Drama'],
  },
];

const ChannelCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Duplicate items for seamless loop
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];
  const duplicatedChannels = [...channels, ...channels, ...channels];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden pb-[112px] pt-[9px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
              Tous Vos <span className="text-quebec-orange">Favoris</span> En Un Seul Endroit
            </h2>
            <p className="text-muted-foreground">
              🍁 Diffusez du contenu de toutes les principales plateformes plus 30 000+ chaînes en direct
            </p>
          </div>
        </ScrollReveal>

        {/* Platforms Carousel - moves left */}
        <div className="mb-8 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className="flex gap-6 py-4 ml-0"
            style={{
              transform: `translateX(-${offset % (platforms.length * 180)}px)`,
            }}
          >
            {duplicatedPlatforms.map((platform, index) => (
              <div
                key={`platform-${index}`}
                className="flex-shrink-0 w-28 h-14 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-quebec-orange/50 transition-all duration-300 hover:scale-105 group"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-5 w-auto max-w-20 object-contain group-hover:scale-110 transition-transform brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Channels Carousel - moves right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className="flex gap-5 py-4 ml-0"
            style={{
              transform: `translateX(-${channels.length * 280 - (offset % (channels.length * 280))}px)`,
            }}
          >
            {duplicatedChannels.map((channel, index) => (
              <div
                key={`channel-${index}`}
                className="flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-quebec-orange/90 text-white backdrop-blur-sm">
                      {channel.count} Chaînes
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-xl text-white mb-1 drop-shadow-lg">
                    {channel.name}
                  </h3>
                  <p className="text-white/80 text-xs mb-2 line-clamp-1">{channel.description}</p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-1">
                    {channel.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-white/20 text-white/90 backdrop-blur-sm border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-quebec-orange/50 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div className="container mx-auto px-4 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '30 000+', label: 'Chaînes en Direct', emoji: '📺' },
                { value: '60 000+', label: 'Films & Séries', emoji: '🎬' },
                { value: '4K', label: 'Qualité Ultra HD', emoji: '✨' },
                { value: '99.9%', label: 'Disponibilité', emoji: '⚡' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl glass border border-border/30"
                >
                  <div className="text-2xl mb-1">{stat.emoji}</div>
                  <div className="text-2xl md:text-3xl font-display font-black text-quebec-orange">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ChannelCarousel;