import React from 'react';
import styled from 'styled-components';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './projects/Project';
import projectOne from '../../../assets/images/Project_1.png';
import projectTwo from '../../../assets/images/Project_2.png';

const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <StyledSectionTitle>My Works</StyledSectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify='space-around'>
                <Project srcImage={projectOne} title="Social Network"  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <Project srcImage={projectTwo} title="Timer" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
background-color: #f1e4d6;
`