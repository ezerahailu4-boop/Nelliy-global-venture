import { motion } from "framer-motion";
import { COMMODITY_SECTORS } from "../content";
import TiltCard3D from "./TiltCard3D";

export default function Sectors() {
  return (
    <section className="sectors" id="sectors">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag">Our Commodities</span>
            <h2>Three sectors.<br />One trusted supply chain.</h2>
          </div>
          <p className="section-note">
            From Ethiopian coffee to industrial steel and premium lubricants —
            we deliver strategic commodities with operational excellence.
          </p>
        </motion.div>

        <div className="sectors-grid">
          {COMMODITY_SECTORS.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard3D className="sector-card" maxTilt={10}>
                <div className="sector-image-wrap">
                  <motion.img
                    src={sector.image}
                    alt={sector.title}
                    className="sector-image"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="sector-image-overlay" />
                </div>
                <div className="sector-content">
                  <span className="sector-icon">{sector.icon}</span>
                  <h3>{sector.title}</h3>
                  <p>{sector.copy}</p>
                  <motion.a
                    href="#contact"
                    className="sector-link"
                    whileHover={{ x: 6 }}
                  >
                    Explore Specifications →
                  </motion.a>
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
