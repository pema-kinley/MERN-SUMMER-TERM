import { useMemo } from "react";
import ProductCard from "@/components/ProductCard/ProductCard.jsx";
import styles from "./ProductGrid.module.css";

function ProductGrid({ 
    products,
    searchTerm,
    activeCategory 
}) {
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchTerm, activeCategory]);

  if (filteredProducts.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No charms match your search. Try a different name or category.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            rating={product.rating}
            reviewCount={product.reviewCount}
            isPersonalized={product.isPersonalized}
        />
      ))}
    </div>
  );
}

export default ProductGrid;