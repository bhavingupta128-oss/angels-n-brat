import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Play Area', href: '#play-area' },
  { label: 'Reserve', href: '#reserve' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl font-bold text-foreground tracking-tight">
          Angels <span className="text-primary">n</span> Brats
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="tel:09321085516"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-150"
        >
          <Phone className="w-4 h-4" />
          Call Us
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:09321085516"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold w-fit"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>
      )}
    </nav>
  );
}