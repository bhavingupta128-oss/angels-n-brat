import { useScrollReveal } from '@/hooks/useScrollReveal';
import playArea from '@/assets/play-area.jpg';
import { Clock, IndianRupee, Footprints } from 'lucide-react';
import PlayAreaBookingForm from './PlayAreaBookingForm';

export default function PlayAreaSection() {
  const ref = useScrollReveal();

  return (
    <section id="play-area" className="section-padding-lg bg-card">
      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={playArea}
              alt="Kids playing in the Nowhere Terrace BrewPub Cafe play area"
              className="rounded-2xl shadow-2xl shadow-warm-brown/10 w-full object-cover aspect-[16/10]"
              loading="lazy"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Kids Play Zone
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
              Let the Kids Play While You Dine
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our dedicated, safe play area keeps your little ones entertained with slides,
              ball pits, and more — so you can enjoy your meal in peace.
            </p>

            <div className="space-y-4">
              {[
                { icon: Clock, label: 'Play Area Hours', value: 'Open till 9:00 PM' },
                { icon: IndianRupee, label: 'Charges', value: '₹399 + taxes per hour' },
                { icon: Footprints, label: 'Note', value: 'Socks required for entry' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border"
                >
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="font-body text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <PlayAreaBookingForm />
        </div>
      </div>
    </section>
  );
}