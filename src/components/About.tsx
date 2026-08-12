import { motion } from "framer-motion";
import { STATS } from "../content";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const PARTNERS = [
  "Suppliers", "Cooperatives", "Supermarkets", "Retailers",
  "Institutional Buyers", "Contractors", "Manufacturers",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-bg-wrap">
        <motion.img
          src="/about-bg.png"
          alt=""
          className="about-bg-img"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
        <div className="about-bg-overlay" />
      </div>

      <div className="wrap about-inner">
        {/* Vision & Mission */}
        <div className="vmv-strip">
          <motion.div
            className="vmv-card glass-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="vmv-label">Vision</span>
            <p>
              To become a trusted and competitive strategic commodity supply
              and distribution company in Ethiopia and beyond.
            </p>
          </motion.div>
          <motion.div
            className="vmv-card glass-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <span className="vmv-label">Mission</span>
            <p>
              To supply strategic commodities with operational excellence —
              through strong partnerships, reliable distribution, quality
              products, and sustainable business practices.
            </p>
          </motion.div>
        </div>

        {/* About Content */}
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          <div>
            <span className="section-tag">About NGV PLC</span>
            <h2>Connecting reliable supply to growing markets.</h2>
          </div>
          <p className="section-note">
            Built on efficient supply-chain management and strong business
            partnerships across procurement, warehousing, transport, and sales.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
          >
            <p>
              Nelly Global Venture PLC (NGV PLC) is an Ethiopian business company
              engaged in strategic commodity sourcing, processing, packaging,
              marketing, and distribution — spanning coffee, steel, and lubricants.
            </p>
            <p>
              The company connects reliable suppliers with growing domestic and
              international markets through efficient supply-chain management,
              strong partnerships, and an operational structure covering procurement,
              warehousing, transportation, sales, and customer service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ delay: 0.1 }}
          >
            <p>
              NGV PLC is committed to maintaining product quality, competitive
              pricing, reliable delivery, customer satisfaction, and transparent
              business practices. Through its growing distribution capacity,
              the company contributes to Ethiopia's commodity value chains while
              creating sustainable commercial value.
            </p>
            <div className="stat-row">
              {STATS.map((s, i) => (
                <motion.div
                  className="stat glass-card"
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          className="partners-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="partners-label">Who We Work With</span>
          <div className="partners-badges">
            {PARTNERS.map((p, i) => (
              <motion.span
                key={p}
                className="partner-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                whileHover={{ scale: 1.06, y: -2 }}
              >
                {p}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
