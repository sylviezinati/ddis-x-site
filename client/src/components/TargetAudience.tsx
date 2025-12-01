import { Card } from "@/components/ui/card";
import { Check, X, Sparkles } from "lucide-react";

export default function TargetAudience() {
  const forWho = [
    "Instituts de beauté premium & spas haut de gamme",
    "Esthéticiennes établies avec base de clientes fidèles",
    "Dirigeantes exigeantes qui veulent la performance sans surcharge",
  ];

  const notFor = [
    "Les instituts qui viennent d'ouvrir (moins de 2 ans d'activité)",
    "Celles qui cherchent juste un outil de réservation",
    "Les structures qui ne veulent pas investir dans l'infrastructure",
  ];

  const designedFor = [
    "Instituts établis avec minimum 100-150 clientes actives",
    "Dirigeantes qui veulent systématiser sans perdre l'humain",
    "Structures prêtes à investir dans une transformation durable",
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(217, 183, 166, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            Pour qui est ce système ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ce système d'infrastructure IA est conçu pour celles qui veulent
            <br />
            <span className="text-foreground font-medium">plus de récurrence, plus de valeur, moins de surcharge.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Pour qui */}
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 card-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-normal">Pour qui</h3>
            </div>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Pas pour */}
          <Card className="p-8 bg-card/50 backdrop-blur border-destructive/20 card-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-normal">Pas pour</h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Conçu pour */}
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 card-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-normal">Conçu pour</h3>
            </div>
            <ul className="space-y-4">
              {designedFor.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
