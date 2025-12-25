import { Mail, MapPin, Tv, Shield, Headphones, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import logo from "@/assets/quebec-iptv-logo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  const highlights = [
    { icon: Tv, label: "30 000+ Chaînes" },
    { icon: Shield, label: "99.9% Disponibilité" },
    { icon: Headphones, label: "Support 24/7" },
    { icon: Clock, label: "Activation Instantanée" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-luxury-forest/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="relative container mx-auto px-4 py-16">
        <ScrollReveal animation="fade-up" delay={0} duration={500}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 py-4 px-5 rounded-xl luxury-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
                <item.icon className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground font-body">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ScrollReveal animation="fade-up" delay={100} duration={500}>
            <div className="space-y-6">
              <img src={logo} alt="Quebec IPTV" className="h-12 w-auto" />
              <p className="text-muted-foreground leading-relaxed max-w-md font-body text-sm">
                Vivez un divertissement premium avec le service IPTV le plus fiable au Canada. 
                Streaming 4K cristallin, des milliers de chaînes, et un support de classe mondiale.
              </p>
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white border-0 font-body">
                  <WhatsAppIcon className="w-5 h-5" />
                  Nous Contacter
                </Button>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} duration={500}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="https://api.whatsapp.com/send/?phone=14508040166" target="_blank" rel="noopener noreferrer" className="group p-5 rounded-xl luxury-border bg-card/30 hover:bg-card/50 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-luxury-forest/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 text-luxury-forest" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">WhatsApp</h4>
                <p className="text-xs text-muted-foreground font-body">+1 450 804 0166</p>
              </a>

              <a href="mailto:contact@quebeciptv.ca" className="group p-5 rounded-xl luxury-border bg-card/30 hover:bg-card/50 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-luxury-burgundy/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-luxury-burgundy-light" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">Courriel</h4>
                <p className="text-xs text-muted-foreground font-body break-all">contact@quebeciptv.ca</p>
              </a>

              <div className="group p-5 rounded-xl luxury-border bg-card/30 hover:bg-card/50 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-luxury-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">Emplacement</h4>
                <p className="text-xs text-muted-foreground font-body">Québec, Canada 🇨🇦</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade" delay={300} duration={500}>
          <div className="pt-8 border-t border-luxury-gold/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground font-body">
                © {new Date().getFullYear()} Quebec IPTV. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors font-body">Confidentialité</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors font-body">Conditions</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors font-body">Remboursement</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
