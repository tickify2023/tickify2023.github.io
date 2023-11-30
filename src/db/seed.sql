-- Seed data for Events table
INSERT INTO Events (name, description, date, image, artist, location)
VALUES
  ('Summer Music Festival', 'Join us for a weekend of live music and fun!', '2023-06-30', 'https://example.com/summer-festival.jpg', 'Various Artists', 'Central Park'),
  ('Rock Concert', 'Rock out with some of the greatest bands of all time!', '2023-08-15', 'https://example.com/rock-concert.jpg', 'AC/DC, Guns N'' Roses, Metallica', 'Madison Square Garden'),
  ('Broadway Show', 'Experience the magic of Broadway!', '2023-07-10', 'https://example.com/broadway.jpg', 'Hamilton: An American Musical', 'Richard Rodgers Theatre');

-- Seed data for Tickets table
-- Each event has three ticket types: General Admission, VIP, and Premium
-- Each ticket type has a different price and max quantity
INSERT INTO Tickets (event_id, price, type, max_quantity, code)
VALUES
  -- Tickets for Summer Music Festival
  (1, 50.00, 'General Admission', 1000, 'SMF-GA-2023'),
  (1, 150.00, 'VIP', 200, 'SMF-VIP-2023'),
  (1, 250.00, 'Premium', 50, 'SMF-PRE-2023'),

  -- Tickets for Rock Concert
  (2, 75.00, 'General Admission', 2000, 'RC-GA-2023'),
  (2, 200.00, 'VIP', 300, 'RC-VIP-2023'),
  (2, 350.00, 'Premium', 75, 'RC-PRE-2023'),

  -- Tickets for Broadway Show
  (3, 100.00, 'General Admission', 500, 'BS-GA-2023'),
  (3, 250.00, 'VIP', 100, 'BS-VIP-2023'),
  (3, 400.00, 'Premium', 25, 'BS-PRE-2023');


-- Add event 3
INSERT INTO Events (name, description, date, image, artist, location)
VALUES ('Concert in the Park', 'Come enjoy a free concert in the park!', '2023-05-15', 'https://example.com/images/concert.jpg', 'The Park Band', 'Central Park');

-- Add tickets for event 3
INSERT INTO Tickets (event_id, price, type, max_quantity, code)
VALUES (3, 25.00, 'General Admission', 500, 'GA001'),
       (3, 50.00, 'VIP', 50, 'VIP001');

-- Add event 4
INSERT INTO Events (name, description, date, image, artist, location)
VALUES ('Comedy Night', 'Get ready for a night of laughs with top comedians!', '2023-06-30', 'https://example.com/images/comedy.jpg', 'The Comedy Store', 'The Comedy Store');

-- Add tickets for event 4
INSERT INTO Tickets (event_id, price, type, max_quantity, code)
VALUES (4, 30.00, 'General Admission', 300, 'GA001'),
       (4, 60.00, 'VIP', 30, 'VIP001');
