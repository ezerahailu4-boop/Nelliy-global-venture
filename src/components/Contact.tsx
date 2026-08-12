import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    commodity: "coffee",
    volume: "1-container",
    deliveryTerm: "fob",
    message: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        org: "",
        commodity: "coffee",
        volume: "1-container",
        deliveryTerm: "fob",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="wrap contact-inner">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag on-dark">Request Quotation &amp; Inquiries</span>
          <h2>
            Let's build a
            <br />
            reliable supply line.
          </h2>
          <p className="contact-desc">
            Whether you are procuring export-grade Ethiopian coffee, structural steel for construction projects, or commercial fleet lubricants — NGV PLC is your strategic supply partner.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-icon">📧</span>
              <div>
                <span className="contact-detail-label">Direct Procurement Email</span>
                <a href="mailto:info@nellyglobalventure.com">info@nellyglobalventure.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">📍</span>
              <div>
                <span className="contact-detail-label">Headquarters</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">🌐</span>
              <div>
                <span className="contact-detail-label">Trade Gateways</span>
                <span>Domestic Logistics Hubs · Djibouti Port Corridor</span>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">💬</span>
              <div>
                <span className="contact-detail-label">Trade Desk WhatsApp / Phone</span>
                <a
                  href="https://wa.me/251911000000?text=Hello%20NGV%20PLC%2C%20I%20would%20like%20to%20inquire%20about%20commodities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-contact-link"
                >
                  Chat with Trade Representative →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Structured RFQ Form */}
        <motion.form
          className="contact-form glass-card-dark"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="form-header">
            <h3>Commodity RFQ &amp; Inquiry</h3>
            <p>Fill out the parameters below to receive a formal quotation.</p>
          </div>

          {/* Commodity Selector */}
          <div className="form-group">
            <label className="form-label">Select Commodity of Interest</label>
            <div className="commodity-radio-group">
              {[
                { id: "coffee", label: "☕ Coffee", icon: "☕" },
                { id: "steel", label: "🔩 Steel", icon: "🔩" },
                { id: "lubricants", label: "🛢️ Lubricants", icon: "🛢️" },
                { id: "multiple", label: "🌐 Multiple", icon: "🌐" },
              ].map((c) => (
                <label
                  key={c.id}
                  className={`commodity-radio-btn${form.commodity === c.id ? " active" : ""}`}
                >
                  <input
                    type="radio"
                    name="commodity"
                    value={c.id}
                    checked={form.commodity === c.id}
                    onChange={(e) => setForm({ ...form, commodity: e.target.value })}
                  />
                  <span>{c.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Full Name *</label>
              <input
                required
                placeholder="e.g. Abebe Bikila / John Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Corporate Email *</label>
              <input
                required
                type="email"
                placeholder="procurement@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Company / Organization</label>
              <input
                placeholder="Supermarket / Construction / Trader"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Delivery Terms</label>
              <select
                className="form-select"
                value={form.deliveryTerm}
                onChange={(e) => setForm({ ...form, deliveryTerm: e.target.value })}
              >
                <option value="domestic">Domestic Wholesale (Addis Ababa / Regional)</option>
                <option value="fob">FOB (Djibouti Port Export)</option>
                <option value="cif">CIF (International Destination Port)</option>
                <option value="ex-works">Ex-Warehouse</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Inquiry Details / Target Volume</label>
            <textarea
              required
              rows={3}
              placeholder="Specify product types, grades, volume (e.g. 20 MT / 500 drums / 100 bags), target delivery timeline..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <motion.button
            className="btn btn-primary btn-glow form-submit-btn"
            type="submit"
            disabled={status === "sending"}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
          >
            {status === "sending" ? "Submitting Quotation Request…" : "Submit RFQ Request ➔"}
          </motion.button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                key="ok"
                className="form-status success-box"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <b>✓ Quotation Request Received</b>
                <p>Our commodity trading desk will review your specifications and contact you shortly with formal pricing.</p>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                key="err"
                className="form-status error-box"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <b>Notice:</b> Direct email is also open at{" "}
                <a href="mailto:info@nellyglobalventure.com">info@nellyglobalventure.com</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
