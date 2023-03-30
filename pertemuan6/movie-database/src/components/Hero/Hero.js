import styles from "./Hero.module.css";
const Hero = () => {
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Thriller, Drama,Romance
                    </h3>
                    <p className={styles.hero__description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                    <button className={styles.hero__button}>Watch Now</button>
                </div>
                <div className="hero__right">
                    <img className={styles.hero__image} src="https://picsum.photos/536/354" alt="placeholder"></img>
                </div>
            </section>
        </div>
    );
}
export default Hero;