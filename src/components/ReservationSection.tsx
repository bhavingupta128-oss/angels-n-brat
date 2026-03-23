import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { CalendarDays } from 'lucide-react';

export default function ReservationSection() {
  const ref = useScrollReveal();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from('reservations').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        reservation_date: form.date,
        reservation_time: form.time,
        guests: parseInt(form.guests),
        notes: form.notes.trim() || null,
      });
      if (error) throw error;
      toast.success('Reservation submitted! We\'ll confirm shortly.');
      setForm({ name: '', phone: '', email: '', date: '', time: '', guests: '2', notes: '' });
    } catch {
      toast.error('Something went wrong. Please call us to reserve.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow';

  return (
    <section id="reserve" className="section-padding-lg">
      <div ref={ref} className="scroll-reveal max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Reserve a Table
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Book Your Visit
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto">
            Reserve your table and we'll have everything ready for your family.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className={inputClass}
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <input
              className={inputClass}
              placeholder="Phone Number *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={15}
              type="tel"
            />
          </div>
          <input
            className={inputClass}
            placeholder="Email (optional)"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            maxLength={255}
          />
          <div className="grid sm:grid-cols-3 gap-4">
            <input
              className={inputClass}
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
            />
            <input
              className={inputClass}
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
            <select
              className={inputClass}
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                <option key={n} value={n}>
                  {n} Guest{n > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <textarea
            className={`${inputClass} resize-none`}
            placeholder="Special requests or notes..."
            rows={3}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            maxLength={500}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            <CalendarDays className="w-4 h-4" />
            {loading ? 'Submitting...' : 'Reserve Table'}
          </button>
        </form>
      </div>
    </section>
  );
}