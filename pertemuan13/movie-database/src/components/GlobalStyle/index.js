import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Prompt:wght@300;400;500;700;800;900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    margin:0;
    font-family:'Poppins',sans-serif;
}
`;

export default GlobalStyle;