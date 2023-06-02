/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";

const AddMovieForm = (props) => {
    const{movies,setMovies} = props;

    // Membuat state Objectnya
    const [formData,setformData] = useState({
        title:"",
        date:"",
        gambar:"",
        genre:""
    })

    //state untuk error inputnya
    const [formError,setformError] = useState({
        isTitleError:false,
        isDateError:false,
        isGambarError:false,
        isGenreError:false,
    })


    // buat function untuk handle semua input form
    function handleChange(e){
        const {name,value} = e.target;

        setformData({
            ...formData,
            [name] : value,
        });
    }

    // destruct form data
    const {title,date,gambar,genre} = formData;

    //destruct form error
    const{isTitleError,isDateError,isGambarError,isGenreError} = formError;


    function validate(){
        if(title === ""){
        setformError({
            ...formError,
            isTitleError:true
        });return false;
        }else if(date === ""){
            setformError({
                ...formError,
                isDateError:true
            });return false;
        }else if(gambar === ""){
            setformError({
                ...formError,
                isGambarError:true
            });return false;
        }else if(genre === ""){
            setformError({
                ...formError,
                isGenreError:true
            }); return false;
            
        }else{
            setformError({
                isTitleError:false,
                isDateError:false,
                isGambarError:false,
                isGenreError:false
            });
        
            return true;
        }
        }

    function addMovie(){
        const movie = {
            id:nanoid(),
            title:title,
            year:date,
            poster:gambar,
            type:genre
        }

        setMovies([...movies,movie]);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        validate() && addMovie();
    }
    
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
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Title 
                            </label>
                            <input
                            //memberikan event onChange
                            onChange={handleChange}
                            className = {styles.form__input}
                            type="text" 
                            name="title" 
                            //memberikan value input : title
                            value={title}>
                            </input>
                            {isTitleError && <Alert>Title wajib diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Date 
                            </label>
                            <input
                            onChange={handleChange}
                            className = {styles.form__input}
                            type="number" 
                            id="date"
                            name="date"
                            value={date}/>
                            {isDateError && <Alert> Date wajib diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label}>
                                Gambar 
                            </label>
                            <input
                            onChange={handleChange}
                            className = {styles.form__input}
                            type="text" 
                            id="gambar"
                            name="gambar"
                            value={gambar}/>
                            {isGambarError&& <Alert> Gambar wajib diisi</Alert>}
                        </div>

                        <div className={styles.form__group}>
                        <label className={styles.form__label}>
                                Genre
                            </label>
                                <select  
                            onChange={handleChange}
                            className = {styles.form__input}
                            name="genre" 
                            id="genre"
                            value={genre}>
                                    <option value="">Pilih salah satu</option>
                                    <opton value="action">Action</opton>
                                    <option value="comedy">Comedy</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="horror">Horror</option>
                                    <option value="romance">Romance</option>
                                    <option value="thriller">Thriller</option>
                                </select>
                                {isGenreError&& <Alert> Gambar wajib diisi</Alert>}
                        </div>

                        <div>
                            <Button variant="" full >Add Movie</Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;