interface EventDataTypes {
  id: string;
  qr_code: "string";
  tickets: {
    id: string;
    price: number;
    lowest_price: number;
    highest_price: number;
    title: string;
    quantity: number;
    event: string;
    owner: string;
  }[];
  paid_tickets: {
    price: number;
    owner: string;
    event_name: string;
    title: string;
    ticket: string;
    user: string;
    event_admin: string;
    used: boolean;
    quantity: number;
    date: string;
    start_time: string;
    end_time: string;
    facebook: string;
    id: string;
    qr_code: string;
  }[];
  lowest_price: number;
  highest_price: number;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  participants: number;
  start_time: string;
  end_time: string;
  liked: boolean;
  featured: boolean;
  website: string;
  owner: string;
  organizer: string;
  total_ticket_count: number;
  total_sold_tickets: number;
}
