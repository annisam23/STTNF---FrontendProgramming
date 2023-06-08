import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";

function Detail(){
    const {id} = useParams();
    const [movies,setMovies] = useState([]);
    //const API_KEY = process.env.REACT_APP_API_KEY;
    const title = "Recommendations"

    useEffect(() =>{
        getRecommendations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    async function getRecommendations() {
        //const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response =await Axios(ENDPOINTS.RECOMMENDATIONS(id));
        setMovies(response.data.results);
    }

    return(
        <>
        <DetailMovie/>
        <Movies movies={movies} title={title}/>
        </>
        
    )
}

export default Detail;