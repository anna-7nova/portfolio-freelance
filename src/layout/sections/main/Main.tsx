import React from 'react';
import myPhoto from '../../../assets/images/my_photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-around' align='center' wrap='wrap'>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <BigText>I am <span>Anna Semenova</span></BigText>
                        <MainText>A Web Developer.</MainText>
                    </div>
                    <PhotoWrapper>
                        <Photo src={myPhoto} />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`
min-height: 100vh;
background-color: #ccb4dd;
display: flex;
`

const PhotoWrapper = styled.div`
position: relative;
z-index: 0;
margin: 65px 35px 0 0;

&::before {
content: "";
display: inline-block;
width: 360px;
height: 470px;
border: 5px solid ${theme.colors.accent};

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
letter-spacing: 0.05em;
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
    bottom: 0;
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
