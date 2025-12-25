import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 40; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 12 + Math.random() * 10,
        animationDelay: Math.random() * 8,
        size: 4 + Math.random() * 8,
        opacity: 0.15 + Math.random() * 0.25,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snow ${flake.animationDuration}s linear infinite`,
            animationDelay: `${flake.animationDelay}s`,
            background: `radial-gradient(circle, hsl(var(--xmas-gold) / 0.6) 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
