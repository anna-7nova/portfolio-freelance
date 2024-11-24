import React from 'react';
import styled from 'styled-components';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './projects/Project';
import projectOne from '../../../assets/images/Project_1.png';
import projectTwo from '../../../assets/images/Project_2.png';
import { Container } from '../../../components/Container';

const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <StyledSectionTitle>My Works</StyledSectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
                    <Project srcImage={projectOne} title="Social network" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    <Project srcImage={projectTwo} title="Timer" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim" />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`