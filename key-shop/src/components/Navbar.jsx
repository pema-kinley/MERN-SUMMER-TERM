import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Echo & Ember</h1>

            <div className={styles.navLinks}>
                <Link to = "/">Home</Link>
                <Link to = "/shop">Shop</Link>
            </div>
        </nav>
    );
}

export default Navbar;