import { Button } from "@/components/ui/button";
import { Search, Wrench, BarChart3, Shield } from "lucide-react";
import { useEffect } from "react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Diagnostic (30 min)",
      description: "Nous analysons votre institut, votre base cliente, vos objectifs.",
    },
    {
      icon: Wrench,
      number: "2",
      title: "Conception + déploiement de l'infrastructure IA",
      description: "Nous construisons votre écosystème sur-mesure. Done-for-you.",
    },
    {
      icon: BarChart3,
      number: "3",
      title: "Optimisation & monitoring",
      description: "Nous suivons les performances et ajustons en continu.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineSteps = document.querySelectorAll('.timeline-step');
    timelineSteps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="section-timeline" className="py-20 md:py-32 relative">
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Comment ça fonctionne
          </h2>
          <p className="text-xl text-[#C9B2A6] max-w-2xl mx-auto">
            Un processus simple et efficace pour transformer votre institut
          </p>
        </div>

        {/* Timeline verticale */}
        <div className="timeline-container max-w-4xl mx-auto relative">
          {/* Ligne verticale */}
          <div className="timeline-line"></div>

          {/* Étapes */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`timeline-step ${isEven ? 'timeline-left' : 'timeline-right'}`}
              >
                {/* Icône centrale */}
                <div className="timeline-icon-wrapper">
                  <div className="timeline-icon">
                    <Icon className="w-6 h-6 text-[#D9B7A6]" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="timeline-content">
                  <div className="timeline-number">{step.number}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-description">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notre engagement */}
        <div className="engagement-card max-w-4xl mx-auto mt-20">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="engagement-icon">
              <Shield className="w-8 h-8 text-[#D9B7A6]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">
                Notre engagement
              </h3>
              <p className="text-lg text-[#C9B2A6] leading-relaxed mb-4">
                Si après 60 jours de déploiement complet, vous ne constatez pas d'amélioration mesurable de votre récurrence ou de votre panier moyen, nous travaillons gratuitement jusqu'à obtenir les résultats.
              </p>
              <p className="text-lg text-[#E5CDC2] font-medium">
                Nous sommes alignés sur votre réussite, pas sur des promesses.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="https://calendar.app.google/3s1bZYP8pD8tWDcm8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="px-8 py-6 text-base md:text-lg bg-gradient-to-r from-[#D9B7A6] to-[#C9A678] hover:from-[#E5CDC2] hover:to-[#D9B7A6] text-black rounded-full shadow-lg transition-all duration-300 hover:shadow-xl border-0"
            >
              Voir si je suis éligible
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
