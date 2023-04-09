/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import styles from "./Hero.module.css"

const Hero = () => {
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero_left}>
                    <h2 className={styles.hero_title}>Covid ID</h2>
                    <h4 className={styles.hero_minititle}>Monitoring Perkembangan Covid 19</h4>
                    <p className={styles.hero_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <button 
                    className={styles.hero_button}
                    type="submit"
                    >Vaccine</button>
                </div>
                <div  className={styles.hero_right}>
                    <img 
                    className={styles.hero_image}
                    src="https://img.freepik.com/free-vector/fight-virus-concept_52683-36504.jpg?w=1380&t=st=1679990089~exp=1679990689~hmac=b769bf809a3ad4236b9ca0bd2ca5e60aa786db3c4829c20e4afad7ae1ed8d3cc"
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero;