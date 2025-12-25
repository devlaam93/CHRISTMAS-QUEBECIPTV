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
    { value: timeLeft.days, label: 'JOURS', color: 'xmas-red' },
    { value: timeLeft.hours, label: 'HEURES', color: 'xmas-green' },
    { value: timeLeft.minutes, label: 'MIN', color: 'xmas-red' },
    { value: timeLeft.seconds, label: 'SEC', color: 'xmas-green' },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div 
            className={`bg-white border-4 ${index % 2 === 0 ? 'border-xmas-red/30' : 'border-xmas-green/30'} w-18 h-24 md:w-22 md:h-28 flex flex-col items-center justify-center rounded-2xl shadow-lg animate-glow-pulse`}
            style={{ animationDelay: `${index * 0.2}s`, width: '72px', height: '88px' }}
          >
            <span className={`text-3xl md:text-4xl font-display font-bold ${index % 2 === 0 ? 'text-xmas-red' : 'text-xmas-green'}`}>
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className={`text-[10px] mt-2 font-bold tracking-widest font-body ${index % 2 === 0 ? 'text-xmas-red' : 'text-xmas-green'}`}>
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;