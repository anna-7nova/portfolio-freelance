import React from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Slider } from '../../../components/slider/Slider';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <StyledSectionTitle>Testimony</StyledSectionTitle>
            <FlexWrapper align="center" direction="column">
                <Icon iconId="quote" />
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
}

const StyledTestimony = styled.section`
background-color: #e1b3b3;
`