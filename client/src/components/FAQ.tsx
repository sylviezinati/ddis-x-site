import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Est-ce adapté à mon institut ?",
      answer: "Si vous avez un institut établi (2+ ans), une base de clientes fidèles (100-150 clientes actives minimum), et que vous voulez augmenter la récurrence sans augmenter votre charge de travail : oui. Le diagnostic gratuit nous permettra de confirmer.",
    },
    {
      question: "Dois-je être à l'aise avec la technologie ?",
      answer: "Non. Le système est fait pour fonctionner en arrière-plan. Vous gardez votre interface habituelle (planning, téléphone). Nous gérons toute la partie technique. Vous n'avez qu'à suivre les recommandations.",
    },
    {
      question: "Est-ce que je garde la main sur ma base cliente ?",
      answer: "Absolument. Vos clientes restent vos clientes. Vous gardez 100% du contrôle sur les données, les messages, et la relation. L'IA est un outil au service de votre vision, pas l'inverse.",
    },
    {
      question: "Mes clientes vont-elles voir que c'est automatisé ?",
      answer: "Non. Le système est invisible. Les messages restent chaleureux, personnalisés, et reflètent votre ton. L'IA analyse et orchestre, mais l'émotion reste humaine.",
    },
    {
      question: "Combien ça coûte ?",
      answer: "L'investissement dépend de la taille de votre structure, de votre base cliente, et des modules dont vous avez réellement besoin. Nous ne déployons que ce qui génère un ROI mesurable. La plupart de nos clientes observent un retour sur investissement en moins de 60 jours. Le diagnostic gratuit nous permettra d'établir un devis personnalisé.",
    },

    {
      question: "Combien de temps avant de voir des résultats ?",
      answer: "Certains effets sont quasi-immédiats (dès 10-15 jours) : amélioration du taux de réponse, meilleure fluidité dans la gestion. Les résultats structurels complets (récurrence, panier moyen, optimisation du planning) se déploient pleinement à partir de 30-45 jours.",
    },
  ];

  return (
    <section id="faq-section" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tout ce que vous devez savoir sur notre système
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="faq-item"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-normal text-foreground hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
