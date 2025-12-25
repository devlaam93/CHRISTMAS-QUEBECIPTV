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
    { value: timeLeft.days, label: 'JOURS' },
    { value: timeLeft.hours, label: 'HEURES' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEC' },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div 
            className="card-dark w-16 h-20 md:w-20 md:h-24 flex flex-col items-center justify-center animate-pulse-glow"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <span className="text-2xl md:text-4xl font-display font-bold text-gradient-fire">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground mt-2 font-medium tracking-widest font-body">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
