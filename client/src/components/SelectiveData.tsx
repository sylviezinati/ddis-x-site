import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Clock, Target } from "lucide-react";

export function SelectiveAccompaniment() {
  return (
    <section id="section-accompagnement" className="py-20 md:py-32">
      <div className="band">
        <div className="ddx-dots-card-wide" style={{height: '650px'}}>
          <div className="ddx-dots-content">
            {/* Titre centré */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white">
                Accompagnement sur-mesure
              </h2>
            </div>

            {/* Conteneur copy-wrap centré */}
            <div className="copy-wrap">
              <p className="first-para">
                Chaque infrastructure est conçue et optimisée <span className="emph">individuellement</span>.
              </p>
              <p>
                Pour garantir l'excellence du déploiement, nous travaillons avec un <span className="emph">nombre limité d'instituts</span> simultanément.
              </p>
              <p>
                Si votre profil correspond, nous priorisons les diagnostics prêts à se lancer.
              </p>
            </div>

            {/* CTA centré sous le bloc */}
            <div className="cta-wrapper">
              <a 
                href="https://calendar.app.google/3s1bZYP8pD8tWDcm8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cta-button">
                  Réserver mon diagnostic
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DataValidation() {
  const stats = [
    {
      icon: TrendingUp,
      value: "+20 à 35%",
      label: "d'augmentation du taux de rétention",
    },
    {
      icon: Target,
      value: "+15 à 25%",
      label: "de hausse du panier moyen",
    },
    {
      icon: Clock,
      value: "-40%",
      label: "de temps sur les tâches administratives",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(217, 183, 166, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
              Pourquoi l'IA transforme les instituts de beauté
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20 card-glow mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Selon une étude McKinsey (2024), les entreprises qui intègrent l'IA dans leur relation client observent :
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-border/50 space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Pour les instituts de beauté spécifiquement, les premiers déploiements d'infrastructures IA montrent des résultats dès 30-45 jours.
              </p>
              <p className="text-lg text-primary font-medium">
                Le système que nous déployons capitalise sur ces mécanismes pour transformer votre relation client en moteur de récurrence.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
