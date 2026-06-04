import { Heart, Instagram } from 'lucide-react';
import logo from '@/assets/nowhere-logo.png.asset.json';

export default function FooterSection() {
  return (
    <footer className="bg-wood-dark text-sand py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <img src={logo.url} alt="Nowhere Terrace BrewPub Cafe" className="h-10 w-auto mb-3" />
            <p className="font-body text-sm text-sand/70 leading-relaxed">
              Terrace · BrewPub · Cafe in DLF Phase 4, Gurugram. Craft brews,
              live music & a vibe like no other.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-3">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Menu', 'Reviews', 'Reserve', 'Contact'].map((l) => (
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
            <p className="font-body text-sm text-sand/70 mb-2">092050 50770</p>
            <p className="font-body text-sm text-sand/70 mb-2">Open 12 PM – 1 AM</p>
            <p className="font-body text-sm text-sand/70 mb-3">DLF Phase IV, Gurugram</p>
            <a
              href="https://www.instagram.com/nowherebrewpub.ggn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-sand/80 hover:text-amber-light transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @nowherebrewpub.ggn
            </a>
          </div>
        </div>
        <div className="border-t border-sand/15 pt-6 flex items-center justify-center gap-1">
          <p className="font-body text-xs text-sand/50">
            © {new Date().getFullYear()} Nowhere Terrace BrewPub Cafe. Made with
          </p>
          <Heart className="w-3 h-3 text-amber-light fill-current" />
        </div>
      </div>
    </footer>
  );
}