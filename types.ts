export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Modern Science' | 'Ayurvedic Wisdom' | 'Combined Care';
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  text: string;
  date: string;
}

export interface ClinicLocation {
  id: string;
  name: string;
  type: 'online' | 'offline';
  city?: string;
  address?: string;
  slots: string[];
}
