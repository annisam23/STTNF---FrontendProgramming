import {useEffect,useState} from "react";
import Axios from "axios"
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";

function TopRated(){

    // membuat state movies
    const [movies, setMovies] = useState([]);
    const title = "Top Rated";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function getTopRatedMovies(){
            const responses = await Axios(ENDPOINTS.TOP_RATED);
            // simpan data ke state movie
            setMovies(responses.data.results);
        }
        getTopRatedMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(movies)

    return (
        <>
            <Hero />
            <Movies movies={movies} title={title}/>
        </>
    );
}


export default TopRated;