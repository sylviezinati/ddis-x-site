export default function Label() {
  return (
    <section className="py-12 border-y border-border/50">
      <div className="container">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="text-lg md:text-xl text-muted-foreground text-center">
            Infrastructure IA invisible — pour instituts beautés
          </p>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
