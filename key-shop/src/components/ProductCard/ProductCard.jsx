import styles from "./ProductCard.module.css";

function ProductCard(props) {
    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <img 
                    src={props.image}
                    alt={props.title}
                />
            </div>
            <div className={styles.content}>
                <h3>{props.title}</h3>
                <p>{props.price}</p>

                <button className={styles.addToCartButton}>
                    Add to Cart
                </button>
            </div>

            
        </article>
    );
}

export default ProductCard;