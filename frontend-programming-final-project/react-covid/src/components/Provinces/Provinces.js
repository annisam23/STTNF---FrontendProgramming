/* eslint-disable jsx-a11y/heading-has-content */
import Provinsi from "../Provinsi/Provinsi";
import styles from "./Provinces.module.css"

const Provinces = () => {
    
    return(
        <div className={styles.container}>
            <section className={styles.provinces}>
                <h2 className={styles.provinces_title}>Provinsi</h2>
                <h4 className={styles.provinces_desc}>Data Covid Berdasarkan Provinsi</h4>
            <div className={styles.provinces_container}>
            <Provinsi/>
            </div>
            </section>
        </div>
    )
}

export default Provinces;