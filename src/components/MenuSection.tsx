import { useScrollReveal } from '@/hooks/useScrollReveal';
import { menuData } from '@/lib/menuData';

export default function MenuSection() {
  const ref = useScrollReveal();

  return (
    <section id="menu" className="section-padding-lg">
      <div ref={ref} className="scroll-reveal max-w-5xl mx-auto">
        {/* Classic restaurant-menu header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            ⸺ Our Menu ⸺
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground italic">
            À la Carte
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-12 bg-border" />
            <span className="text-primary text-lg">✦</span>
            <span className="h-px w-12 bg-border" />
          </div>
        </div>

        {/* Parchment-style menu card with all categories */}
        <div className="bg-card rounded-lg border-2 border-border/60 p-6 sm:p-12 shadow-xl shadow-primary/5 relative overflow-hidden">
          {/* corner flourishes */}
          <div className="absolute top-3 left-3 text-2xl text-primary/30">❦</div>
          <div className="absolute top-3 right-3 text-2xl text-primary/30">❦</div>
          <div className="absolute bottom-3 left-3 text-2xl text-primary/30">❦</div>
          <div className="absolute bottom-3 right-3 text-2xl text-primary/30">❦</div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {menuData.map((category) => (
              <div key={category.title} className="break-inside-avoid">
                {/* Category heading */}
                <div className="text-center mb-5">
                  <div className="text-2xl mb-1">{category.icon}</div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-wide uppercase">
                    {category.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="h-px w-8 bg-primary/40" />
                    <span className="text-primary/60 text-xs">◆</span>
                    <span className="h-px w-8 bg-primary/40" />
                  </div>
                </div>

                {category.note && (
                  <p className="font-body text-xs italic text-primary text-center mb-4">
                    {category.note}
                  </p>
                )}

                {/* Dotted-leader item rows */}
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline gap-2 group"
                    >
                      {item.tag && (
                        <span
                          className={`w-2.5 h-2.5 rounded-full border-2 flex-shrink-0 self-center ${
                            item.tag === 'veg'
                              ? 'border-accent bg-accent/30'
                              : 'border-destructive bg-destructive/30'
                          }`}
                        />
                      )}
                      <span className="font-body text-sm text-foreground">
                        {item.name}
                      </span>
                      <span
                        className="flex-1 border-b border-dotted border-border/70 mb-1 group-hover:border-primary/50 transition-colors"
                        aria-hidden="true"
                      />
                      <span className="font-display text-sm font-semibold text-primary tabular-nums">
                        ₹{item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 pt-6 border-t border-dashed border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs font-body text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-accent bg-accent/30" />
              Vegetarian
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-destructive bg-destructive/30" />
              Non-Vegetarian
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}