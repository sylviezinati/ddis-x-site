import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay grille subtile (points) */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(217, 183, 166, 0.15) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Contenu principal */}
      <div className="container relative z-10 text-center px-6 py-20">
        {/* Badge supérieur */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Infrastructure IA invisible — pour instituts beauté premium
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-6 animate-fade-in-up text-primary/90">
          DDis-X
        </h1>

        {/* Sous-titre avec effet de dégradé */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4 animate-fade-in-up animation-delay-200">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Votre cliente se sent unique.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Votre institut devient inoubliable.
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
          Votre cliente se sent attendue avant de venir, privilégiée pendant, considérée après.
          <br />
          Et vous, vous restez en cabine.
          <br />
          <span className="text-foreground font-medium">
            Nous automatisons la relation. Vous cultivez l'émotion.
          </span>
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          {/* CTA Principal - Outline animé */}
          <a 
            href="https://calendar.app.google/3s1bZYP8pD8tWDcm8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-spin-slow" />
            <Button 
              variant="outline" 
              size="lg"
              className="relative px-8 py-6 text-base md:text-lg border-2 border-primary bg-transparent text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            >
              ◆ Réserver un diagnostic privé
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce cursor-pointer"
          aria-label="Défiler vers le bas"
        >
          <span className="text-sm">En savoir +</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Effet de glow en bas */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-primary/10 blur-3xl rounded-full" />
    </section>
  );
}
