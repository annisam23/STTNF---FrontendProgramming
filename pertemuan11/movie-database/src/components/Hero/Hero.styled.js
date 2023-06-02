import { styled } from "styled-components";
const HeroStyled = styled.div`
    margin: 1rem;

    section{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left{
        margin-bottom: 1rem;
    }

    h2{
        color:#B696CF;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }
    h3{
        color: #118AB2;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p{
        color: #64748B;
        margin-bottom: 1rem;
    }
    img{
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }
    /*Medium screen*/
@media (min-width:768px){

}

/*large screen*/
@media (min-width:922px){
        max-width: 1200px;
        margin: 3rem auto;
    

    section{
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .hero__left{
        flex-basis: 40%;
    }

    .hero__right{
        flex-basis: 60%;
    }
`;
export default HeroStyled;