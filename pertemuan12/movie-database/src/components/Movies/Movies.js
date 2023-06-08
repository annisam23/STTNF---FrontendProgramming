/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import Movie from "../Movie/Movie";
import {nanoid} from "nanoid";
import StyledMovies from "./Movies.styled";

const Movies = (props) =>{
    //destructing props
    const{movies,setMovies,title} = props;

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
        <StyledMovies>
        <div>
            <section>
                <h2>{title ? title:"Latest"} Movies</h2>
                <div className="movie__container">
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
        </StyledMovies>

    )
}
export default Movies;