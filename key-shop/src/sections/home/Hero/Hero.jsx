import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.hero}>
            <div>
                <p>handcrafted Keepsakes</p>

                <h1>
                    Carry What Matters Most
                </h1>

                <p>
                    Transform your memories, passions, and imagination into handcrafted keepsakes made uniquely for you.
                </p>

                <div>
                    <button>Create Yours</button>
                    <button>Explore Creations</button>
                </div>
            </div>

            <div className={styles.content}>
                <h2>image Coming Soon</h2>
            </div>
        </section>
    );
}

export default Hero;