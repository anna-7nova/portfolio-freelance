import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const StyledSectionTitle = styled.h2`
position: relative;
text-align: center;
margin-bottom: 90px;

font-family: "Josefin Sans", sans-serif;
font-weight: 600;
font-size: 36px;
letter-spacing: 0.14em;

&::before {
position: absolute;
bottom: -30px;
left: 50%;
transform: translate(-50%);

content: "";
display: inline-block;
height: 1px;
width: 55px;
background-color: ${theme.colors.accent};
}
`
