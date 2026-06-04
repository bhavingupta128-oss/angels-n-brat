import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';
import liveMusic from '@/assets/nowhere-livemusic.png.asset.json';
import whisky from '@/assets/nowhere-whisky-donor.png.asset.json';

const testimonials = [
  {
    name: 'Arman Ali',
    quote:
      'The ambience, crowd, service, food quality and the beer is quite a delight.',
  },
  {
    name: 'Manish Parashar',
    quote: 'Tasty mango beer with a wide selection of beer samplers.',
  },
  {
    name: 'Martijn Leenders',
    quote:
      'Loved the live music and all-Indian atmosphere, great beers and good food.',
  },
];

const ratings = [
  { source: 'Google', score: '4.2', count: '2,694 reviews' },
  { source: 'Zomato', score: '4.3', count: '5,681 votes' },
  { source: 'Swiggy', score: '4.2', count: '2,677 reviews' },
  { source: 'Facebook', score: '4.8', count: '119 votes' },
];

export default function ReviewsSection() {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="relative section-padding-lg overflow-hidden">
      {/* Decorative background images */}
      <div className="absolute inset-0 -z-10">
        <img
          src={liveMusic.url}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            ⸺ Word on the Street ⸺
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground uppercase">
            What Our Guests Say
          </h2>
        </div>

        {/* Rating chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {ratings.map((r) => (
            <div
              key={r.source}
              className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/50 transition-colors"
            >
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {r.source}
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="font-display text-3xl text-foreground">{r.score}</span>
                <span className="font-body text-sm text-muted-foreground">/ 5</span>
              </div>
              <p className="font-body text-xs text-muted-foreground">{r.count}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 sm:p-7 relative hover:shadow-xl hover:shadow-primary/5 transition-shadow"
              style={{ transform: i === 1 ? 'translateY(-12px)' : undefined }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <blockquote className="font-body text-sm sm:text-base text-foreground leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <figcaption className="font-display text-lg text-foreground uppercase tracking-wide">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Tiny photo strip */}
        <div className="mt-14 flex items-center justify-center gap-3 opacity-80">
          <img
            src={whisky.url}
            alt="Whisky Donor barrel art at Nowhere"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-2 border-primary/40 shadow-lg"
            loading="lazy"
          />
          <p className="font-display text-2xl text-muted-foreground italic max-w-xs">
            "Do boond zindagi ki" — straight from the barrels of Nowhere.
          </p>
        </div>
      </div>
    </section>
  );
}