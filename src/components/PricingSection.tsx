import { Check, Crown, Zap, Shield, Tv, Film, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import paymentBadges from '@/assets/payment-badges.webp';
const PricingSection = () => {
  const features = [{
    name: 'Chaînes en Direct',
    standard: '15 000+',
    premium: '30 000+',
    icon: Tv
  }, {
    name: 'Films & Séries (VOD)',
    standard: '60K+',
    premium: '120K+',
    icon: Film
  }, {
    name: 'Application Hotiptv',
    standard: true,
    premium: true
  }, {
    name: 'Application Ibo Player',
    standard: true,
    premium: true
  }, {
    name: 'Activation Instantanée',
    standard: true,
    premium: true
  }, {
    name: 'Netflix, Prime, Disney+',
    standard: true,
    premium: true
  }, {
    name: 'Toutes les Chaînes Sports',
    standard: true,
    premium: true
  }, {
    name: 'Rattrapage & EPG',
    standard: true,
    premium: true
  }, {
    name: 'Qualité UHD, FHD, HD',
    standard: true,
    premium: true
  }, {
    name: 'Technologie Anti-Gel™',
    standard: '9.8',
    premium: '10.0'
  }, {
    name: 'Protection VPN + Vie Privée',
    standard: false,
    premium: true,
    icon: Shield
  }, {
    name: 'Support 24/7',
    standard: true,
    premium: true,
    icon: Headphones
  }, {
    name: 'Garantie Remboursement',
    standard: '7 Jours',
    premium: '14 Jours'
  }];
  const plans = [{
    type: 'standard',
    icon: Zap,
    title: 'Standard',
    subtitle: 'Serveur Performance',
    color: 'quebec-orange',
    options: [{
      duration: '12 Mois',
      price: '39.99',
      originalPrice: '119',
      discount: '80%',
      link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-subscriptions-2/'
    }, {
      duration: '24 Mois',
      price: '79.99',
      originalPrice: '199',
      discount: '80%',
      link: 'https://order.quebeciptv.ca/step/checkout-24-month-iptv-subscriptions-2/'
    }]
  }, {
    type: 'premium',
    icon: Crown,
    title: 'Premium',
    subtitle: 'Serveur Performance',
    color: 'quebec-gold',
    popular: true,
    options: [{
      duration: '12 Mois',
      price: '59.99',
      originalPrice: '179',
      discount: '80%',
      link: 'https://order.quebeciptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/',
      popular: true
    }, {
      duration: '24 Mois',
      price: '99.99',
      originalPrice: '259',
      discount: '80%',
      link: 'https://order.quebeciptv.ca/step/checkout-24-months-iptv-premium-subscriptions-2/'
    }]
  }];
  return;
};
export default PricingSection;