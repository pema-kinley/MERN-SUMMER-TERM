import styles from "./ProductCard.module.css";

function ProductCard({
    title,
    image,
    category,
    price,
    rating,
    reviewCount,
    isPersonalized,
}) {
    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <img src={image} alt={title} />
                {isPersonalized && (
                    <span className={styles.badge}>✨ Personalized</span>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.topInfo}>
                    <p className={styles.category}>{category}</p>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.rating}>
                        ⭐ {rating} <span className={styles.reviewCount}>({reviewCount} Reviews)</span>
                    </p>
                </div>

                <div className={styles.bottomInfo}>
                    <p className={styles.price}>Nu. {price}</p>
                    <button className={styles.addToCartButton}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;