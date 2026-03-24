CREATE TABLE public.play_area_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  booking_date date NOT NULL,
  booking_time time NOT NULL,
  duration_hours integer NOT NULL DEFAULT 1,
  num_kids integer NOT NULL DEFAULT 1,
  kid_ages text,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.play_area_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert play area bookings"
  ON public.play_area_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);