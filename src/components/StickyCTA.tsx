import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetDate = new Date('2026-01-01T00:00:00');
  
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)) % 24,
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background to-transparent lg:hidden">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xs text-xmas-gold font-bold font-body animate-pulse">⏰ Offre expire dans:</span>
        <div className="flex items-center gap-1">
          <span className="bg-xmas-red/20 text-xmas-red px-2 py-0.5 rounded text-xs font-bold font-body">
            {String(timeLeft.hours).padStart(2, '0')}h
          </span>
          <span className="text-xmas-gold">:</span>
          <span className="bg-xmas-green/20 text-xmas-green px-2 py-0.5 rounded text-xs font-bold font-body">
            {String(timeLeft.minutes).padStart(2, '0')}m
          </span>
          <span className="text-xmas-gold">:</span>
          <span className="bg-xmas-red/20 text-xmas-red px-2 py-0.5 rounded text-xs font-bold font-body">
            {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>
      <a href="#pricing">
        <Button className="w-full btn-xmas rounded-full py-6 text-base font-body shadow-2xl group">
          <Gift className="w-5 h-5 mr-2 animate-bounce-slow" />
          🎄 Commander - 80% Rabais
        </Button>
      </a>
    </div>
  );
};

export default StickyCTA;