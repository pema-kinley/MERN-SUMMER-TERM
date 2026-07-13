// FeatureCard.jsx
import styles from "./FeatureCard.module.css";

function FeatureCard({ 
    icon, 
    title, 
    description,
}) {
  return (
    <article className={styles.featureCard}>
      <span className={styles.ring} aria-hidden="true" />
      <div className={styles.header}>
        <span className={styles.icon}>
                {icon}
            </span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;