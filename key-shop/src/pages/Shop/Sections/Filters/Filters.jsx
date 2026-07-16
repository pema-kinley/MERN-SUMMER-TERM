import styles from "./Filters.module.css";

function Filters({
    searchTerm,
    setSearchTerm,
    categories, 
    activeCategory,
    setActiveCategory,
}) {
    return (
        <section className={styles.filters}>
            <div className={styles.pills}>
                {
                    categories.map((category) =>(
                        <button
                            key={category}
                            type="button"
                            className={`${styles.pill} ${
                            activeCategory === category ? styles.active : ""
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>

            <input
            type="text"
            placeholder="Search charms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            />
        </section>
    );
}


export default Filters;