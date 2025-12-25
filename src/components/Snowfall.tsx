import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
  type: 'dot' | 'star' | 'flake';
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    const types: ('dot' | 'star' | 'flake')[] = ['dot', 'star', 'flake'];
    
    for (let i = 0; i < 60; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 15,
        animationDelay: Math.random() * 10,
        size: 3 + Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.5,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setSnowflakes(flakes);
  }, []);

  const getFlakeStyle = (flake: Snowflake) => {
    if (flake.type === 'star') {
      return {
        background: 'transparent',
        boxShadow: `0 0 ${flake.size}px hsl(42 85% 55% / ${flake.opacity})`,
      };
    }
    return {
      background: `hsl(45 50% 95% / ${flake.opacity})`,
      boxShadow: `0 0 ${flake.size * 2}px hsl(45 50% 95% / 0.3)`,
    };
  };

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
            animation: `snow ${flake.animationDuration}s linear infinite`,
            animationDelay: `${flake.animationDelay}s`,
            ...getFlakeStyle(flake),
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
