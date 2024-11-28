import React from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './projects/Project';
import projectOne from '../../../assets/images/Project_1.png';
import projectTwo from '../../../assets/images/Project_2.png';
import { Container } from '../../../components/Container';
import {S} from './Works_Styles'


const worksItems = ["All", "landing page", "React", "spa"]

const projectData = [
    {
        srcImage: projectOne,
        title: "Social network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        srcImage: projectTwo,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <StyledSectionTitle>My Works</StyledSectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
                    {
                        projectData.map((p:{srcImage: string, title: string, text: string}, index: number) => {
                            return (
                                <Project key={index} srcImage={p.srcImage} title={p.title} text={p.text} />
                            )
                        })
                    }
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

