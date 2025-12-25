import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl card-dark border-xmas-green/20 hover:border-xmas-red/40 transition-all duration-300 hover:-translate-y-2">
      {/* Corner decoration */}
      <div className="absolute top-3 right-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity">🎄</div>
      
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-gradient-green p-3 mb-4 group-hover:bg-gradient-xmas transition-all duration-300">
          <Icon className="w-full h-full text-white" />
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground font-body">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;