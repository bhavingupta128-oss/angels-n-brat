import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Baby, Utensils, Clock, MapPin } from 'lucide-react';
import foodSpread from '@/assets/food-spread.jpg';

const highlights = [
  { icon: Baby, label: 'Kid-Friendly Café', desc: 'Dedicated play zone for kids' },
  { icon: Utensils, label: 'Global Comfort Food', desc: 'Wide variety of cuisines' },
  { icon: Clock, label: 'Open 12–10 PM', desc: 'Every day of the week' },
  { icon: MapPin, label: 'Good Earth City Centre', desc: 'Sector 50, Gurugram' },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding-lg bg-card">
      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
              More Than a Café — It's a Family Destination
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Located in the heart of Good Earth City Centre, Nowhere Terrace BrewPub Cafe is where great food meets
              a fun, relaxing environment. Our dedicated kids' play area means parents can enjoy their
              meals while children have a great time in a safe, engaging space.
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
              src={foodSpread}
              alt="Delicious food spread at Nowhere Terrace BrewPub Cafe"
              className="rounded-2xl shadow-2xl shadow-warm-brown/10 w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-lg">
              <p className="font-display text-2xl font-bold">50+</p>
              <p className="font-body text-xs opacity-90">Menu Items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}