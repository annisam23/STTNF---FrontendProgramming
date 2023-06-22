import {styled} from "styled-components";

const NavbarStyled = styled.div `
    background-color: ${({theme})=>theme.colors.primary};
    padding: 1rem;
    color: white;

    nav{
        display: flex;
    flex-direction: column;
    }

    h1{
        margin-bottom: 1rem;
        font-size: 2.4rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li{
        margin-bottom: 1rem;
    }
    .link{
        text-decoration: none;
        color: #fff;
    }

    /*Medium Screen*/
@media(min-width:768px){
    nav{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h1{
        margin-bottom: 0;
    }
    ul{
        flex-direction: row;
    }
    li{
        margin: 0 1rem;
    }
}

/*Large Screen*/
@media(min-width:992px){
    
}
`;
export default NavbarStyled;