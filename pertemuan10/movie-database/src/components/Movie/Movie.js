/* eslint-disable jsx-a11y/alt-text */
import StyledMovie from "./Movie.styled";

const Movie = (props) => {
    //destrutcting object props
    const {movie} = props;
    return(
        <StyledMovie>
            <img src={movie.poster} alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <p >{movie.year}</p>
        </StyledMovie>
    )
}
export default Movie;