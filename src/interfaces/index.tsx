export interface Event {
  id?: number;
  name: string;
  description: string;
  date: Date;
  image: string;
  artist: string;
  location: string;
  tickets?: Ticket[];
  active: boolean;
  fee: number;
}

export interface Ticket {
  id?: number;
  event_id_fk: number;
  price: number;
  type: string;
  max_quantity: number;
}

export interface Sale {
  id: number;
  total: number;
  email: string;
  name: string;
  phone: string;
  client_id_fk?: number;
  status: string;
}

export interface TicketSale {
  id: number;
  sale_id: number;
  ticket_id: number;
  quantity: number;
}

export interface Transaction {
  id: number;
  sale_id_fk: number;
  amount: number;
  date: number;
  payment_method?: string;
  payment_id?: string;
}

export interface ClientTicket {
  id: number;
  client_id_fk?: number;
  ticket_id_fk: number;
  transaction_id_fk: number;
  code: string;
  used: boolean;
  type?: string;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  password?: string;
}

export interface Admin {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface ClientAddress {
  id: number;
  client_id_fk: number;
  street: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface paymentData {
  email: string;
  name: string;
  phone: string;
  fee: string;
  tickets: Array<{
    id: string;
    quantity: string;
    type: string;
    price: string;
  }>;
}

export interface mixedTicket {
  id: number;
  client_id_fk?: number;
  ticket_id_fk: number;
  transaction_id_fk: number;
  code: string;
  used: boolean;
  type: string;
  price: string;
}

export interface Estadistics {
  activeEventsCount: string;
  allEventsCount: string;
  allClientTicketsCount: string;
  allSalesSuccessCount: string;
}
