import { useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <video
          ref={videoRef}
          className="hero-bg-video"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster="/hero-bg.png"
        >
          <source src="/4k-hero.mp4" type="video/mp4" />
          <source src="/4k hero.mp4" type="video/mp4" />
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/can_u_make_this_photo_into_vid.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img src="/hero-bg.png" alt="Nelly Global Venture" className="hero-bg-img" />
        </video>
        
        {/* Subtle, non-blurry darkening gradient for text legibility */}
        <div className="hero-bg-overlay" />
      </div>

      <div className="wrap hero-content">
        <div className="hero-text">
          <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="badge-dot" />
            <span className="badge-text">Ethiopian Origin • Global Commodities</span>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Trusted <em>Global</em>
            <br />
            Supply, Sourced
            <br />
            from Ethiopia.
          </motion.h1>

          <motion.p className="hero-lede" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            NGV PLC sources, processes, and distributes strategic commodities —
            premium Ethiopian coffee, structural steel, and industrial lubricants — connecting
            reliable suppliers to expanding global and domestic markets.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <a className="btn btn-primary btn-glow" href="#sectors">Explore Commodities</a>
            <a className="btn btn-glass" href="#contact">Become a Partner</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats-strip"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            ["3", "Core Commodity Sectors"],
            ["8+", "Specialized Business Areas"],
            ["End-to-End", "Integrated Supply Chain"],
            ["Global", "Export & Import Reach"],
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

      {/* Video Quick Controls */}
      <div className="hero-video-controls">
        <button
          type="button"
          className="hero-control-btn"
          onClick={togglePlay}
          title={isPlaying ? "Pause background video" : "Play background video"}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="hero-control-btn"
          onClick={toggleMute}
          title={isMuted ? "Unmute video" : "Mute video"}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
