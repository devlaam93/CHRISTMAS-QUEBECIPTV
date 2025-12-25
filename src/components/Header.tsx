import { Menu, X, Gift, TreePine } from 'lucide-react';
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
    { label: 'Avantages', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      {/* Promo Banner */}
      <div className={`bg-gradient-xmas overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <p className="py-2.5 text-xs md:text-sm font-bold text-white flex items-center justify-center gap-2 font-body">
          <Gift className="w-4 h-4 animate-bounce-slow" />
          🎄 OFFRE DE NOËL — 80% RABAIS + 1 Mois GRATUIT 🎁
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
                  className="text-sm font-semibold text-muted-foreground hover:text-xmas-red transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
                <Button className="btn-xmas rounded-full px-6 font-body">
                  Essai Gratuit 🎁
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
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
                  className="text-sm font-semibold text-muted-foreground hover:text-xmas-red transition-colors py-2 font-body"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
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