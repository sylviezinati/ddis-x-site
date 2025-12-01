import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ConcreteChange() {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-12 text-center">
            Ce qui change concrètement
          </h2>

          <div className="space-y-8 mb-12">
            <div className="flex gap-4 items-start group">
              <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:translate-x-2 transition-transform duration-300" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Vos clientes sentent une attention continue,
                <br />
                <span className="text-muted-foreground">même quand vous êtes en cabine.</span>
              </p>
            </div>

            <div className="flex gap-4 items-start group">
              <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:translate-x-2 transition-transform duration-300" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Votre planning s'optimise naturellement,
                <br />
                <span className="text-muted-foreground">sans que vous ayez à courir après les rendez-vous.</span>
              </p>
            </div>

            <div className="flex gap-4 items-start group">
              <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:translate-x-2 transition-transform duration-300" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Chaque cliente vit un parcours adapté à elle :
                <br />
                <span className="text-muted-foreground">le bon message, la bonne proposition, au bon moment.</span>
              </p>
            </div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl border border-primary/20">
            <p className="text-xl md:text-2xl text-foreground mb-2">
              Tout fonctionne en arrière-plan.
            </p>
            <p className="text-lg text-muted-foreground">
              Vous gardez le contrôle. Vos clientes sentent l'attention.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <a 
              href="https://calendar.app.google/3s1bZYP8pD8tWDcm8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="px-8 py-6 text-base md:text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 border border-primary/50"
              >
                Réserver un diagnostic
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
