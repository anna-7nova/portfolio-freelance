import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Button = styled.button`
position: relative;
padding: 10px 57px;

font-weight: 400;
font-size: 14px;
letter-spacing: 0.07em;
text-transform: uppercase;

&::before {
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);

content: "";
display: inline-block;
height: 10px;
width: 77px;
background-color: ${theme.colors.accent};
}
`
