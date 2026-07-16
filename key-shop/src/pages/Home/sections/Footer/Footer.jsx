// Footer.jsx
import { useState } from "react";
import styles from "./Footer.module.css";

const linkColumns = [
  {
    id: "shop",
    title: "Shop",
    links: ["All Keychains", "New Arrivals", "Custom Orders", "Gift Cards"],
  },
  {
    id: "company",
    title: "Company",
    links: ["Our Story", "Materials", "Reviews", "Contact"],
  },
  {
    id: "support",
    title: "Support",
    links: ["FAQs", "Shipping & Returns", "Care Guide", "Track Order"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>Echo &amp; Ember</p>
          <p className={styles.tagline}>Small charms, worn close.</p>

          <form className={styles.newsletter} onSubmit={handleSubmit}>
            <label htmlFor="footer-email" className={styles.newsletterLabel}>
              Get 10% off your first charm
            </label>
            <div className={styles.newsletterRow}>
              <input
                id="footer-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className={styles.confirmation}>
                You're on the list — welcome!
              </p>
            )}
          </form>
        </div>

        <div className={styles.linkGrid}>
          {linkColumns.map((column) => (
            <div key={column.id} className={styles.linkColumn}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Echo &amp; Ember. Handcrafted in small batches.</p>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Tiktok">Tiktok</a>
          <a href="#" aria-label="Pinterest">Pinterest</a>
          <a href="#" aria-label="Email">✉</a>
        </div>
      </div>
    </footer>
  );
}