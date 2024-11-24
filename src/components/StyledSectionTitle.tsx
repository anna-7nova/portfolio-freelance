import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

export const StyledSectionTitle = styled.h2`
position: relative;
text-align: center;
margin-bottom: 90px;

${font({fontFamily: '"Josefin Sans", sans-serif', fontWeight: 600, Fmax: 36, Fmin: 30,})}
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

@media ${theme.media.mobile} {
    bottom: -27px; 
}
}

@media ${theme.media.mobile} {
    margin-bottom: 50px;
}
`
