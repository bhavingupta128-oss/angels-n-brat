-- Add basic abuse prevention: limit message/name length at DB level
ALTER TABLE public.reservations
  ADD CONSTRAINT reservations_name_length CHECK (char_length(name) <= 100),
  ADD CONSTRAINT reservations_phone_length CHECK (char_length(phone) <= 20),
  ADD CONSTRAINT reservations_notes_length CHECK (char_length(notes) <= 500);

ALTER TABLE public.contact_messages
  ADD CONSTRAINT contact_name_length CHECK (char_length(name) <= 100),
  ADD CONSTRAINT contact_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT contact_message_length CHECK (char_length(message) <= 1000);