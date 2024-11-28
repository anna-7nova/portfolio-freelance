import React from 'react';
import myPhoto from '../../../assets/images/my_photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper justify='space-around' align='center' wrap='wrap'>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.BigText>I am <span>Anna Semenova</span></S.BigText>
                        <S.MainText>A Web Developer.</S.MainText>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={myPhoto} />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
}

