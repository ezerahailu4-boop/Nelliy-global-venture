import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        {/* Company */}
        <motion.div
          className="footer-col footer-company"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.png" alt="Nelly Global Venture PLC" className="footer-logo" />
          <p className="footer-desc">
            Strategic commodity sourcing, processing, and distribution —
            building reliable supply chains from Ethiopia to the world.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {[
              ["About", "#about"],
              ["Our Commodities", "#sectors"],
              ["Coffee Journey", "#coffee"],
              ["Products", "#products"],
              ["Business Areas", "#business"],
              ["Values", "#values"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </motion.div>

        {/* Commodities */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          <h4 className="footer-heading">Commodities</h4>
          <ul className="footer-links">
            <li>☕ Ethiopian Coffee</li>
            <li>🔩 Steel & Metals</li>
            <li>🛢️ Lubricants & Oils</li>
          </ul>
          <h4 className="footer-heading" style={{ marginTop: 24 }}>Business</h4>
          <ul className="footer-links">
            <li>Wholesale & Retail</li>
            <li>Supply Chain & Logistics</li>
            <li>Strategic Partnerships</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:info@nellyglobalventure.com">info@nellyglobalventure.com</a>
            </li>
            <li>Addis Ababa, Ethiopia</li>
            <li>Domestic & International Markets</li>
          </ul>
        </motion.div>
      </div>

      <div className="wrap footer-bottom">
        <div className="footer-copy">
          © {currentYear} Nelly Global Venture PLC — All rights reserved.
        </div>
        <div className="footer-copy">Trusted Global Supply</div>
      </div>
    </footer>
  );
}
