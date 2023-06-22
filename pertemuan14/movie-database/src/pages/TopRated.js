import {useEffect} from "react";
import Axios from "axios"
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../features/moviesSlice";
function TopRated(){
    // const [movies, setMovies] = useState([]);
    const title = "Top Rated";
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getTopRatedMovies();
    },[])

        async function getTopRatedMovies(){
            const responses = await Axios(ENDPOINTS.TOP_RATED);
            const movies = (responses.data.results);

            dispatch(updateMovies(movies))
        }

    return (
        <>
            <Hero />
            <Movies title={title}/>
        </>
    );
}


export default TopRated;