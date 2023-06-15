//import styled Components
import styled,{css} from "styled-components";

/**
 * Tidak memakai ({}) tetapi memakai `` agar lebih mudah
 * styling menggunakan Tagged Template
 */

const Button = styled.button`
    // 0.8 rem untuk atas dan bawah, 2rem untuk kanan kiri
    padding: 0.8rem 2rem;
    border:none;
    border-radius:10px;
    color:#fff;
    background-color: #B696CF;
    cursor:poinetr;
    text-decoration:none;

    //akses props variant
    // menangkap Props variant menggunakan function
    //pake shorthand operator yaitu ternary
    background-color:${({variant,theme}) => theme.colors[variant] || theme.colors.primary }

    //akses props full
    ${(props) => props.full && css`
    display:block;
    width:100%
    `}

    ${function(props){
    if(props.size === "sm"){
        return props.theme.size.sm;
    }else if(props.size === "md"){
        return props.theme.size.md;
    }else if(props.size === "lg"){
        return props.theme.size.lg;
    }
}
};
`;

export default Button