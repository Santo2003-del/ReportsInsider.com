import { motion } from "motion/react";
import { Link } from "react-router-dom";

const INDUSTRY_CARDS = [
  {
    name: "Chemical & Materials",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=800&auto=format&fit=crop",
    description: "Advanced chemical compounds, specialty materials, and sustainable manufacturing solutions analysis.",
    href: "/industries/chemical-materials",
  },
  {
    name: "Automotive & Transportation",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    description: "EV technologies, autonomous driving, fleet management and mobility-as-a-service research.",
    href: "/industries/automotive-transportation",
  },
  {
    name: "Agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    description: "Precision farming, agri-biotech, crop analytics and food security market intelligence.",
    href: "/industries/agriculture",
  },
  {
    name: "Consumer Goods & Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    description: "E-commerce trends, consumer behavior analytics, and omnichannel retail strategies.",
    href: "/industries/consumer-goods-retails",
  },
  {
    name: "Business & Finance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "FinTech innovations, investment trends, risk management and regulatory compliance insights.",
    href: "/industries/business-finance",
  },
  {
    name: "Food & Beverages",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    description: "Nutraceuticals, organic food trends, supply chain optimization and safety research.",
    href: "/industries/food-beverages",
  },
  {
    name: "Energy & Power",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    description: "Renewable energy, smart grid technologies, carbon neutrality, and energy storage solutions.",
    href: "/industries/energy-power",
  },
  {
    name: "Medical Devices",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    description: "Diagnostic equipment, wearable health tech, surgical robotics and telehealth systems.",
    href: "/industries/medical-devices",
  },
  {
    name: "Aerospace & Defence",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop",
    description: "Defense systems, satellite technology, unmanned vehicles and space exploration markets.",
    href: "/industries/aerospace-defence",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Sectors We Cover
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Global Industry <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Deep domain knowledge across high-growth and established sectors, providing you with the nuanced insights needed to win.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_CARDS.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <Link
                to={industry.href}
                className="block bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-blue-200 group transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-white font-bold text-lg">
                    {industry.name}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {industry.description}
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center group-hover:text-blue-700">
                    View Reports
                    <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
