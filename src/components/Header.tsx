import { Menu, X, Gift, TreePine, Home, Tag, Gem, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/quebec-iptv-logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#', icon: Home },
    { label: 'Forfaits', href: '#pricing', icon: Tag },
    { label: 'Platinum', href: '#platinum', icon: Gem },
    { label: 'Avantages', href: '#features', icon: Sparkles },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
    { label: 'Contact', href: '#contact', icon: MessageCircle },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      {/* Promo Banner */}
      <div className={`bg-gradient-xmas overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <p className="py-2.5 text-xs md:text-sm font-bold text-white flex items-center justify-center gap-2 font-body">
          <Gift className="w-4 h-4 animate-bounce-slow" />
          🎄 OFFRE DE NOËL — 60% RABAIS 🎁
          <TreePine className="w-4 h-4 animate-sway" />
        </p>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/50' : 'bg-background/80 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Quebec IPTV" className="h-9 md:h-10 w-auto" />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors font-body flex items-center gap-1.5 ${
                    link.label === 'Platinum' 
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-xmas-gold bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-xmas-gold' 
                      : 'text-muted-foreground hover:text-xmas-red'
                  }`}
                >
                  <link.icon className={`w-4 h-4 ${link.label === 'Platinum' ? 'text-purple-400' : ''}`} />
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a href="https://quebeciptv.ca/obtenez-votre-essai-gratuit/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-xmas rounded-full px-6 font-body">
                  Essai Gratuit 🎁
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a href="https://quebeciptv.ca/obtenez-votre-essai-gratuit/" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                <Button size="sm" className="btn-xmas rounded-full text-xs font-body">
                  Essai 🎁
                </Button>
              </a>
              <button className="p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border/50">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-2 font-body flex items-center gap-2 ${
                    link.label === 'Platinum' 
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-xmas-gold bg-clip-text text-transparent' 
                      : 'text-muted-foreground hover:text-xmas-red'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon className={`w-4 h-4 ${link.label === 'Platinum' ? 'text-purple-400' : ''}`} />
                  {link.label}
                </a>
              ))}
              <a href="https://quebeciptv.ca/obtenez-votre-essai-gratuit/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-xmas rounded-full w-full mt-2 font-body">
                  Essai Gratuit 🎁
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;