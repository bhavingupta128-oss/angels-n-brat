import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { menuData } from '@/lib/menuData';

export default function MenuSection() {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(0);

  const category = menuData[activeCategory];

  return (
    <section id="menu" className="section-padding-lg">
      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Our Menu
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Something for Everyone
          </h2>
        </div>

        {/* Category tabs - horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {menuData.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-body text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.97] ${
                i === activeCategory
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="font-display text-2xl font-bold text-foreground">{category.title}</h3>
          </div>

          {category.note && (
            <p className="font-body text-sm text-primary font-medium mb-4 bg-primary/5 px-4 py-2 rounded-lg inline-block">
              👉 {category.note}
            </p>
          )}

          <div className="grid sm:grid-cols-2 gap-3">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors duration-150"
              >
                <div className="flex items-center gap-3">
                  {item.tag && (
                    <span
                      className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                        item.tag === 'veg'
                          ? 'border-accent bg-accent/20'
                          : 'border-destructive bg-destructive/20'
                      }`}
                    />
                  )}
                  <span className="font-body text-sm text-foreground">{item.name}</span>
                </div>
                <span className="font-body text-sm font-semibold text-primary ml-4 flex-shrink-0">
                  ₹{item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}