import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const ref = useScrollReveal();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      toast.success('Message sent! We\'ll get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try calling us.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow';

  return (
    <section id="contact" className="section-padding-lg bg-card">
      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Visit Us or Drop a Message
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: 'Location',
                text: 'Shop No. 227, 2nd Floor, Good Earth City Centre, Nirvana Country, Sector 50, Gurugram, Haryana',
              },
              { icon: Phone, title: 'Phone', text: '093210 85516' },
              { icon: Clock, title: 'Hours', text: '12:00 PM – 10:00 PM (Play Area till 9 PM)' },
              {
                icon: () => (
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
                title: 'Instagram',
                text: '@nowherebrewpub.ggn',
                href: 'https://www.instagram.com/nowherebrewpub.ggn/',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border"
              >
                <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-primary hover:underline mt-1 inline-block"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-muted-foreground mt-1">{item.text}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0!2d77.04!3d28.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzM2LjAiTiA3N8KwMDInMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nowhere Terrace BrewPub Cafe Location"
              />
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-6 sm:p-8 shadow-sm space-y-4 h-fit">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Send Us a Message</h3>
            <input
              className={inputClass}
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <input
              className={inputClass}
              placeholder="Email Address *"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
            <textarea
              className={`${inputClass} resize-none`}
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}