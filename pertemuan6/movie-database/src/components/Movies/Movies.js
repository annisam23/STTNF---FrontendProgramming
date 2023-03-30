/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
//import data movies
import data from "../../utils/constants/data";
import {useState} from "react";
import {nanoid} from "nanoid";

const Movies = () =>{
    //membuat var movies
    const [movies,setMovies] = useState(data);

    //membuat function
    function handleClick(){
        const newFilm =  {
            id: nanoid(),
            title: "Jigsaw",
            year: "2022",
            type: "Movie",
            poster:
            "https://picsum.photos/300/400",
        };
        
        setMovies([...movies,newFilm]);
    }
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                {
                    //melooping movies yang ada didalam data
                    //menggunakan map karena untuk mengembalikan data baru
                    movies.map(function(movie){
                        return<Movie key={movie.id} movie={movie}/>;
                    })
                }
                <button onClick={handleClick}>Tambah Film</button>
                </div>
            </section>
        </div>
    )
}
export default Movies;