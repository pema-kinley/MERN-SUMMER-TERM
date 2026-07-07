import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./FeatureCreation.module.css";
import amber from "../../assets/images/products/amber.webp";
import little_dog from "../../assets/images/products/little-dog.webp";
import little_cat from "../../assets/images/products/little-cat.webp";


function FeaturedCreations() {
    const creations = [
                        {
                            id: 1,
                            title: "Pet Portrait Keychain",
                            category: "Pets",
                            image: amber,
                            price: 500,
                            rating: 4.8,
                            reviewCount: 124,
                            isPersonalized: true,
                        },
                        {
                            id: 2,
                            title: "Wedding Bouquet",
                            category: "Weddings",
                            image: little_dog,
                            price: 800,
                            rating: 4.9,
                            reviewCount: 89,
                            isPersonalized: false,
                        },
                        {
                            id: 3,
                            title: "Baby Keepsake",
                            category: "Babies",
                            image: little_cat,
                            price: 1200,
                            rating: 4.7,
                            reviewCount: 67,
                            isPersonalized: true,
                        },
                    ];

    return (
        
            <section className={styles.featureCreations}>
                <h2>Featured Creations</h2>

                <div className={styles.grid}>
                    {creations.map((creation) => (
                        <ProductCard
                            key={creation.id}
                            image={creation.image}
                            title={creation.title}
                            category={creation.category}
                            price={creation.price}
                            rating={creation.rating}
                            reviewCount={creation.reviewCount}
                            isPersonalized={creation.isPersonalized}
                        />
                    ))}
                </div>
            </section>
    );
}

export default FeaturedCreations;