/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () =>{
    return(
        <div className={styles.container}>
            <nav className= {styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div>
                {/* 
                    * Membuat link Navigasi
                    * menggunakan Component <Link/>
                */}
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/create">Add Movie</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/popular">Popular</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/now">Now Playing</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;