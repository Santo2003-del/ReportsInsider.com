import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Cpu,
  Globe2,
  GraduationCap,
  HeartPulse,
  Leaf,
  LineChart,
  PieChart,
  ShieldCheck,
  Target,
  Users,
  Zap,
  PhoneCall,
  ClipboardList,
  Map,
  Handshake,
  Coffee
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { 
    label: "Industries", 
    href: "/industries",
    subLinks: [
      { label: "Chemical & Materials", href: "/industries/chemical-materials" },
      { label: "Automotive & Transportation", href: "/industries/automotive-transportation" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Consumer Goods & Retails", href: "/industries/consumer-goods-retails" },
      { label: "Business & Finance", href: "/industries/business-finance" },
      { label: "Food & Beverages", href: "/industries/food-beverages" },
      { label: "Energy & Power", href: "/industries/energy-power" },
      { label: "Medical Devices", href: "/industries/medical-devices" },
      { label: "Aerospace & Defence", href: "/industries/aerospace-defence" },
    ]
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Expert Meetings",
    description: "Expert Meetings is a premium service that facilitates in-depth, face-to-face or virtual interactions between clients and industry experts. These meetings are designed to provide comprehensive insights, strategic guidance, and hands-on perspectives on specific markets, technologies, or business challenges.",
    icon: Users,
  },
  {
    title: "Expert Calls",
    description: "Expert Calls connects businesses, investors, and researchers with subject matter experts across various industries. These consultations allow clients to gain firsthand insights, market intelligence, and strategic advice directly from professionals with deep knowledge and real-world experience.",
    icon: PhoneCall,
  },
  {
    title: "B2B & B2C Surveys",
    description: "B2B & B2C Surveys are research services designed to collect insights directly from target audiences. These surveys help companies understand customer preferences, buying behavior, market trends, and brand perception through decision-makers and everyday consumers.",
    icon: ClipboardList,
  },
  {
    title: "Long-Term Consulting",
    description: "Long-Term Consulting provides ongoing access to industry experts over an extended period. This service supports deeper engagement, allowing consultants to work closely with clients on complex projects, strategic planning, and continuous market monitoring.",
    icon: Handshake,
  },
  {
    title: "Field Visits",
    description: "Field Visits involve on-site visits to operational facilities to gather real-world insights. These visits are crucial for validating data, understanding ground-level realities, and gaining practical context that cannot be captured through remote consultations.",
    icon: Map,
  },
  {
    title: "In-Person Meetings",
    description: "In-person Meetings facilitate face-to-face interactions to enable deeper discussions and stronger relationship building. Ideal for strategic planning or complex project assessments, these meetings provide an immersive environment for nuanced insights.",
    icon: Briefcase,
  },
];

export const FOOTER_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Latest Reports", href: "/reports" },
  { label: "Contact Us", href: "/contact" },
  { label: "Career", href: "#" },
  { label: "Terms & Condition", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export const REPORTS = [
  {
    title: "Global AI in Healthcare Market 2024-2030",
    category: "Healthcare & IT",
    pages: 245,
    price: "$4,950",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Electric Vehicle Battery Market Analysis",
    category: "Automotive",
    pages: 180,
    price: "$3,850",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Cloud Computing Enterprise Solutions",
    category: "Technology",
    pages: 310,
    price: "$5,100",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Renewable Energy Investment Trends",
    category: "Energy",
    pages: 215,
    price: "$4,200",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
  },
];

export const INDUSTRIES = [
  { name: "Chemical & Materials", icon: Leaf },
  { name: "Automotive & Transportation", icon: Globe2 },
  { name: "Agriculture", icon: Leaf },
  { name: "Consumer Goods & Retails", icon: Building2 },
  { name: "Business & Finance", icon: LineChart },
  { name: "Food & Beverages", icon: Coffee },
  { name: "Energy & Power", icon: Zap },
  { name: "Medical Devices", icon: HeartPulse },
  { name: "Aerospace & Defence", icon: ShieldCheck },
];

export const STATS = [
  { value: "15,000+", label: "Reports Published" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "150+", label: "Countries Covered" },
  { value: "250+", label: "Expert Analysts" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Reports Insider provided us with invaluable insights that reshaped our market entry strategy. Their data is accurate, and their analysis is profound.",
    author: "Sarah Jenkins",
    role: "VP of Strategy, TechCorp Global",
  },
  {
    quote:
      "The custom research report we received was exactly what we needed. It was detailed, timely, and directly addressed our core business questions.",
    author: "Michael Chang",
    role: "Director of Marketing, HealthPlus",
  },
  {
    quote:
      "Working with Reports Insider has been a game-changer for our competitive intelligence. Their team is highly professional and deeply knowledgeable.",
    author: "Elena Rodriguez",
    role: "CEO, Innovate Manufacturing",
  },
];

export const CONTACT_INFO = {
  address: "Global Headquarters",
  phone_ind: "+91 8806790102",
  phone_usa: "+1 315 557 6479",
  email: "sales@reportsinsider.com",
};
