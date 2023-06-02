import { styled } from "styled-components"; 

const FooterStyled = styled.div`
background-color: ${({theme})=>theme.colors.primary};
color: #fff;
padding: 1rem;
text-align: center;

.linkedin{
    color: #fff;
    text-decoration:none;
}
.linkedin:hover{
    color: #118AB2;
}
.linkedin:active{
    color: #0F172A;
}

h2,p{
    margin-bottom: 1rem;
}

/*Medium Screen*/
@media (min-width:768px){

}

/*Large Screen*/
@media (min-width:992px){

}
`;

export default FooterStyled;