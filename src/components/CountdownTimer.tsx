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

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' },
  ];

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative group">
            {/* Ornament hook */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-christmas-gold" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-christmas-gold" />
            
            {/* Main timer box */}
            <div 
              className="christmas-border w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center bg-card/80 backdrop-blur-sm animate-glow-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-2xl md:text-4xl font-display font-bold text-christmas-gold">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            
            {/* Decorative ornament cap */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-3 bg-gradient-to-b from-christmas-gold to-christmas-gold-light rounded-t-full" />
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-4 font-medium uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
