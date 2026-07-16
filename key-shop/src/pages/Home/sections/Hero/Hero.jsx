import styles from "./Hero.module.css";
import heroImage from "./assets/hero.png";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <p>Handcrafted Keepsakes</p>

                <h1>
                    Carry What Matters Most
                </h1>

                <p>
                    Transform your memories, passions, and imagination into handcrafted keepsakes made uniquely for you.
                </p>

                <div className={styles.actions}>
                    <button className={styles.primaryButton}>Create Yours</button>
                    <button className={styles.secondaryButton}>Explore Creations</button>
                </div>
            </div>

            <div className={styles.image}>
                <img src={heroImage} alt ="Handcrafted memory keychain" />
            </div>
        </section>
    );
}

export default Hero;