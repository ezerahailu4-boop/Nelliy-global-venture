import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "../content";

export default function Marquee() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-band">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span key={i}>
            {item} <span className="dot">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
