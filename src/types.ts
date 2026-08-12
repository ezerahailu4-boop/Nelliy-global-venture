export interface RouteStage {
  id: string;
  label: string;
  title: string;
  copy: string;
}

export interface BusinessArea {
  id: string;
  index: string;
  title: string;
  copy: string;
  icon: string;
}

export interface CoreValue {
  id: string;
  title: string;
  copy: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface ProductLine {
  id: string;
  category: "coffee" | "steel" | "lubricants";
  image: string;
  icon: string;
  title: string;
  copy: string;
  specs: { label: string; value: string }[];
  tags: string[];
}

export interface WhyChooseItem {
  id: string;
  icon: string;
  title: string;
  copy: string;
}

export interface CommoditySector {
  id: string;
  icon: string;
  title: string;
  copy: string;
  image: string;
  items: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CertificationItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}
