import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT_LINES } from "../content";

type CategoryFilter = "all" | "coffee" | "steel" | "lubricants";

const CATEGORY_TABS: { id: CategoryFilter; label: string; icon: string }[] = [
  { id: "all", label: "All Commodities", icon: "🌐" },
  { id: "coffee", label: "Ethiopian Coffee", icon: "☕" },
  { id: "steel", label: "Steel & Metals", icon: "🔩" },
  { id: "lubricants", label: "Lubricants & Oils", icon: "🛢️" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  // Listen to hash change from navbar dropdown links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#products-coffee") setActiveTab("coffee");
      else if (hash === "#products-steel") setActiveTab("steel");
      else if (hash === "#products-lubricants") setActiveTab("lubricants");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredProducts =
    activeTab === "all"
      ? PRODUCT_LINES
      : PRODUCT_LINES.filter((p) => p.category === activeTab);

  return (
    <section className="products" id="products">
      <div id="products-coffee" style={{ position: "relative", top: "-90px" }} />
      <div id="products-steel" style={{ position: "relative", top: "-90px" }} />
      <div id="products-lubricants" style={{ position: "relative", top: "-90px" }} />

      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-tag">Product Catalog &amp; Specifications</span>
            <h2>Strategic commodities.<br />Certified export &amp; wholesale grade.</h2>
          </div>
          <p className="section-note">
            Explore our standardized grades, technical specifications, and packaging options across coffee, steel, and lubricants.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="products-tabs">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`product-tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  className="tab-indicator"
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="products-catalog-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                layout
                className="catalog-card glass-card"
                key={product.id}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="catalog-image-wrap">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="catalog-image"
                    loading="lazy"
                  />
                  <div className="catalog-category-badge">
                    <span>{product.icon}</span>
                    <span style={{ textTransform: "capitalize" }}>{product.category}</span>
                  </div>
                </div>

                <div className="catalog-body">
                  <div className="catalog-header">
                    <h3>{product.title}</h3>
                  </div>
                  <p className="catalog-copy">{product.copy}</p>

                  {/* Technical Specs List */}
                  <div className="catalog-specs">
                    <span className="specs-title">Technical Specifications</span>
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <span className="spec-label">{spec.label}:</span>
                        <span className="spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="product-tags">
                    {product.tags.map((tag) => (
                      <span key={tag} className="product-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="catalog-footer">
                    <a
                      href={`#contact?item=${product.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Inquire / Request RFQ →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
