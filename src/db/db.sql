CREATE TABLE Clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255)
);

CREATE TABLE Admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL
);

CREATE TABLE ClientAddresses (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zip_code VARCHAR(255) NOT NULL,
  FOREIGN KEY (client_id) REFERENCES Clients(id)
);

CREATE TABLE Events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  image VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);

CREATE TABLE Sales (
  id SERIAL PRIMARY KEY,
  total DECIMAL(10,2) NOT NULL,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  client_id INTEGER,
  FOREIGN KEY (client_id) REFERENCES Clients(id)
);

CREATE TABLE Tickets (
  id SERIAL PRIMARY KEY,
  event_id INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  type VARCHAR(255) NOT NULL,
  max_quantity INTEGER NOT NULL,
  sale_id INTEGER,
  client_id INTEGER,
  code VARCHAR(255) NOT NULL,
  FOREIGN KEY (event_id) REFERENCES Events(id),
  FOREIGN KEY (sale_id) REFERENCES Sales(id),
  FOREIGN KEY (client_id) REFERENCES Clients(id)
);

CREATE TABLE TicketSales (
  sale_id INTEGER NOT NULL,
  ticket_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  PRIMARY KEY (sale_id, ticket_id),
  FOREIGN KEY (sale_id) REFERENCES Sales(id),
  FOREIGN KEY (ticket_id) REFERENCES Tickets(id)
);

CREATE TABLE Transactions (
  id SERIAL PRIMARY KEY,
  sale_id INTEGER NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  date DATE NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  FOREIGN KEY (sale_id) REFERENCES Sales(id)
);

CREATE TABLE ClientTickets (
	ID SERIAL PRIMARY KEY,
	client_id_fk INTEGER,
	ticket_id_fk INTEGER NOT NULL,
	transaction_id_fk INTEGER NOT NULL,
	code VARCHAR ( 255 ) NOT NULL,
	used BOOLEAN NOT NULL DEFAULT FALSE,
	FOREIGN KEY ( client_id_fk ) REFERENCES Clients ( ID ),
	FOREIGN KEY ( ticket_id_fk ) REFERENCES Tickets ( ID ),
FOREIGN KEY ( transaction_id_fk ) REFERENCES Transactions ( ID )
);

-- http://localhost:3000/success?collection_id=1312570898&collection_status=approved&payment_id=1312570898&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=8753790689&preference_id=203354989-306f4727-6ef3-46cc-9af0-83a7572f4294&site_id=MLA&processing_mode=aggregator&merchant_account_id=null
