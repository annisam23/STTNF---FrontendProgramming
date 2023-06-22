/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import StyledMovies from "./Movies.styled";

const Movies = (props) =>{
    //destructing props
    const{title} = props;

    const movies= useSelector((store)=> store.movies.movies);
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
                </div>
            </section>
        </div>
        </StyledMovies>

    )
}
export default Movies;