import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from './ScrollReveal';

const FAQSection = () => {
  const faqs = [
    {
      question: "Comment démarrer avec Quebec IPTV?",
      answer: "Choisissez simplement votre forfait préféré, complétez le paiement sécurisé, et vous recevrez une activation instantanée. Notre équipe vous enverra les instructions de configuration en quelques minutes."
    },
    {
      question: "Quels appareils sont compatibles avec Quebec IPTV?",
      answer: "Quebec IPTV fonctionne sur pratiquement tous les appareils, y compris les Smart TVs (Samsung, LG, Sony), les boîtiers Android, Firestick, Apple TV, téléphones et tablettes iOS et Android, ordinateurs Mac et Windows."
    },
    {
      question: "Puis-je essayer avant d'acheter?",
      answer: "Oui! Nous offrons un essai gratuit de 24 heures pour que vous puissiez tester la qualité de notre service avant de vous engager. Contactez-nous via WhatsApp pour demander votre essai."
    },
    {
      question: "Qu'est-ce qui est inclus dans l'abonnement?",
      answer: "Tous les forfaits incluent 15 000+ chaînes en direct, 60 000+ films et séries (VOD), contenu Netflix et plateformes de streaming, chaînes sports, rattrapage TV, EPG, et support 24/7."
    },
    {
      question: "Quelle est la différence entre les serveurs Standard et Premium?",
      answer: "Les serveurs Premium offrent plus de chaînes (30 000+), plus de contenu VOD (120 000+), protection VPN intégrée, et allocation de bande passante prioritaire pour l'expérience de streaming la plus fluide possible."
    },
    {
      question: "Y a-t-il une garantie de remboursement?",
      answer: "Absolument! Nous offrons une garantie de remboursement de 7 jours sur tous les forfaits. Si vous n'êtes pas satisfait pour quelque raison que ce soit, nous vous rembourserons votre achat - sans poser de questions."
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-christmas-green/5 to-background" />
      
      {/* Christmas decorations */}
      <div className="absolute top-20 left-10 text-3xl opacity-40 animate-swing">🎄</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-40 animate-float" style={{ animationDelay: '-2s' }}>🎁</div>
      <div className="absolute top-1/3 right-20 text-2xl opacity-30 animate-twinkle">❄️</div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Questions <span className="text-christmas-gold">Fréquentes</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              🎄 Vous avez des questions? Nous avons les réponses. Si vous ne trouvez pas ce que vous cherchez, 
              contactez notre équipe de support 24/7.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
                duration={500}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="christmas-border rounded-xl px-6 data-[state=open]:ring-1 data-[state=open]:ring-christmas-gold/50 transition-all bg-card/30"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:text-christmas-gold transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 font-body">
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
