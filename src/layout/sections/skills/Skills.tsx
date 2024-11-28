import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

const skillsData = [
    {
        IconSkillId: "code",
        titleValue: "html5",
        textValue: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        IconSkillId: "css",
        titleValue: "css3",
        textValue: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        IconSkillId: "react",
        titleValue: "React",
        textValue: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        IconSkillId: "typescript",
        titleValue: "typescript",
        textValue: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        IconSkillId: "styledComponents",
        titleValue: "styled components",
        textValue: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        IconSkillId: "figma",
        titleValue: "web design",
        textValue: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
]

export const Skills: React.FC = () => {
    return (
        <section>
            <Container>
                <StyledSectionTitle>My Skills</StyledSectionTitle>
                <FlexWrapper wrap='wrap' justify='space-between'>
                    {
                        skillsData.map((s:{IconSkillId:string, titleValue: string, textValue: string}, index: number) => {
                            return (
                                <Skill key={index} 
                                        IconSkillId={s.IconSkillId} 
                                        titleValue={s.titleValue} 
                                        textValue={s.textValue}/>
                            )
                        })
                    }
                </FlexWrapper>
            </Container>
        </section>
    );
};