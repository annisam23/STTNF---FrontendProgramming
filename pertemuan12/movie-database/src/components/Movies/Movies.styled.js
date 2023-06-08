import { styled } from "styled-components";

const StyledMovies = styled.div`
/* Small Screen */
    text-align: center;
    padding: 1rem;

h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #B696CF;
}

button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #B696CF;
    color: #fff;
}

  /* Medium Screen */
@media (min-width: 768px) {
        max-width: 1200px;
        margin: 0 auto;
    

    .movie__container {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

}

  /* Large Screen */
@media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;
}
    

`;

export default StyledMovies;