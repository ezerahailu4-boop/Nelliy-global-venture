import { motion } from "framer-motion";
import { CORE_VALUES } from "../content";

export default function Values() {
  return (
    <section className="values-section" id="values">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag">Our Principles</span>
            <h2>Values that guide every decision.</h2>
          </div>
        </motion.div>

        <div className="values-grid">
          {CORE_VALUES.map((v, i) => (
            <motion.div
              className="value-card"
              key={v.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.25 } }}
            >
              <span className="value-icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
