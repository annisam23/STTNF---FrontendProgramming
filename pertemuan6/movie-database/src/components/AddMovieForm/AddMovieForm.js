/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                    className={styles.form__image}
                    src="https://picsum.photos/536/354"
                    alt=""
                    />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Title 
                            </label>
                            <input
                            className = {styles.form__input}
                            type="text" name="title">
                            </input>
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Date 
                            </label>
                            <input
                            className = {styles.form__input}
                            type="text" name="date">
                            </input>
                        </div>
                        <div>
                            <button className={styles.form__button}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddMovieForm;