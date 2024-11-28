import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Slider = styled.div`
max-width: 600px;
display: flex;
flex-direction: column;
align-items: center;
`
const Slide = styled.div`
text-align: center;

p{
max-width: 500px;
}

div {
margin: 22px 0 42px;

font-family: "Josefin Sans", sans-serif;
font-weight: 600;
font-size: 16px;
letter-spacing: 0.06em;
text-transform: uppercase;
}
`
const Pagination = styled.div`
line-height: 0; // to remove unnessecary space 
span {
display: inline-block;
border-radius: 3.5px;
width: 7px;
height: 7px;
background-color: ${theme.colors.thirdColor};

&+span {
margin-left: 5px;
}

&.active {
width: 20px;
background-color: ${theme.colors.accent};
}
}
`

export const S = {
    Slider,
    Slide,
    Pagination
}