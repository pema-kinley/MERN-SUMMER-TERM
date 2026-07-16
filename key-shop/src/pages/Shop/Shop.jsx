import { useState } from "react";

import ShopHero from "./Sections/ShopHero/ShopHero";
import Filter from "./Sections/Filters/Filters.jsx";
import ProductGrid from "./Sections/ProductGrid/ProductGrid";
import styles from "./Shop.module.css";
import { products } from "./Data/Products.jsx"

const categories = ["All", ...new Set(products.map((product) => product.category))];

function Shop(){
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section className={styles.shop}>
            <ShopHero />

            <Filter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <ProductGrid 
                products={products}
                searchTerm={searchTerm}
                activeCategory={activeCategory}
            />
        </section>
    );
}

export default Shop
