import { Card } from "@/components/ui/card";
import { Brain, Zap, TrendingUp, Users } from "lucide-react";

export default function FourPillars() {
  const pillars = [
    {
      icon: Brain,
      title: "Votre cerveau marketing 24/7",
      description: "L'IA analyse les comportements, anticipe les besoins, et orchestre chaque interaction sans que vous leviez le petit doigt.",
    },
    {
      icon: Zap,
      title: "Zéro gestion manuelle",
      description: "Messages personnalisés, relances intelligentes, optimisation du planning : tout se déclenche automatiquement au bon moment.",
    },
    {
      icon: TrendingUp,
      title: "Vous progressez même en dormant",
      description: "Le système apprend de chaque interaction et s'améliore continuellement pour maximiser rétention et valeur cliente.",
    },
    {
      icon: Users,
      title: "Votre copilote stratégique",
      description: "Suivi personnalisé, rapports de performance, ajustements : nous restons à vos côtés pour garantir les résultats.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(217, 183, 166, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            Les 4 piliers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une infrastructure complète pour transformer votre institut
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-primary/20 card-glow hover:border-primary/40 transition-all duration-300 group"
              >
                {/* Icône circulaire avec effet 3D */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-md" />
                    <Icon className="w-8 h-8 text-primary relative z-10" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-normal mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
