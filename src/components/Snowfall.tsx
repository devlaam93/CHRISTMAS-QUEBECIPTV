import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  type: 'dot' | 'star' | 'flake';
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const particles: Snowflake[] = [];
    const types: ('dot' | 'star' | 'flake')[] = ['dot', 'star', 'flake'];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 8,
        animationDelay: Math.random() * 8,
        size: 4 + Math.random() * 8,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setSnowflakes(particles);
  }, []);

  const renderSnowflake = (flake: Snowflake) => {
    if (flake.type === 'star') {
      return '✦';
    } else if (flake.type === 'flake') {
      return '❄';
    }
    return '●';
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white drop-shadow-md"
          style={{
            left: `${flake.left}%`,
            top: '-20px',
            fontSize: `${flake.size}px`,
            opacity: 0.6 + Math.random() * 0.4,
            animation: `snow ${flake.animationDuration}s linear infinite`,
            animationDelay: `${flake.animationDelay}s`,
          }}
        >
          {renderSnowflake(flake)}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;