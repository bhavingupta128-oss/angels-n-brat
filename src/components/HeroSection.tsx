import { useEffect, useState } from 'react';
import storefront from '@/assets/nowhere-storefront.png.asset.json';
import terrace from '@/assets/nowhere-terrace.png.asset.json';
import liveMusic from '@/assets/nowhere-livemusic.png.asset.json';
import barrels from '@/assets/nowhere-barrels.png.asset.json';

const heroImages = [terrace.url, storefront.url, liveMusic.url, barrels.url];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16">
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Nowhere Terrace BrewPub Cafe"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/80 via-wood-dark/65 to-wood-dark/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <p
            className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-amber-light mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            Terrace · BrewPub · Cafe — DLF Phase 4, Gurugram
          </p>
          <h1
            className="font-display text-6xl sm:text-7xl lg:text-8xl text-sand leading-[0.95] mb-6 opacity-0 animate-fade-up uppercase"
            style={{ animationDelay: '250ms' }}
          >
            Live in the<br />
            middle of <span className="text-amber">nowhere</span>
          </h1>
          <p
            className="font-body text-lg text-sand/85 max-w-lg mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Craft brews on tap, wood-fired pizzas, live music nights and a buzzing
            open terrace — the favourite hangout in DLF Cross Point.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '550ms' }}
          >
            <a
              href="#menu"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-primary/20"
            >
              View the Menu
            </a>
            <a
              href="#reserve"
              className="border-2 border-sand/40 text-sand px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-sand/10 active:scale-[0.97] transition-all duration-150"
            >
              Reserve a Table
            </a>
            <a
              href="https://www.zomato.com/ncr/nowhere-terrace-brewpub-cafe-dlf-phase-4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[hsl(0,85%,45%)] text-white px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-150 shadow-lg"
            >
              🛵 Order on Zomato
            </a>
            <a
              href="https://www.instagram.com/nowherebrewpub.ggn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-150 shadow-lg"
            >
              📸 Follow on Instagram
            </a>
          </div>

          <div
            className="flex gap-8 mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '700ms' }}
          >
            {[
              { label: 'Google', value: '★ 4.2 / 2.6k+' },
              { label: 'Zomato', value: '★ 4.3 / 5.6k+' },
              { label: 'Hours', value: '12 PM – 1 AM' },
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