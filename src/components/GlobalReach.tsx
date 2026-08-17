import { motion } from "framer-motion";
import TradeGlobe3D from "./TradeGlobe3D";

export default function GlobalReach() {
  return (
    <section className="global-reach" id="global-reach">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag">Global Corridors</span>
            <h2>Connecting Ethiopian Excellence<br />to World Markets.</h2>
          </div>
          <p className="section-note">
            From the highlands of Yirgacheffe and Sidama to international shipping hubs —
            our end-to-end logistics ensure reliable commodity trade across continents.
          </p>
        </motion.div>

        <div className="global-reach-container">
          <TradeGlobe3D />
        </div>

        {/* Trade Metrics Grid */}
        <div className="trade-metrics-grid">
          {[
            { metric: "100% Traceable", label: "Direct Ethiopian Origin", desc: "Farm-to-port single-origin coffee sourcing with stringent grade certifications." },
            { metric: "Strategic Gateway", label: "Djibouti Maritime Port", desc: "Dedicated transit corridor providing direct access to Red Sea & Gulf shipping lines." },
            { metric: "Tier-1 Partners", label: "Multi-Continental Logistics", desc: "Reliable bulk container handling for steel coils, lubricants, and agro-commodities." },
          ].map((item, idx) => (
            <motion.div
              className="trade-metric-card"
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
            >
              <div className="trade-metric-val">{item.metric}</div>
              <h4>{item.label}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
