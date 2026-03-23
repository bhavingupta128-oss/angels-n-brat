import { Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-warm-brown text-sand py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display text-xl font-bold mb-3">
              Angels <span className="text-terracotta-light">n</span> Brats
            </h3>
            <p className="font-body text-sm text-sand/70 leading-relaxed">
              Family café & play zone at Good Earth City Centre, Gurugram.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-3">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Menu', 'Play Area', 'Reserve', 'Contact'].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(' ', '-')}`}
                  className="block font-body text-sm text-sand/70 hover:text-sand transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-3">Contact</h4>
            <p className="font-body text-sm text-sand/70 mb-2">093210 85516</p>
            <p className="font-body text-sm text-sand/70 mb-2">Open 12 PM – 10 PM</p>
            <p className="font-body text-sm text-sand/70">Sector 50, Gurugram</p>
          </div>
        </div>
        <div className="border-t border-sand/15 pt-6 flex items-center justify-center gap-1">
          <p className="font-body text-xs text-sand/50">
            © {new Date().getFullYear()} Angels n Brats Café. Made with
          </p>
          <Heart className="w-3 h-3 text-terracotta-light fill-current" />
        </div>
      </div>
    </footer>
  );
}