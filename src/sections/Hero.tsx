import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f172a]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/asset/HeroVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-wider uppercase">Trusted Market Intelligence</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Precision in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Every Report
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Reports Insider is a leading business research and intelligence provider delivering high-quality market reports, industry insights, and tailored solutions for global decision-makers.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center px-7 py-3.5 bg-blue-600 text-white rounded-lg font-semibold text-sm shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700/30 transition-all duration-200 group"
                >
                  Explore Reports
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-lg font-semibold text-sm backdrop-blur-sm transition-all duration-200"
                >
                  Speak to an Analyst
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white">15,000+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Reports Published</div>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Countries Covered</div>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-white">250+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Expert Analysts</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="animate-float">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Play className="w-5 h-5 text-blue-400 fill-current" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Market Intelligence</div>
                      <div className="text-slate-400 text-xs">Real-time analytics</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Expert Meetings", "B2B & B2C Surveys", "Custom Research", "Long-Term Consulting"].map((item, i) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className={cn_simple(i)}>
                          <div className="w-2 h-2 rounded-full bg-current" />
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative blur */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-[50px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}

function cn_simple(i: number) {
  const colors = ["text-blue-400", "text-emerald-400", "text-amber-400", "text-purple-400"];
  return `w-6 h-6 rounded-full bg-white/5 flex items-center justify-center ${colors[i]}`;
}
