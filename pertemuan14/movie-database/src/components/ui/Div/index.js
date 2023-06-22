//import styled Components
import styled from "styled-components";

/**
 * Tidak memakai ({}) tetapi memakai `` agar lebih mudah
 * styling menggunakan Tagged Template
 */

const Div = styled.div`


    //akses props variant
    // menangkap Props variant menggunakan function
    //pake shorthand operator yaitu ternary
    background-color:${({variant,theme}) => theme.colors[variant] || theme.colors.primary }


};
`;

export default Div;