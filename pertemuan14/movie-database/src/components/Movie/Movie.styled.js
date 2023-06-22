import { styled } from "styled-components";

const StyledMovie = styled.div`
    margin-bottom:1rem;

    img{
        border-radius: 20px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }
    h3{
        color: #B696CF;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
        
    }
    p{
        color: #64748b;
        margin-bottom: 1rem;
    }
    a{
        text-decoration:none;
    }
    /* Medium Screen */
    @media (min-width: 768px) {
        flex-basis: 50%;
}
    /* Large Screen */
    @media (min-width: 992px) {
        flex-basis: 25%;
        padding:1rem;
    }

`;

export default StyledMovie;