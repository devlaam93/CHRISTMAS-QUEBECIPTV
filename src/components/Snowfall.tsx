import { useEffect, useState } from 'react';

interface Ember {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const Snowfall = () => {
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    const particles: Ember[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 6 + Math.random() * 8,
        animationDelay: Math.random() * 6,
        size: 2 + Math.random() * 4,
      });
    }
    setEmbers(particles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="absolute rounded-full"
          style={{
            left: `${ember.left}%`,
            bottom: 0,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            background: `radial-gradient(circle, hsl(var(--fire-orange)) 0%, hsl(var(--fire-amber) / 0.5) 50%, transparent 70%)`,
            animation: `ember ${ember.animationDuration}s ease-out infinite`,
            animationDelay: `${ember.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
