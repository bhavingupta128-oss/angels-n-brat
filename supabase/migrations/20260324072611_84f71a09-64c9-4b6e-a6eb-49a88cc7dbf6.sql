-- Add select policies for authenticated users (admin)
CREATE POLICY "Authenticated users can view reservations"
  ON public.reservations FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can view play area bookings"
  ON public.play_area_bookings FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can view contact messages"
  ON public.contact_messages FOR SELECT TO authenticated USING (true);

-- Allow authenticated users to update status
CREATE POLICY "Authenticated users can update reservations"
  ON public.reservations FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can update play area bookings"
  ON public.play_area_bookings FOR UPDATE TO authenticated USING (true) WITH CHECK (true);