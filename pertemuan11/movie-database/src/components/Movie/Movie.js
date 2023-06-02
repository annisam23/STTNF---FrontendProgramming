/* eslint-disable jsx-a11y/alt-text */
import StyledMovie from "./Movie.styled";

const Movie = (props) => {
    //destrutcting object props
    const {title,year,poster,release_date,poster_path} = props.movie;

    return(
        <StyledMovie>
            <img src={poster|| `https://image.tmdb.org/t/p/w300/${poster_path}`} alt=""></img>
            <h3>{props.iteration && props.iteration + '.'} {title}</h3>
            <p >{year|| release_date}</p>
        </StyledMovie>
    )
}
export default Movie;