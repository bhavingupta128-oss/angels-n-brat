import heroCafe from '@/assets/hero-cafe.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16">
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="Angels n Brats Café interior with play area"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-warm-brown/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <p
            className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-sand mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            Family Café & Play Zone • Gurugram
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-sand leading-[1.05] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '250ms' }}
          >
            Where Food Meets<br />
            <span className="text-terracotta-light">Family Fun</span>
          </h1>
          <p
            className="font-body text-lg text-sand/85 max-w-lg mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Great comfort food, a vibrant kids' play area, and the warmest
            hospitality — all under one roof at Good Earth City Centre.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '550ms' }}
          >
            <a
              href="#menu"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-primary/20"
            >
              Explore Menu
            </a>
            <a
              href="#reserve"
              className="border-2 border-sand/40 text-sand px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-sand/10 active:scale-[0.97] transition-all duration-150"
            >
              Reserve a Table
            </a>
          </div>

          <div
            className="flex gap-8 mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '700ms' }}
          >
            {[
              { label: 'Open Daily', value: '12 – 10 PM' },
              { label: 'Play Area', value: 'Till 9 PM' },
              { label: 'Play Charges', value: '₹399/hr' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-body text-xs uppercase tracking-wider text-sand/60 mb-1">{s.label}</p>
                <p className="font-body text-sm font-semibold text-sand">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}