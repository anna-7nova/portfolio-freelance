import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
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

&::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 100%;
    background-color: ${theme.colors.accent};
    // opacity: 0; //after use like a separate component don't work

    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
}
`