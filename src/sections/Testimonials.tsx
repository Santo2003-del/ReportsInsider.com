import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Client Success
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-7 border border-slate-100 hover:border-blue-100 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-blue-100 group-hover:text-blue-200 transition-colors" />

              <div className="flex text-amber-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-bold text-slate-900 text-sm">{testimonial.author}</div>
                  <div className="text-blue-600 text-xs font-medium">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
