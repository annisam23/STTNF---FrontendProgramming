/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import List from "../List/List";
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div>
                <h2 className={styles.footer_name}>Covid ID</h2>
                <p className={styles.footer_owner}>2023 All reserved by <a href="">Annisa M</a></p>
                </div>
                <div>
                    <List/>
                </div>
            </footer>
        </div>
    )
}

export default Footer;