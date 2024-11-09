import React from 'react';
import myPhoto from '../../../assets/images/my_photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify='space-around' align='center'>
                <div>
                    <span>Hi There</span>
                    <h2>I am Anna Semenova</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={myPhoto} />
            </FlexWrapper>
        </StyledMain>
    );
}

const StyledMain = styled.div`
height: 70vh;
background-color: #ccb4dd;
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover;
`
