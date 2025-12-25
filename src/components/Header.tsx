import { Menu, X, Sparkles } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      {/* Promo Banner */}
      <div className={`overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <div className="btn-gradient-red py-2 text-center">
          <p className="text-xs md:text-sm font-medium text-white flex items-center justify-center gap-2 font-body">
            <Sparkles className="w-4 h-4" />
            🎄 OFFRE DE NOËL — 80% RABAIS + 1 Mois GRATUIT 🎁
            <Sparkles className="w-4 h-4" />
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className={`mx-4 md:mx-8 mt-2 rounded-2xl transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg' : 'glass'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Quebec IPTV" className="h-8 md:h-10 w-auto" />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-xmas-red transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
                <Button className="btn-gradient-red rounded-full px-6 font-body hover:opacity-90 transition-opacity">
                  Essai Gratuit 🎁
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                <Button size="sm" className="btn-gradient-red rounded-full text-xs font-body">
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
          <div className="lg:hidden border-t border-border/20 bg-white/90 backdrop-blur-xl rounded-b-2xl">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-xmas-red transition-colors py-2 font-body"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
                <Button className="btn-gradient-red rounded-full w-full mt-2 font-body">
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
