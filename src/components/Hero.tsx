import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <motion.img
          src="/hero-bg.png"
          alt=""
          className="hero-bg-img"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="wrap hero-content">
        <div className="hero-text">
          <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="badge-dot" />
            Coffee · Steel · Lubricants
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Trusted <em>global</em>
            <br />
            supply, sourced
            <br />
            from Ethiopia.
          </motion.h1>
          <motion.p className="hero-lede" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            NGV PLC sources, processes, and distributes strategic commodities —
            Ethiopian coffee, industrial steel, and premium lubricants — connecting
            reliable suppliers to growing domestic and international markets.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <a className="btn btn-primary btn-glow" href="#sectors">Our commodities</a>
            <a className="btn btn-glass" href="#contact">Become a partner</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats-strip"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            ["3", "Commodity Sectors"],
            ["8", "Business Areas"],
            ["End-to-End", "Supply Chain"],
            ["Global", "Market Reach"],
          ].map(([val, lab], i) => (
            <motion.div
              className="hero-stat"
              key={lab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <b>{val}</b>
              <span>{lab}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="hero-float hero-float-1"
        animate={{ y: [-8, 8, -8], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-float hero-float-2"
        animate={{ y: [6, -10, 6], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
}
