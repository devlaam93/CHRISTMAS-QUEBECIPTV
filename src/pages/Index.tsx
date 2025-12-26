import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChannelCarousel from '@/components/ChannelCarousel';
import PlatinumBanner from '@/components/PlatinumBanner';
import PlatinumExclusiveSection from '@/components/PlatinumExclusiveSection';
import PlatinumSection from '@/components/PlatinumSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Snowfall from '@/components/Snowfall';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyCTA from '@/components/StickyCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Snowfall />
      <Header />
      <main>
        <HeroSection />
        <ChannelCarousel />
        <PlatinumBanner />
        <PlatinumExclusiveSection />
        <PlatinumSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
};

export default Index;
