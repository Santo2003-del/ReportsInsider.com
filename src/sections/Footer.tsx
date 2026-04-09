import { Link } from "react-router-dom";
import { CONTACT_INFO, FOOTER_LINKS } from "../constants";
import { Mail, Phone, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Reports<span className="text-blue-500">Insider</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Reports Insider is a leading business research and intelligence provider dedicated to delivering high-quality market reports, industry insights, and tailored solutions for global decision-makers.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, name: "LinkedIn" },
                { icon: Twitter, name: "Twitter" },
                { icon: Facebook, name: "Facebook" },
              ].map((social) => (
                <a key={social.name} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 text-slate-400 hover:text-white"  aria-label={social.name}>
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Industries</h4>
            <ul className="space-y-3">
              {["Chemical & Materials", "Automotive & Transportation", "Agriculture", "Energy & Power", "Medical Devices"].map((ind) => (
                <li key={ind}>
                  <Link to="/industries" className="text-sm hover:text-blue-400 transition-colors">
                    {ind}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm">IND: {CONTACT_INFO.phone_ind}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm">USA: {CONTACT_INFO.phone_usa}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Reports Insider. All rights reserved.
          </p>
          <div className="flex space-x-5 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
