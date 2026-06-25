import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h1>DIY Key-Chain Shop</h1>

            <Link to = "/">Home</Link>
            <Link to = "/shop">Shop</Link>
        </nav>
    );
}

export default Navbar;