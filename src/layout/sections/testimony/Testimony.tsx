import React from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Slider } from '../../../components/slider/Slider';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <StyledSectionTitle>Testimony</StyledSectionTitle>
                <FlexWrapper align="center" direction="column">
                    <WrapperIcon>
                        <Icon iconId="quote" />
                    </WrapperIcon>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
}

const StyledTestimony = styled.section`
background-color: #e1b3b3;
`

const WrapperIcon = styled.div`
position: relative;
z-index:0;
padding: 82px 0 82px;

&::before {
position: absolute;
z-index: -1;
top: 50%;
left: 50%;
transform-origin: top left;

content: "";
display: inline-block;
height: 80px;
width: 80px;
transform: rotate(45deg) translate(-50%, -50%);
background-color: ${theme.colors.iconBg};
`