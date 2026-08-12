import type {
  RouteStage,
  BusinessArea,
  CoreValue,
  Stat,
  ProductLine,
  WhyChooseItem,
  CommoditySector,
  FAQItem,
  CertificationItem,
} from "./types";

/* ---- COMMODITY SECTORS ---- */
export const COMMODITY_SECTORS: CommoditySector[] = [
  {
    id: "coffee",
    icon: "☕",
    title: "Ethiopian Coffee",
    copy: "Premium raw, roasted, and ground coffee — sourced directly from Ethiopia's renowned coffee regions (Sidama, Yirgacheffe, Jimma, Guji), processed to strict international quality standards.",
    image: "/coffee.png",
    items: ["Raw / Green Coffee", "Roasted Coffee Beans", "Ground Coffee Packs"],
  },
  {
    id: "steel",
    icon: "🔩",
    title: "Steel & Metals",
    copy: "Structural steel, high-grade reinforcement bars, metal sheets, coils, and industrial wire products for construction, infrastructure, and manufacturing projects.",
    image: "/steel.png",
    items: ["Deformed Rebar (Grade 60/75)", "Structural Beams & Channels", "Galvanized Sheets & Coils"],
  },
  {
    id: "lubricants",
    icon: "🛢️",
    title: "Lubricants & Oils",
    copy: "High-performance automotive engine oils, heavy machinery hydraulic fluids, industrial gear oils, and specialized greases built for extreme operating conditions.",
    image: "/lubricants.png",
    items: ["Heavy Duty Engine Oils", "Hydraulic Fluids (ISO 46/68)", "High-Temp Lithium Greases"],
  },
];

/* ---- COFFEE JOURNEY ---- */
export const ROUTE_STAGES: RouteStage[] = [
  { id: "source", label: "Stage 1", title: "Source", copy: "Raw coffee procured directly from certified Ethiopian growers and cooperatives." },
  { id: "process", label: "Stage 2", title: "Process", copy: "Precision roasting and grinding to repeatable, certified quality standards." },
  { id: "package", label: "Stage 3", title: "Package", copy: "Vacuum-sealed and branded packaging engineered for retail & institutional handling." },
  { id: "distribute", label: "Stage 4", title: "Distribute", copy: "Dispatched through integrated wholesale, retail, and export freight channels." },
  { id: "deliver", label: "Stage 5", title: "Deliver", copy: "Reaches supermarkets, contractors, commercial buyers, and global ports on schedule." },
];

/* ---- BUSINESS AREAS ---- */
export const BUSINESS_AREAS: BusinessArea[] = [
  { id: "sourcing", index: "01", title: "Sourcing & Procurement", copy: "Strategic commodity sourcing built on direct supplier relationships, cooperative partnerships, and certified mills.", icon: "📦" },
  { id: "processing", index: "02", title: "Processing & Value Addition", copy: "State-of-the-art coffee roasting, steel cutting & bending, and lubricant blending under strict QA/QC protocols.", icon: "⚙️" },
  { id: "retail", index: "03", title: "Wholesale & Retail Distribution", copy: "Domestic distribution across Ethiopian regional markets, supermarkets, commercial contractors, and retailers.", icon: "🏪" },
  { id: "logistics", index: "04", title: "Supply Chain & Freight Logistics", copy: "End-to-end warehousing, multimodal transportation, and corridor clearance to Djibouti Port.", icon: "🚛" },
  { id: "market", index: "05", title: "Market Development & Trade", copy: "Building international sales channels, B2B procurement agreements, and strategic commodity off-take contracts.", icon: "📈" },
  { id: "partnerships", index: "06", title: "Strategic Partnerships", copy: "Joint ventures, investment opportunities, and cooperative financing as the business scales.", icon: "🤝" },
  { id: "branding", index: "07", title: "Product Branding & Packaging", copy: "Custom white-labeling, institutional packaging, export grading, and retail brand development.", icon: "🎯" },
  { id: "expansion", index: "08", title: "Commodity Sector Expansion", copy: "Continuous diversification into high-demand strategic agricultural, construction, and energy commodities.", icon: "🚀" },
];

/* ---- COMPLETE PRODUCT CATALOG (COFFEE, STEEL, LUBRICANTS) ---- */
export const PRODUCT_LINES: ProductLine[] = [
  // --- Coffee Products ---
  {
    id: "raw-coffee",
    category: "coffee",
    image: "/coffee.png",
    icon: "🌿",
    title: "Raw (Green) Coffee",
    copy: "Specialty and commercial grade Ethiopian green coffee beans sourced directly from Sidama, Yirgacheffe, and Guji. Screen graded, moisture controlled, and export certified.",
    specs: [
      { label: "Grade", value: "Grade 1 & 2 Specialty / Grade 3-5 Commercial" },
      { label: "Moisture", value: "10.5% – 11.5%" },
      { label: "Packaging", value: "60kg GrainPro Jute Bags" },
    ],
    tags: ["Single Origin", "Washed / Natural", "Export Grade", "ECX Certified"],
  },
  {
    id: "roasted-coffee",
    category: "coffee",
    image: "/coffee.png",
    icon: "🔥",
    title: "Roasted Coffee Beans",
    copy: "Masterfully batch-roasted Ethiopian Arabica beans bringing out vibrant floral, citrus, and chocolate tasting notes. Tailored for roasteries, cafes, and private label brands.",
    specs: [
      { label: "Roast Levels", value: "Light, Medium, Medium-Dark, Dark" },
      { label: "Bean Variety", value: "100% Ethiopian Heirloom Arabica" },
      { label: "Shelf Life", value: "12 Months in Nitrogen Sealed Bags" },
    ],
    tags: ["Artisan Roasted", "Custom Profiles", "Whole Bean", "Private Label"],
  },
  {
    id: "ground-coffee",
    category: "coffee",
    image: "/coffee.png",
    icon: "☕",
    title: "Ground Coffee",
    copy: "Freshly ground and hermetically sealed for long-lasting aroma and crema. Available in fine, medium, and coarse grinds for retail supermarkets and hospitality providers.",
    specs: [
      { label: "Grind Sizes", value: "Espresso, Drip, French Press, Traditional" },
      { label: "Packs", value: "250g, 500g, 1kg Stand-up Pouches" },
      { label: "Valve", value: "One-Way Degassing Valve Included" },
    ],
    tags: ["Fresh Ground", "Retail Packaged", "Multiple Grinds", "Supermarket Ready"],
  },

  // --- Steel & Metals ---
  {
    id: "steel-rebar",
    category: "steel",
    image: "/steel.png",
    icon: "🏗️",
    title: "Deformed Steel Rebar",
    copy: "High-tensile reinforcement steel bars engineered for heavy civil infrastructure, commercial high-rises, and industrial concrete reinforcement.",
    specs: [
      { label: "Standards", value: "ASTM A615 Grade 60 / BS 4449 Grade 500B" },
      { label: "Diameters", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
      { label: "Length", value: "Standard 12m Bundles" },
    ],
    tags: ["High Tensile", "Grade 60/75", "Certified Mill", "Construction Grade"],
  },
  {
    id: "structural-steel",
    category: "steel",
    image: "/steel.png",
    icon: "🔩",
    title: "Structural Beams & Channels",
    copy: "Heavy-duty H-beams, I-beams, U-channels, and equal angles designed for pre-engineered steel buildings, bridge construction, and warehouse framing.",
    specs: [
      { label: "Profiles", value: "HEA / HEB / IPE / UNP / Equal Angles" },
      { label: "Grades", value: "S235JR / S275JR / S355JR" },
      { label: "Lengths", value: "6m / 12m Mill Lengths" },
    ],
    tags: ["Heavy Duty", "Structural Grade", "Certified Tolerances", "Industrial"],
  },
  {
    id: "metal-sheets",
    category: "steel",
    image: "/steel.png",
    icon: "📐",
    title: "Coils & Galvanized Sheets",
    copy: "Hot-rolled, cold-rolled, and hot-dipped galvanized steel coils and corrugated sheets for roofing, cladding, and metal fabrication.",
    specs: [
      { label: "Thickness", value: "0.25mm – 4.5mm" },
      { label: "Coating", value: "Zinc 80g – 275g / m² Galvanized" },
      { label: "Widths", value: "900mm – 1250mm" },
    ],
    tags: ["Anti-Corrosion", "Galvanized", "Roofing & Cladding", "Coil Stock"],
  },

  // --- Lubricants & Oils ---
  {
    id: "engine-oils",
    category: "lubricants",
    image: "/lubricants.png",
    icon: "🚗",
    title: "Heavy Duty Engine Oils",
    copy: "Premium multi-grade engine lubricants formulated for diesel and gasoline fleets, transport trucks, and construction equipment operating under high thermal stress.",
    specs: [
      { label: "Viscosities", value: "SAE 15W-40, 20W-50, 5W-30, 5W-40" },
      { label: "API Standards", value: "API CI-4/SL, CK-4, SN Plus" },
      { label: "Packaging", value: "1L, 4L, 5L, 20L Pails, 208L Drums" },
    ],
    tags: ["API Certified", "Fleet Grade", "Thermal Stability", "Wear Protection"],
  },
  {
    id: "hydraulic-fluids",
    category: "lubricants",
    image: "/lubricants.png",
    icon: "⚙️",
    title: "Industrial Hydraulic Fluids",
    copy: "Anti-wear hydraulic oils designed for heavy earthmoving machinery, industrial presses, and manufacturing hydraulic systems requiring anti-oxidation and anti-foaming protection.",
    specs: [
      { label: "Grades", value: "ISO VG 32, 46, 68, 100" },
      { label: "Specs", value: "DIN 51524 Part 2 (HLP), Denison HF-0" },
      { label: "Packaging", value: "20L Jerrycans, 208L Steel Drums" },
    ],
    tags: ["Anti-Wear", "High Pressure", "Demulsifying", "Machinery Grade"],
  },
  {
    id: "greases",
    category: "lubricants",
    image: "/lubricants.png",
    icon: "🛢️",
    title: "High-Temp Lithium Greases",
    copy: "Extreme-pressure multi-purpose lithium and complex greases for automotive wheel bearings, heavy industrial chassis, and agricultural equipment pins and bushings.",
    specs: [
      { label: "NLGI Grades", value: "NLGI 2, NLGI 3" },
      { label: "Drop Point", value: "> 190°C – 260°C" },
      { label: "Packaging", value: "500g Cartridges, 15kg Pails, 180kg Drums" },
    ],
    tags: ["Extreme Pressure", "Water Resistant", "High Temp", "Lithium Complex"],
  },
];

/* ---- CERTIFICATIONS & STANDARDS ---- */
export const CERTIFICATIONS: CertificationItem[] = [
  { id: "ecx", icon: "🏛️", title: "ECX Standards Compliant", subtitle: "Full compliance with Ethiopian Commodity Exchange grading and warehousing" },
  { id: "mot", icon: "📜", title: "Ministry of Trade Verified", subtitle: "Licensed strategic commodity exporter & distributor in Ethiopia" },
  { id: "qa", icon: "🔬", title: "Certified Lab Quality Tested", subtitle: "Rigorous batch analysis for moisture, tensile strength, and viscosity" },
  { id: "chain", icon: "🌍", title: "100% Traceable Supply Chain", subtitle: "Direct farm-to-port and mill-to-client verified chain of custody" },
];

/* ---- CORE VALUES ---- */
export const CORE_VALUES: CoreValue[] = [
  { id: "quality", title: "Quality", copy: "In every lot, batch, and delivery", icon: "◆" },
  { id: "integrity", title: "Integrity", copy: "Transparent, honest, and ethical dealings", icon: "◈" },
  { id: "reliability", title: "Reliability", copy: "Dependable supply you can plan your business around", icon: "●" },
  { id: "partnership", title: "Partnership", copy: "Long-term relationships built on shared trust", icon: "◎" },
  { id: "customer", title: "Customer Focus", copy: "Responsive to market demand and buyer specifications", icon: "★" },
  { id: "excellence", title: "Operational Excellence", copy: "Discipline, efficiency, and safety at every stage", icon: "✦" },
  { id: "growth", title: "Sustainable Growth", copy: "Building value for Ethiopian commodity chains", icon: "▲" },
];

/* ---- STATS ---- */
export const STATS: Stat[] = [
  { id: "sectors", value: "3", label: "Commodity Sectors" },
  { id: "chain", value: "End-to-End", label: "Full Supply Chain" },
  { id: "areas", value: "8", label: "Business Areas" },
  { id: "reach", value: "Global", label: "Domestic & Export" },
];

/* ---- WHY CHOOSE ---- */
export const WHY_CHOOSE_US: WhyChooseItem[] = [
  { id: "quality", icon: "✦", title: "Product Quality", copy: "Rigorous quality control at every stage — from source to final delivery." },
  { id: "pricing", icon: "◈", title: "Competitive Pricing", copy: "Direct sourcing and efficient operations keep pricing transparent and sharp." },
  { id: "delivery", icon: "◉", title: "Reliable Delivery", copy: "Dependable logistics and dedicated warehouse hubs you can count on." },
  { id: "satisfaction", icon: "★", title: "Customer Satisfaction", copy: "Tailored supply contracts, flexible MOQs, and responsive customer service." },
  { id: "transparency", icon: "◎", title: "Transparent Practices", copy: "Full traceability, compliant invoicing, and verified product specifications." },
];

/* ---- FAQ ITEMS ---- */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Ordering & Trade",
    question: "What commodities does NGV PLC source and distribute?",
    answer: "NGV PLC is engaged in strategic sourcing and distribution across three main sectors: Premium Ethiopian Coffee (raw green beans, roasted, and packaged ground coffee), Industrial Steel & Metals (rebar, structural beams, galvanized coils/sheets), and High-Performance Lubricants & Oils (heavy-duty engine oils, hydraulic fluids, and industrial greases).",
  },
  {
    id: "faq-2",
    category: "Ordering & Trade",
    question: "What are your minimum order quantities (MOQs) and delivery terms?",
    answer: "We accommodate both domestic wholesale orders and large-scale export shipments. For green coffee export, standard orders start from 1 Full Container Load (FCL / approx. 19.2 MT in 60kg bags), while domestic roasted/ground coffee, steel, and lubricants have flexible volume tiers. Delivery terms include Ex-Warehouse (Addis Ababa), FOB (Djibouti Port), or CIF destination ports worldwide.",
  },
  {
    id: "faq-3",
    category: "Payment & Compliance",
    question: "What payment and contract terms do you accept?",
    answer: "For international trade, we accept Irrevocable Letters of Credit (L/C at sight), Bank Wire Transfers (T/T), and structured escrow arrangements in accordance with National Bank of Ethiopia export regulations. For domestic buyers, we offer standard commercial invoicing and approved institutional credit terms.",
  },
  {
    id: "faq-4",
    category: "Quality & Testing",
    question: "How does NGV PLC ensure product quality and standards compliance?",
    answer: "Every lot is subjected to rigorous quality control: Coffee is inspected for moisture, defect count, and cup score per ECX and SCA standards; Steel is tested for yield strength and elongation according to ASTM/BS norms; Lubricants are certified against API, SAE, and ISO specifications with certificates of analysis (COA) provided.",
  },
  {
    id: "faq-5",
    category: "Partnerships & Private Label",
    question: "Do you offer private labeling (OEM) and custom packaging?",
    answer: "Yes. We provide end-to-end custom branding, roasting profile customization, and private label packaging for supermarkets, cafe chains, retail brands, and industrial procurement contracts.",
  },
];

/* ---- MARQUEE ---- */
export const MARQUEE_ITEMS: string[] = [
  "Ethiopian Coffee", "Structural Steel", "Industrial Lubricants", "Sourcing",
  "Processing", "Packaging", "Wholesale & Export", "Quality Assured", "Reliable Logistics",
  "Trusted Global Supply",
];
