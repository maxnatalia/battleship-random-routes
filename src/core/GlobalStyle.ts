import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        letter-spacing: 1.6px;
        color: ${({ theme }) => theme.color.primary};
        background-color: ${({ theme }) => theme.color.dark};
        overflow-x: hidden;
    }
`;
