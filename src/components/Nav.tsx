import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { COMMODITY_SECTORS } from "../content";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav-header${scrolled ? " nav-scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="wrap nav-inner">
        <a href="#" className="brand">
          <img src="/logo.png" alt="Nelly Global Venture PLC" className="brand-logo" />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>

          {/* Commodities / Services Hover Dropdown */}
          <li
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="#sectors"
              className="nav-dropdown-trigger"
              onClick={(e) => {
                // allow smooth scroll
              }}
            >
              <span>Commodities</span>
              <motion.span
                className="dropdown-chevron"
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▾
              </motion.span>
            </a>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="nav-dropdown-menu glass-card"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="dropdown-header">
                    <span className="dropdown-title">Strategic Commodities</span>
                    <span className="dropdown-sub">Sourced & Distributed by NGV PLC</span>
                  </div>

                  <div className="dropdown-items">
                    {COMMODITY_SECTORS.map((sector) => (
                      <a
                        key={sector.id}
                        href={`#products-${sector.id}`}
                        className="dropdown-item"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="dropdown-item-icon">{sector.icon}</div>
                        <div className="dropdown-item-info">
                          <span className="dropdown-item-title">{sector.title}</span>
                          <span className="dropdown-item-desc">
                            {sector.items.join(" · ")}
                          </span>
                        </div>
                        <span className="dropdown-item-arrow">→</span>
                      </a>
                    ))}
                  </div>

                  <div className="dropdown-footer">
                    <a
                      href="#contact"
                      className="dropdown-footer-link"
                      onClick={() => setServicesOpen(false)}
                    >
                      Request Bulk Quotation (RFQ) ➔
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <a href="#products">Products & Specs</a>
          </li>
          <li>
            <a href="#business">Business Areas</a>
          </li>
          <li>
            <a href="#values">Values</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  ☀️
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  🌙
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <motion.a
            whileHover={{ y: -2 }}
            className="btn btn-primary nav-cta"
            href="#contact"
          >
            Request Quote
          </motion.a>
        </div>

        <MobileMenu />
      </nav>
    </motion.header>
  );
}
