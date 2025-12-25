import { Menu, X, Crown } from 'lucide-react';
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
    { label: 'Accueil', href: '#' },
    { label: 'Forfaits', href: '#pricing' },
    { label: 'Platinum', href: '#platinum' },
    { label: 'Avantages', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-luxury' : ''}`}>
      {/* Luxury Promo Banner */}
      <div className={`bg-gradient-luxury overflow-hidden transition-all duration-500 ${scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-16 py-2.5 opacity-100'}`}>
        <div className="gold-shimmer absolute inset-0 h-full" />
        <p className="relative text-xs md:text-sm font-medium text-luxury-champagne flex items-center justify-center gap-3 px-4 font-body tracking-wide">
          <Crown className="w-4 h-4 text-luxury-gold" />
          <span>OFFRE EXCLUSIVE DE NOËL — <span className="text-luxury-gold font-semibold">80% RABAIS</span> + 1 Mois Gratuit</span>
          <Crown className="w-4 h-4 text-luxury-gold" />
        </p>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-500 ${scrolled ? 'glass-strong' : 'glass'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Quebec IPTV" className="h-9 md:h-11 w-auto" />
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-luxury-gold transition-colors duration-300 tracking-wide font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-gold text-luxury-forest-dark font-semibold px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity font-body tracking-wide">
                  Essai Gratuit
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                <Button size="sm" className="bg-gradient-gold text-luxury-forest-dark font-semibold rounded-md text-xs font-body">
                  Essai
                </Button>
              </a>
              <button className="p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass-strong border-t border-luxury-gold/10">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-luxury-gold transition-colors py-2 font-body"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-gold text-luxury-forest-dark font-semibold w-full mt-2 rounded-md font-body">
                  Essai Gratuit
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
