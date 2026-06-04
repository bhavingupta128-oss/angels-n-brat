import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Beer, Music, Flame, Trees } from 'lucide-react';
import barrels from '@/assets/nowhere-barrels.png.asset.json';

const highlights = [
  { icon: Beer, label: 'Craft Brewpub', desc: 'Mango beer, samplers & more on tap' },
  { icon: Music, label: 'Live Music Nights', desc: 'Indie, rock & Bollywood unplugged' },
  { icon: Flame, label: 'Wood-Fired Kitchen', desc: 'Pizzas, kebabs & global plates' },
  { icon: Trees, label: 'Open Terrace', desc: 'Fireplace, fairy lights, outdoor seating' },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding-lg bg-card">
      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              About Nowhere
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight mb-6 text-balance uppercase">
              A Brewpub Like<br /> No Other in Gurugram
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Tucked inside DLF Cross Point, Nowhere is a wood-clad terrace brewpub
              where barrels line the walls, beer flows fresh from the tap, and live
              bands play under the stars. Come for the food, stay for the vibe —
              it's pure Gurugram nightlife.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-background rounded-xl p-4 border border-border shadow-sm"
                >
                  <h.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="font-body text-sm font-semibold text-foreground">{h.label}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={barrels.url}
              alt="Wooden barrels lining the wall at Nowhere Terrace BrewPub Cafe"
              className="rounded-2xl shadow-2xl shadow-black/40 w-full object-cover aspect-[4/5] border border-border"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-xl">
              <p className="font-display text-3xl">★ 4.3</p>
              <p className="font-body text-xs opacity-90">11,000+ ratings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}