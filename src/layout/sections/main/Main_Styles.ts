import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const StyledMain = styled.section`
min-height: 100vh;
background-color: #ccb4dd;
display: flex;
`

const PhotoWrapper = styled.div`
position: relative;
z-index: 0;
top: 5px;

&::before {
content: "";
display: inline-block;
width: 360px;
height: 470px;
outline: 5px solid ${theme.colors.accent};

position: absolute;
top: -24px;
left: 24px;
z-index: -1;

@media ${theme.media.mobile} {
    width: 314px;
    height: 414px; 
    top: -20px;
    left: 17px;
}
}

@media ${theme.media.mobile} {
    margin: 10px 35px 0 0;
}
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;

@media ${theme.media.mobile} {
    width: 310px;
    height: 380px;  
}
`

const SmallText = styled.span`
font-size: 14px;
`

const BigText = styled.h2`
${font({fontFamily:'"Josefin Sans", sans-serif', fontWeight: 700, Fmax: 50, Fmin: 36,})}
letter-spacing: 0.1em;
margin: 10px 0;

span {
position: relative;
z-index: 0;
white-space: nowrap;

    &::before {
    content:"";
    display: inline-block;
    height: 20px;
    width: 100%;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -6px;
    z-index: -1;
    }
}

@media ${theme.media.mobile} {
    margin: 15px 0 22px;
}
`

const MainText = styled.h1`
${font({Fmax: 27, Fmin: 20})}
`

export const S = {
    StyledMain,
    PhotoWrapper,
    Photo,
    SmallText,
    BigText,
    MainText
}