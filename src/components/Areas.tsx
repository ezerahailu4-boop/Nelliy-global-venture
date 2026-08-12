import { motion } from "framer-motion";
import { BUSINESS_AREAS } from "../content";

export default function Areas() {
  return (
    <section className="areas-section" id="business">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag">Core Business</span>
            <h2>An operating structure built to scale.</h2>
          </div>
          <p className="section-note">
            Eight integrated business areas — from sourcing and processing
            to branding, logistics, and market expansion.
          </p>
        </motion.div>

        <div className="areas-grid">
          {BUSINESS_AREAS.map((area, i) => (
            <motion.div
              className="area-card"
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="area-top">
                <span className="area-icon">{area.icon}</span>
                <span className="area-num">{area.index}</span>
              </div>
              <h4>{area.title}</h4>
              <p>{area.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
