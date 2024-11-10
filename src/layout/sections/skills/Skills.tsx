import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Skill } from './skill/Skill';



export const Skills = () => {
    return (
        <StyledSkills>
            <StyledSectionTitle>My Skills</StyledSectionTitle>
            <FlexWrapper wrap='wrap' justify='space-between'>
            <Skill IconSkillId="code" titleValue="html5" textValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill IconSkillId="css" titleValue="css3" textValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill IconSkillId="react" titleValue="React" textValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill IconSkillId="typescript" titleValue="typescript" textValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill IconSkillId="styledComponents" titleValue="styled components" textValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill IconSkillId="figma" titleValue="web design" textValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
background-color: #7fe5c0;
`