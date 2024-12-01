import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
font-weight: 400;
font-size: 14px;
letter-spacing: 0.07em;
text-transform: uppercase;
padding: 10px;

position: relative;
z-index: 0;

&:hover{
    &::before {
    opacity: 1;
    }
}

&::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 100%;
    background-color: ${theme.colors.accent};
    opacity: 0; 

    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;

    ${props => props.active && css<{active?: boolean}>`
    opacity: 1;
    `}
}
`