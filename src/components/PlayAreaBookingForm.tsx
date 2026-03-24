import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Baby, CalendarDays } from 'lucide-react';

export default function PlayAreaBookingForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    booking_date: '',
    booking_time: '',
    duration_hours: '1',
    num_kids: '1',
    kid_ages: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.booking_date || !form.booking_time) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from('play_area_bookings').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        booking_date: form.booking_date,
        booking_time: form.booking_time,
        duration_hours: parseInt(form.duration_hours),
        num_kids: parseInt(form.num_kids),
        kid_ages: form.kid_ages.trim() || null,
        notes: form.notes.trim() || null,
      });
      if (error) throw error;
      toast.success('Play area booking submitted! We\'ll confirm shortly.');
      setForm({ name: '', phone: '', email: '', booking_date: '', booking_time: '', duration_hours: '1', num_kids: '1', kid_ages: '', notes: '' });
    } catch {
      toast.error('Something went wrong. Please call us to book.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow';

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Baby className="w-5 h-5 text-primary" />
        <h3 className="font-display text-xl font-bold text-foreground">Book Play Area</h3>
      </div>
      <p className="font-body text-sm text-muted-foreground mb-4">
        ₹399 + taxes per hour · Socks required · Open till 9:00 PM
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <input className={inputClass} placeholder="Parent's Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
        <input className={inputClass} placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} type="tel" />
      </div>
      <input className={inputClass} placeholder="Email (optional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" maxLength={255} />
      <div className="grid sm:grid-cols-3 gap-4">
        <input className={inputClass} type="date" value={form.booking_date} onChange={(e) => setForm({ ...form, booking_date: e.target.value })} min={new Date().toISOString().split('T')[0]} />
        <input className={inputClass} type="time" value={form.booking_time} onChange={(e) => setForm({ ...form, booking_time: e.target.value })} />
        <select className={inputClass} value={form.duration_hours} onChange={(e) => setForm({ ...form, duration_hours: e.target.value })}>
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>{n} Hour{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <select className={inputClass} value={form.num_kids} onChange={(e) => setForm({ ...form, num_kids: e.target.value })}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} Kid{n > 1 ? 's' : ''}</option>
          ))}
        </select>
        <input className={inputClass} placeholder="Kid's ages (e.g. 3, 5)" value={form.kid_ages} onChange={(e) => setForm({ ...form, kid_ages: e.target.value })} maxLength={100} />
      </div>
      <textarea className={`${inputClass} resize-none`} placeholder="Special requests or notes..." rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} maxLength={500} />
      <button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 flex items-center justify-center gap-2">
        <CalendarDays className="w-4 h-4" />
        {loading ? 'Submitting...' : 'Book Play Area'}
      </button>
    </form>
  );
}
