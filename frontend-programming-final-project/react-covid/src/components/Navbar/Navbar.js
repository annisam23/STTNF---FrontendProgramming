/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import List from "../List/List";
import styles from "./Navbar.module.css";

const Navbar =() => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar_name}>Covid ID</h1>
                </div>
                <div>
                    <List/>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;