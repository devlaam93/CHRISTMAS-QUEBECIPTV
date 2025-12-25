import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from './ScrollReveal';

const FAQSection = () => {
  const faqs = [
    { question: "Comment démarrer avec Quebec IPTV?", answer: "Choisissez simplement votre forfait préféré, complétez le paiement sécurisé, et vous recevrez une activation instantanée. Notre équipe vous enverra les instructions de configuration en quelques minutes." },
    { question: "Quels appareils sont compatibles avec Quebec IPTV?", answer: "Quebec IPTV fonctionne sur pratiquement tous les appareils, y compris les Smart TVs (Samsung, LG, Sony), les boîtiers Android, Firestick, Apple TV, téléphones et tablettes iOS et Android, ordinateurs Mac et Windows." },
    { question: "Puis-je essayer avant d'acheter?", answer: "Oui! Nous offrons un essai gratuit de 24 heures pour que vous puissiez tester la qualité de notre service avant de vous engager. Contactez-nous via WhatsApp pour demander votre essai." },
    { question: "Qu'est-ce qui est inclus dans l'abonnement?", answer: "Tous les forfaits incluent 15 000+ chaînes en direct, 60 000+ films et séries (VOD), contenu Netflix et plateformes de streaming, chaînes sports, rattrapage TV, EPG, et support 24/7." },
    { question: "Quelle est la différence entre Standard et Premium?", answer: "Les serveurs Premium offrent plus de chaînes (30 000+), plus de contenu VOD (120 000+), protection VPN intégrée, et allocation de bande passante prioritaire pour l'expérience de streaming la plus fluide." },
    { question: "Y a-t-il une garantie de remboursement?", answer: "Absolument! Nous offrons une garantie de remboursement de 7 jours sur tous les forfaits. Si vous n'êtes pas satisfait pour quelque raison que ce soit, nous vous rembourserons votre achat." },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-burgundy/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-luxury-gold/50" />
              <span className="text-xs font-medium text-luxury-gold tracking-[0.3em] uppercase font-body">FAQ</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-luxury-gold/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Questions <span className="text-luxury-gold">Fréquentes</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100} duration={500}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="luxury-border rounded-xl px-6 bg-card/30 data-[state=open]:ring-1 data-[state=open]:ring-luxury-gold/30 transition-all"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:text-luxury-gold transition-colors py-5 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 font-body text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
