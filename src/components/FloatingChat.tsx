import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-chat-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-chat-popup glass-card"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chat-popup-header">
              <div className="chat-avatar">NGV</div>
              <div>
                <h4>NGV Trade Desk</h4>
                <span>Trusted Global Supply</span>
              </div>
              <button
                className="chat-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="chat-popup-body">
              <p>Welcome! How can we assist with your commodity procurement needs today?</p>

              <div className="chat-actions">
                <a
                  href="https://wa.me/251911000000?text=Hello%20NGV%20PLC%2C%20I%20am%20interested%20in%20Ethiopian%20commodities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-action-btn chat-whatsapp"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="mailto:info@nellyglobalventure.com?subject=Commodity%20Inquiry%20-%20NGV%20PLC"
                  className="chat-action-btn chat-email"
                >
                  <span>📧</span>
                  <span>Email Trade Desk</span>
                </a>

                <a
                  href="#contact"
                  className="chat-action-btn chat-rfq"
                  onClick={() => setIsOpen(false)}
                >
                  <span>📋</span>
                  <span>Submit Custom RFQ</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="floating-chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open Trade Support"
      >
        <span className="chat-trigger-dot" />
        {isOpen ? "✕" : "💬"}
      </motion.button>
    </div>
  );
}
