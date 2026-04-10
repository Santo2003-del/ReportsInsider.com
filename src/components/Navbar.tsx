import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#0f172a] text-white/90 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-8 font-medium">
          <a href="tel:+918806790102" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <Phone className="w-3 h-3" /> <span className="font-semibold text-blue-400">IND</span> +91 8806790102
          </a>
          <a href="tel:+13155576479" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <Phone className="w-3 h-3" /> <span className="font-semibold text-blue-400">USA</span> +1 315 557 6479
          </a>
          <a href="mailto:sales@reportsinsider.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <Mail className="w-3 h-3" /> sales@reportsinsider.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-slate-100 py-3"
            : "bg-white/80 backdrop-blur-md border-slate-200/50 py-4"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">R</span>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Reports<span className="text-blue-600">Insider</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href || (link.subLinks && location.pathname.startsWith(link.href) && link.href !== "/");
                const hasSubLinks = !!link.subLinks;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => hasSubLinks && setActiveDropdown(link.label)}
                    onMouseLeave={() => hasSubLinks && setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 relative rounded-lg",
                        isActive
                          ? "text-blue-600"
                          : "text-slate-600 hover:text-blue-600"
                      )}
                    >
                      {link.label}
                      {hasSubLinks && (
                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === link.label ? "rotate-180" : "")} />
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {hasSubLinks && (
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl border border-slate-100 py-2 overflow-hidden"
                          >
                            {link.subLinks!.map((subLink) => (
                              <Link
                                key={subLink.label}
                                to={subLink.href}
                                className="flex items-center px-5 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-150 font-medium"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-3" />
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Get a Quote
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                        location.pathname === link.href
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                      {link.subLinks && <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-6 space-y-0.5">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.label}
                            to={subLink.href}
                            className="block px-4 py-2 text-sm text-slate-500 hover:text-blue-600 rounded-lg transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
