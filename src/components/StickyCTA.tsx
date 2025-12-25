import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background to-transparent lg:hidden">
      <a href="#pricing">
        <Button className="w-full btn-xmas rounded-full py-6 text-base font-body shadow-2xl group animate-glow-pulse">
          <Gift className="w-5 h-5 mr-2 animate-bounce-slow" />
          🎄 Commander Maintenant - 80% Rabais
        </Button>
      </a>
    </div>
  );
};

export default StickyCTA;