export type Project = {
  slug: string;
  name: string;
  client: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  color: string;
};

export const projects: Project[] = [
  {
    slug: "wepro-crm",
    name: "WEPRO CRM",
    client: "LeadManager",
    year: "2026",
    category: "SaaS · CRM",
    description:
      "Full-featured CRM webapp with deal pipeline, contacts, call logging, and reporting dashboards for sales teams.",
    stack: ["React", "Express", "SQLite"],
    image: "/projects/wepro-crm.svg",
    color: "#c6ff3a",
  },
  {
    slug: "muthoclo",
    name: "Muthoclo",
    client: "Kitdrop",
    year: "2026",
    category: "E-commerce",
    description:
      "Premium jersey store with a full SEO system, product catalog, and checkout flow built for organic growth.",
    stack: ["Next.js", "Supabase", "Stripe"],
    image: "/projects/muthoclo.svg",
    color: "#4f7cff",
  },
  {
    slug: "droidsweep",
    name: "DroidSweep",
    client: "Personal",
    year: "2026",
    category: "SaaS · Diagnostics",
    description:
      "Full Android diagnostic suite — battery, storage, CPU, network, and app auditing over ADB with an HTML report.",
    stack: ["Node.js", "Express", "ADB"],
    image: "/projects/droidsweep.svg",
    color: "#ff5f4f",
  },
  {
    slug: "rofiq-auto-track",
    name: "Rofiq Auto · Track",
    client: "Workshop client",
    year: "2026",
    category: "SaaS · Operations",
    description:
      "Car workshop job tracker covering all four roles — customer, staff, owner, and parts source — in one system.",
    stack: ["React", "Vite", "Express"],
    image: "/projects/rofiq-auto-track.svg",
    color: "#ffb84f",
  },
  {
    slug: "wa-collector",
    name: "WA Collector",
    client: "Internal tool",
    year: "2026",
    category: "SaaS · Automation",
    description:
      "WhatsApp group member scraper with live QR login that exports clean contact lists straight to Excel.",
    stack: ["Node.js", "socket.io", "whatsapp-web.js"],
    image: "/projects/wa-collector.svg",
    color: "#3affc6",
  },
  {
    slug: "lokialert",
    name: "LokiAlert",
    client: "Community platform",
    year: "2026",
    category: "SaaS · Community",
    description:
      "Lost & found pet alert platform with live map pins so a whole neighborhood can help search in real time.",
    stack: ["Express", "SQLite", "Leaflet"],
    image: "/projects/lokialert.svg",
    color: "#c64fff",
  },
];

export const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "SQLite", "Supabase", "Three.js", "Tailwind CSS",
  "REST APIs", "WebSockets", "System Design", "SEO",
];

export const stats = [
  { value: "10+", label: "SaaS products shipped" },
  { value: "6", label: "Industries served" },
  { value: "100%", label: "Solo-built, end to end" },
];
