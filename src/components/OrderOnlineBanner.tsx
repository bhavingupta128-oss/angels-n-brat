import { ExternalLink } from 'lucide-react';

export default function OrderOnlineBanner() {
  return (
    <section className="section-padding bg-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          Order Online
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Craving Our Food? Order Now!
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Get your favourite dishes delivered to your doorstep via Zomato or Swiggy.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="http://zoma.to/r/20204934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(0,85%,45%)] text-white px-8 py-3.5 rounded-xl font-body font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-150 shadow-lg"
          >
            🍽️ Order on Zomato
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="http://zoma.to/r/20204934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(25,95%,50%)] text-white px-8 py-3.5 rounded-xl font-body font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-150 shadow-lg"
          >
            🛵 Order on Swiggy
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
