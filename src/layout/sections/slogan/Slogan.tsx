import React from 'react';
import styled from 'styled-components';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <StyledSectionTitle>I Am Available For Freelance</StyledSectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
}

const StyledSlogan = styled.section`
background-color: #e1b3b3;
min-height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
`
