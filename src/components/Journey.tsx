import { motion } from "framer-motion";
import { ROUTE_STAGES } from "../content";

export default function Journey() {
  return (
    <section className="journey" id="coffee">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag on-dark">The Coffee Journey</span>
            <h2>From Ethiopian soil to the buyer's shelf.</h2>
          </div>
          <p className="section-note">
            Every lot moves through the same disciplined route — quality
            checked at each stage from farm gate to final delivery.
          </p>
        </motion.div>

        <div className="route">
          <div className="route-line" />
          <motion.div
            className="route-line-fill"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
          />
          <div className="route-steps">
            {ROUTE_STAGES.map((stage, i) => (
              <motion.div
                className="route-step"
                key={stage.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <motion.div
                  className="route-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 260 }}
                />
                <div className="route-step-label">{stage.label}</div>
                <h4>{stage.title}</h4>
                <p>{stage.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
