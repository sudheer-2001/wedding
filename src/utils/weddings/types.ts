export interface Wedding {
  groom: string; 
  bride: string;
  date: string; 
  displayDate: string;
  city: string; 
  venue: string; 
  address: string;
  mapUrl: string; 
  whatsapp: string;
  story: string[];
  events: { time: string; title: string; note: string }[];
  song: string;
}