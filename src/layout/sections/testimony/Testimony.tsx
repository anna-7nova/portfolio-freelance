import React from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Slider } from '../../../components/slider/Slider';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import {S} from '../../sections/skills/Skills_Styles'

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <StyledSectionTitle>Testimony</StyledSectionTitle>
                <FlexWrapper align="center" direction="column">
                    <S.StyledIcon>
                        <Icon iconId="quote" />
                    </S.StyledIcon>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
}

const StyledTestimony = styled.section`
${S.StyledIcon} {
margin: 32px 0 65px;

@media ${theme.media.mobile} {
    margin: 65px 0 65px;
}
}
`
