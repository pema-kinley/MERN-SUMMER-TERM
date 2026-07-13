// CTASection.jsx
import { useState } from "react";
import styles from "./FinalCTA.module.css";

export default function CTASection({ onCtaClick = () => {} }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <section className={styles.cta}>
      <div className={styles.tag}>
        <span className={styles.ring} aria-hidden="true" />

        <p className={styles.eyebrow}>CRAFTED FOR YOUR MEMORIES</p>
        <h2>Every story deserves a charm of its own.</h2>
        <p className={styles.subtitle}>
          Handcrafted, personalized, and made to be carried — not just worn.
        </p>

        <button
          type="button"
          className={`${styles.button} ${isPressed ? styles.pressed : ""}`}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          onClick={onCtaClick}
        >
          Design Your Keepsake
        </button>

        <p className={styles.note}>
          Ships in 3–5 days · Gift-boxed at no extra cost
        </p>
      </div>
    </section>
  );
}