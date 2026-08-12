import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "../content";

export default function WhyChoose() {
  return (
    <section className="why-choose" id="why-us">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag on-dark">Why NGV PLC</span>
            <h2>Built on trust, delivered with excellence.</h2>
          </div>
          <p className="section-note">
            We're committed to building partnerships that last — through quality,
            transparency, and dependable service.
          </p>
        </motion.div>

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div
              className="why-card glass-card-dark"
              key={item.id}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
            >
              <div className="why-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="why-motto"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="motto-label">Our Motto</span>
          <p>"Trusted Global Supply."</p>
        </motion.div>
      </div>
    </section>
  );
}
