// Type definitions for the portfolio
// Updated: All interfaces ready for use

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  techStack?: string[]; // Technologies used in the project
  image: string;
  images?: string[]; // gallery images
  link?: string;
  github?: string;
  problem?: string;
  approach?: string;
  result?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

