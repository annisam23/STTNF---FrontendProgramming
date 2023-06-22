/* eslint-disable jsx-a11y/alt-text */
import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";

const Movie = (props) => {
    //destrutcting object props
    const {movie} = props;

    return(
        <StyledMovie>
            <img src={movie.poster|| `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""></img>
            <Link to={`/movie/${movie.id}`}>
                <h3>{props.iteration && props.iteration + '.'} {movie.title}</h3>
            </Link>
            <p >{movie.year|| movie.release_date}</p>
        </StyledMovie>
    )
}
export default Movie;