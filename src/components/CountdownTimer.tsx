import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Jours', labelShort: 'J' },
    { value: timeLeft.hours, label: 'Heures', labelShort: 'H' },
    { value: timeLeft.minutes, label: 'Min', labelShort: 'M' },
    { value: timeLeft.seconds, label: 'Sec', labelShort: 'S' },
  ];

  return (
    <div className="flex gap-3 md:gap-5 justify-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative">
            <div 
              className="luxury-border w-16 h-20 md:w-20 md:h-24 rounded-lg flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm animate-glow-pulse"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <span className="text-2xl md:text-4xl font-display font-bold text-luxury-gold">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs text-luxury-champagne uppercase tracking-widest font-body">
                {unit.labelShort}
              </span>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-luxury-gold/50" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-luxury-gold/50" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-luxury-gold/50" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-luxury-gold/50" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
