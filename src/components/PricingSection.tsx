import { Check, X, Crown, Zap, Shield, Tv, Film, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import paymentBadges from '@/assets/payment-badges.webp';
const PricingSection = () => {
  const features = [{
    name: 'Live Channels',
    standard: '15,000+',
    premium: '30,000+',
    icon: Tv
  }, {
    name: 'Movies & Series (VOD)',
    standard: '60K+',
    premium: '120K+',
    icon: Film
  }, {
    name: 'Hotiptv App',
    standard: true,
    premium: true
  }, {
    name: 'Ibo Player App',
    standard: true,
    premium: true
  }, {
    name: 'Instant Activation',
    standard: true,
    premium: true
  }, {
    name: 'Netflix, Prime, Disney+',
    standard: true,
    premium: true
  }, {
    name: 'All Sports Channels',
    standard: true,
    premium: true
  }, {
    name: 'Catch-up & EPG',
    standard: true,
    premium: true
  }, {
    name: 'UHD, FHD, HD Quality',
    standard: true,
    premium: true
  }, {
    name: 'Anti-Freeze™ Technology',
    standard: '9.8',
    premium: '10.0'
  }, {
    name: 'Privacy Protection + VPN',
    standard: false,
    premium: true,
    icon: Shield
  }, {
    name: '24/7 Support',
    standard: true,
    premium: true,
    icon: Headphones
  }, {
    name: 'Money Back Guarantee',
    standard: '7 Days',
    premium: '14 Days'
  }];
  const plans = [{
    type: 'standard',
    icon: Zap,
    title: 'Standard',
    subtitle: 'Performance Server',
    color: 'christmas-red',
    options: [{
      duration: '12 Months',
      price: '39.99',
      originalPrice: '119',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-12-months-iptv-subscriptions-2/'
    }, {
      duration: '24 Months',
      price: '79.99',
      originalPrice: '199',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-24-month-iptv-subscriptions-2/'
    }]
  }, {
    type: 'premium',
    icon: Crown,
    title: 'Premium',
    subtitle: 'Performance Server',
    color: 'christmas-gold',
    popular: true,
    options: [{
      duration: '12 Months',
      price: '59.99',
      originalPrice: '179',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/',
      popular: true
    }, {
      duration: '24 Months',
      price: '99.99',
      originalPrice: '259',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-24-months-iptv-premium-subscriptions-2/'
    }]
  }];
  return;
};
export default PricingSection;