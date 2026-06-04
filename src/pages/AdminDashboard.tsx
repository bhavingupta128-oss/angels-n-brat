import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { LogOut, CalendarDays, Baby, MessageSquare, RefreshCw } from 'lucide-react';

type Tab = 'reservations' | 'play-area' | 'messages';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('reservations');
  const [reservations, setReservations] = useState<any[]>([]);
  const [playBookings, setPlayBookings] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate('/admin/login');
    });
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [r, p, m] = await Promise.all([
      supabase.from('reservations').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('play_area_bookings').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('contact_messages').select('*').order('created_at', { ascending: false }).limit(100),
    ]);
    setReservations(r.data || []);
    setPlayBookings(p.data || []);
    setMessages(m.data || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const updateStatus = async (table: 'reservations' | 'play_area_bookings', id: string, status: string) => {
    const { error } = await supabase.from(table).update({ status }).eq('id', id);
    if (error) { toast.error('Update failed'); return; }
    toast.success('Status updated');
    fetchData();
  };

  const statusBadge = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colors[status] || 'bg-muted text-muted-foreground'}`}>
        {status}
      </span>
    );
  };

  const tabs: { key: Tab; label: string; icon: typeof CalendarDays; count: number }[] = [
    { key: 'reservations', label: 'Table Reservations', icon: CalendarDays, count: reservations.length },
    { key: 'play-area', label: 'Play Area Bookings', icon: Baby, count: playBookings.length },
    { key: 'messages', label: 'Messages', icon: MessageSquare, count: messages.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-display text-xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="font-body text-xs text-muted-foreground">Nowhere Terrace BrewPub Cafe</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={fetchData} className="p-2 rounded-lg hover:bg-muted transition" title="Refresh">
            <RefreshCw className={`w-4 h-4 text-muted-foreground ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button onClick={handleLogout} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted font-body text-xs font-medium text-muted-foreground hover:text-foreground transition">
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm font-medium transition whitespace-nowrap ${
                tab === t.key ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
              <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                tab === t.key ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>{t.count}</span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12 font-body text-muted-foreground">Loading...</div>
        ) : (
          <>
            {tab === 'reservations' && (
              <div className="space-y-3">
                {reservations.length === 0 ? (
                  <p className="text-center py-12 font-body text-muted-foreground">No reservations yet</p>
                ) : reservations.map((r) => (
                  <div key={r.id} className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-body text-sm font-semibold text-foreground">{r.name}</p>
                        {statusBadge(r.status)}
                      </div>
                      <p className="font-body text-xs text-muted-foreground">
                        📅 {r.reservation_date} at {r.reservation_time} · 👥 {r.guests} guests · 📞 {r.phone}
                        {r.email && ` · ✉️ ${r.email}`}
                      </p>
                      {r.notes && <p className="font-body text-xs text-muted-foreground mt-1">💬 {r.notes}</p>}
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      {r.status !== 'confirmed' && (
                        <button onClick={() => updateStatus('reservations', r.id, 'confirmed')} className="px-3 py-1.5 rounded-lg bg-green-100 text-green-800 font-body text-xs font-medium hover:bg-green-200 transition">Confirm</button>
                      )}
                      {r.status !== 'cancelled' && (
                        <button onClick={() => updateStatus('reservations', r.id, 'cancelled')} className="px-3 py-1.5 rounded-lg bg-red-100 text-red-800 font-body text-xs font-medium hover:bg-red-200 transition">Cancel</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === 'play-area' && (
              <div className="space-y-3">
                {playBookings.length === 0 ? (
                  <p className="text-center py-12 font-body text-muted-foreground">No play area bookings yet</p>
                ) : playBookings.map((b) => (
                  <div key={b.id} className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-body text-sm font-semibold text-foreground">{b.name}</p>
                        {statusBadge(b.status)}
                      </div>
                      <p className="font-body text-xs text-muted-foreground">
                        📅 {b.booking_date} at {b.booking_time} · ⏱️ {b.duration_hours}h · 👶 {b.num_kids} kid{b.num_kids > 1 ? 's' : ''} · 📞 {b.phone}
                        {b.kid_ages && ` · Ages: ${b.kid_ages}`}
                      </p>
                      {b.notes && <p className="font-body text-xs text-muted-foreground mt-1">💬 {b.notes}</p>}
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      {b.status !== 'confirmed' && (
                        <button onClick={() => updateStatus('play_area_bookings', b.id, 'confirmed')} className="px-3 py-1.5 rounded-lg bg-green-100 text-green-800 font-body text-xs font-medium hover:bg-green-200 transition">Confirm</button>
                      )}
                      {b.status !== 'cancelled' && (
                        <button onClick={() => updateStatus('play_area_bookings', b.id, 'cancelled')} className="px-3 py-1.5 rounded-lg bg-red-100 text-red-800 font-body text-xs font-medium hover:bg-red-200 transition">Cancel</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === 'messages' && (
              <div className="space-y-3">
                {messages.length === 0 ? (
                  <p className="text-center py-12 font-body text-muted-foreground">No messages yet</p>
                ) : messages.map((m) => (
                  <div key={m.id} className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-body text-sm font-semibold text-foreground">{m.name}</p>
                      <span className="font-body text-xs text-muted-foreground">· {m.email}</span>
                    </div>
                    <p className="font-body text-sm text-foreground">{m.message}</p>
                    <p className="font-body text-xs text-muted-foreground mt-2">{new Date(m.created_at).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
