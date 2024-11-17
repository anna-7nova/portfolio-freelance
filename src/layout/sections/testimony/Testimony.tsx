import React from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Slider } from '../../../components/slider/Slider';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { StyledIcon } from '../skills/skill/Skill';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <StyledSectionTitle>Testimony</StyledSectionTitle>
                <FlexWrapper align="center" direction="column">
                    <StyledIcon>
                        <Icon iconId="quote" />
                    </StyledIcon>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
}

const StyledTestimony = styled.section`
${StyledIcon} {
margin: 32px 0 72px;
}
`
