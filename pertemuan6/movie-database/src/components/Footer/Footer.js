import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Created by <a className={styles.linkedin} href="https://www.linkedin.com/in/annisa-maulida-3549241a9/">@ansey</a></p>
            </footer>
        </div>
    )
}
export default Footer;