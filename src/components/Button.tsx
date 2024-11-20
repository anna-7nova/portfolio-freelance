import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Button = styled.button`
position: relative;
z-index: 0;
width: 170px;
height: 32px;

font-weight: 400;
font-size: 14px;
letter-spacing: 0.07em;
text-transform: uppercase;

&::before {
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
z-index: -1;

content: "";
display: inline-block;
height: 10px;
width: 77px;
background-color: ${theme.colors.accent};
}

&:hover {
background-color: ${theme.colors.accent};
}
`
