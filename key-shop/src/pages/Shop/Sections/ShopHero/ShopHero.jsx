import styles from "./ShopHero.module.css";

function ShopHero() {
    return (
    <div className={styles.hero}>
      <p className={styles.eyebrow}>The Collection</p>
      <h1>Charms for every story you carry</h1>
      <p className={styles.subtitle}>
        Hand-shaped, hand-stamped, and made to hold onto.
      </p>
    </div>
  );
}

export default ShopHero;