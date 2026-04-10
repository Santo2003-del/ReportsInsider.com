import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Business team collaborating on market research"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-white p-6 rounded-xl border border-slate-100 max-w-[200px] hidden md:block"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-slate-600 text-sm font-medium leading-snug">Years of actionable market intelligence</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Leading Business{" "}
              <span className="text-gradient">Research & Intelligence</span>
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Reports Insider is a leading business research and intelligence provider dedicated to delivering high-quality market reports, industry insights, and tailored solutions for global decision-makers.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Proprietary data methodologies and analytics",
                "Global network of industry experts and analysts",
                "Customized research tailored to your strategic goals",
                "Uncompromising commitment to accuracy and integrity"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="flex items-start group"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-200">
                    <CheckCircle2 className="h-3 w-3 text-blue-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors duration-200 group"
            >
              Discover Our Story
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
