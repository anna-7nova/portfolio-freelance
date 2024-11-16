import React from 'react';
import myPhoto from '../../../assets/images/my_photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
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
}
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;
`

const SmallText = styled.span`
font-size: 14px;
`

const BigText = styled.h2`
font-family: "Josefin Sans", sans-serif;
font-weight: 700;
font-size: 50px;
letter-spacing: 0.05em;
margin: 10px 0;

span {
position: relative;
z-index: 0;

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
`

const MainText = styled.h1`
font-weight: 400;
font-size: 27px;
`
