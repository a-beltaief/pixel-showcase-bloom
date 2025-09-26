export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  url?: string;
  embedUrl?: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Moderne Online-Shop-Lösung mit React und Node.js",
    category: "E-Commerce",
    image: "/ecommerce-platform-new-thumbnail.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    url: "https://example.com",
    embedUrl: "https://regal-boutique-project.lovable.app/",
    featured: true
  },
  {
    id: "2", 
    title: "Corporate Website",
    description: "Responsive Unternehmenswebsite mit CMS-Integration",
    category: "Corporate",
    image: "/corporate-website-new-thumbnail.png",
    technologies: ["Vue.js", "Nuxt.js", "Strapi", "Tailwind"],
    url: "https://example.com",
    embedUrl: "https://timeless-craftsmanship-showcase.lovable.app/",
    featured: true
  },
  {
    id: "3",
    title: "SaaS Dashboard",
    description: "Datenvisualisierung und Analytics Dashboard",
    category: "SaaS",
    image: "/saas-dashboard-thumbnail.jpg", 
    technologies: ["React", "TypeScript", "Chart.js", "Express"],
    embedUrl: "https://utility-compass-flow-45.lovable.app/",
    featured: true
  },
  {
    id: "4",
    title: "Mobile App Landing",
    description: "Conversion-optimierte Landing Page für Mobile App",
    category: "Landing Page",
    image: "/mobile-app-landing-thumbnail.png",
    technologies: ["Next.js", "Framer Motion", "Vercel"],
    url: "https://example.com",
    featured: false
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "Kreative Portfolio-Website für Designer",
    category: "Portfolio",
    image: "",
    technologies: ["Gatsby", "GraphQL", "Contentful"],
    url: "https://example.com", 
    featured: false
  },
  {
    id: "6",
    title: "Booking System",
    description: "Modernes Buchungssystem für Hotels und Unterkünfte",
    category: "Web App",
    image: "/lovable-uploads/8c7cc12d-2f74-499b-9f21-22b2c2aeeb01.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lovable"],
    embedUrl: "https://modern-seaside-stay-1815.lovable.app/",
    featured: true
  }
];

export const categories = [
  "Alle",
  "E-Commerce", 
  "Corporate",
  "SaaS",
  "Landing Page",
  "Portfolio",
  "Web App"
];