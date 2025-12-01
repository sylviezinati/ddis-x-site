import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Clock, MessageCircle, Calendar } from "lucide-react";
import { useEffect } from "react";

export default function ProblemSolution() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const bubbles = document.querySelectorAll('.bubble-benefit');
    bubbles.forEach((bubble) => observer.observe(bubble));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* Section 4 - Réalité */}
      <section id="section-realite">
        <div className="band">
          <div className="dynamic-card" style={{borderRadius: '32px', paddingTop: '80px', paddingRight: '120px', paddingBottom: '80px', paddingLeft: '120px'}}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight relative z-10">
              Vous faites tourner le business.<br />
              Mais rien ne tourne sans vous.
            </h2>
            
            <div className="space-y-6 mt-12 relative z-10">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Messages, relances, organisation, planning, acquisition…<br />
                Si vous arrêtez, tout s'arrête.
              </p>
              
              <p className="text-foreground text-xl md:text-2xl leading-relaxed mt-8">
                Et si votre institut continuait à générer rendez-vous, ventes et récurrence…<br />
                <strong className="font-semibold">même quand vous êtes en cabine ?</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Futur */}
      <section id="section-futur" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-16">
              Imaginez : dans 90 jours...
            </h2>
            
            {/* Bulles en quinconce */}
            <div className="bubbles-container">
              {/* Bulle 1 */}
              <div className="bubble-benefit" style={{ animationDelay: '0s' }}>
                <div className="icon-circle mx-auto mb-4">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <p className="text-lg md:text-xl">Les clientes reviennent spontanément.</p>
              </div>
              
              {/* Bulle 2 */}
              <div className="bubble-benefit" style={{ animationDelay: '1s' }}>
                <div className="icon-circle mx-auto mb-4">
                  <Calendar className="w-7 h-7" />
                </div>
                <p className="text-lg md:text-xl">Votre planning devient prévisible.</p>
              </div>
              
              {/* Bulle 3 */}
              <div className="bubble-benefit" style={{ animationDelay: '2s' }}>
                <div className="icon-circle mx-auto mb-4">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <p className="text-lg md:text-xl">Le panier moyen augmente naturellement.</p>
              </div>
              
              {/* Bulle 4 */}
              <div className="bubble-benefit" style={{ animationDelay: '3s' }}>
                <div className="icon-circle mx-auto mb-4">
                  <Clock className="w-7 h-7" />
                </div>
                <p className="text-lg md:text-xl">Vous retrouvez du temps pour ce qui compte.</p>
              </div>
            </div>
            
            {/* Texte central */}
            <div className="mt-12">
              <p className="central-phrase">
                Votre cliente ne revient pas que pour un soin.<br />
                Elle revient pour ce qu'elle ressent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Coût de l'inaction */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6">
                <AlertCircle className="w-8 h-8 text-primary" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal">
                  Le coût de l'inaction
                </h2>
              </div>
            </div>
            
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20 card-glow">
              <p className="text-xl text-muted-foreground mb-8">
                Chaque mois sans ce système, c'est :
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-lg text-foreground">
                    Des clientes qui ne rebookent pas spontanément
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-lg text-foreground">
                    Des heures creuses que vous devez remplir manuellement
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-lg text-foreground">
                    Des opportunités de vente manquées faute de suivi
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-lg text-foreground">
                    Votre temps dépensé en relances au lieu d'être en cabine
                  </span>
                </li>
              </ul>
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-xl md:text-2xl text-primary font-medium text-center">
                  3 mois d'attente = des milliers d'euros de récurrence perdus.
                </p>
                
                <div className="mt-6 mb-12 text-center">
                  <p className="text-lg leading-relaxed" style={{ opacity: 0.85 }}>
                    Ne pas mettre de système maintenant, c'est laisser de la récurrence et du chiffre sur la table.<br />
                    L'inaction coûte toujours plus cher que l'amélioration.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
