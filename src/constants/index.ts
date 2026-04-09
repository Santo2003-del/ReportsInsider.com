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
    title: "Consulting Service",
    description: "Our consulting services is committed to provide actionable insights functional statistics and helping clients prioritize reward opportunities. Whether you are an experienced player or want to explore investment opportunities...",
    icon: Target,
  },
  {
    title: "Custom Research",
    description: "Our researches primarily focus on understanding the choices of the customers and identifying their basic needs. At Reports Insider, we provide customized research solutions to deal with the particular requirements of our clients...",
    icon: PieChart,
  },
  {
    title: "Syndicated Market Research",
    description: "Syndicate research conducted by Reports Insider offers ready answers and provides effective due diligence on business intelligence and research needs. Our syndicated research services give fantastic insights...",
    icon: BarChart3,
  },
  {
    title: "Emerging Technologies",
    description: "We are a community of solvers combining human ingenuity, experience and technology innovation to deliver sustained outcomes and build trust. At Reports Insider we believe in independent studies for client specific requirements...",
    icon: Zap,
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
