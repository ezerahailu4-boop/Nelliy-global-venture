import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { COMMODITY_SECTORS } from "../content";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Commodities", href: "#sectors", sub: COMMODITY_SECTORS },
  { label: "Products & Specs", href: "#products" },
  { label: "Business Areas", href: "#business" },
  { label: "Values", href: "#values" },
  { label: "Standards", href: "#certifications" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact / RFQ", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [commoditiesOpen, setCommoditiesOpen] = useState(true);
  const { theme, toggle } = useTheme();

  return (
    <div className="mobile-menu-wrapper">
      <button
        className="theme-toggle mobile-theme"
        onClick={toggle}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <motion.span
          className="hamburger-line"
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className="hamburger-line"
          animate={open ? { opacity: 0, x: -12 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="hamburger-line"
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25 }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="mobile-nav">
                {NAV_ITEMS.map((item, i) => (
                  <div key={item.label} className="mobile-nav-block">
                    <motion.a
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={() => {
                        if (!item.sub) setOpen(false);
                      }}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <span className="mobile-nav-num">0{i + 1}</span>
                      <span>{item.label}</span>
                    </motion.a>

                    {item.sub && (
                      <div className="mobile-sub-links">
                        {item.sub.map((sub) => (
                          <a
                            key={sub.id}
                            href={`#products-${sub.id}`}
                            className="mobile-sub-link"
                            onClick={() => setOpen(false)}
                          >
                            <span>{sub.icon}</span>
                            <span>{sub.title}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <motion.a
                  className="btn btn-primary mobile-nav-cta"
                  href="#contact"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                >
                  Request Quotation ➔
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
