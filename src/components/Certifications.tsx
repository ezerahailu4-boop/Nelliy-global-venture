import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../content";

export default function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag">Quality &amp; Compliance</span>
            <h2>Trusted standards.<br />Verified trade credentials.</h2>
          </div>
          <p className="section-note">
            Full compliance with Ethiopian statutory export frameworks, international grading systems, and QA laboratory testing.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              className="cert-card glass-card"
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h4>{cert.title}</h4>
              <p>{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
