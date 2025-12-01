import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(217, 183, 166, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Effet de glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 blur-3xl rounded-full" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            Prête à transformer votre institut en système récurrent ?
          </h2>
          
          <div className="flex flex-col items-center gap-6 mb-12">
            {/* CTA Principal - Gradient */}
            <a 
              href="https://calendar.app.google/3s1bZYP8pD8tWDcm8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base md:text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 border border-primary/50"
              >
                Réserver mon diagnostic gratuit
              </Button>
            </a>

            {/* Texte sous le CTA */}
            <div className="text-center space-y-1">
              <p className="text-sm md:text-base text-foreground/80">
                Le diagnostic est gratuit. La transformation est garantie.
              </p>
              <p className="text-sm md:text-base text-primary/90">
                L'accompagnement est sélectif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo et description */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-normal text-primary mb-4">DDis-X</h3>
              <p className="text-muted-foreground">
                Infrastructure IA invisible pour instituts de beauté premium
              </p>
            </div>

            {/* Liens */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-medium text-foreground mb-4">Contact</h4>
              <a 
                href="https://calendar.app.google/3s1bZYP8pD8tWDcm8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block mb-2"
              >
                Réserver un diagnostic
              </a>
            </div>

            {/* Mentions légales */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-medium text-foreground mb-4">Légal</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Mentions légales
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Politique de confidentialité
              </p>
              <p className="text-sm text-muted-foreground">
                CGV
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DDis-X. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
