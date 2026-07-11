// TestimonialCard.jsx
import styles from './TestimonialCard.module.css';

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarRating({ rating, max = 5 }) {
  const fillPercent = Math.max(0, Math.min(1, rating / max)) * 100;

  return (
    <div className={styles.rating}>
      <div className={styles.stars} aria-label={`${rating} out of ${max} stars`}>
        <div className={styles.starsBase}>
          {Array.from({ length: max }).map((_, i) => <Star key={i} />)}
        </div>
        <div className={styles.starsFill} style={{ width: `${fillPercent}%` }}>
          {Array.from({ length: max }).map((_, i) => <Star key={i} />)}
        </div>
      </div>
      <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
    </div>
  );
}

function TestimonialCard({
  name,
  profileImage,
  rating,
  review,
  location
}) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.profileSection}>
        <img src={profileImage} alt={name} />
        <div className={styles.customerInfo}>
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>

      <StarRating rating={rating} />

      <p className={styles.review}>{review}</p>
    </div>
  );
}

export default TestimonialCard;