import { motion } from "motion/react";
import { Contact } from "../sections/Contact";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export function ContactPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(37,99,235,0.12),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Contact Us
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Let's Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Conversation</span>
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Ready to elevate your market strategy? Connect with our expert analysts today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Visit Us", value: "Global Headquarters", sub: "Available for in-person meetings" },
              { icon: Phone, title: "Call Us", value: CONTACT_INFO.phone_ind, sub: `USA: ${CONTACT_INFO.phone_usa}` },
              { icon: Mail, title: "Email Us", value: CONTACT_INFO.email, sub: "We respond within 24 hours" },
              { icon: Clock, title: "Working Hours", value: "Mon – Sat", sub: "9:00 AM – 7:00 PM IST" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#f8fafc] rounded-xl p-6 border border-slate-100 text-center hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{item.title}</h4>
                <div className="text-sm font-bold text-slate-900 mb-0.5">{item.value}</div>
                <div className="text-xs text-slate-500">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* Map placeholder */}
      <section className="bg-[#f8fafc] border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-[300px] bg-slate-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <p className="text-sm text-slate-500 font-medium">Global Headquarters</p>
              <p className="text-xs text-slate-400 mt-1">Contact us for exact location details</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
