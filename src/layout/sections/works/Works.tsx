import React, { useState } from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { TabMenu, TabStatusType } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './projects/Project';
import projectOne from '../../../assets/images/Project_1.png';
import projectTwo from '../../../assets/images/Project_2.png';
import { Container } from '../../../components/Container';
import {S} from './Works_Styles'

const tubItems: Array<{status: TabStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },
]

const projectsData = [
    {
        srcImage: projectOne,
        title: "Social network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
    },
    {
        srcImage: projectTwo,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")

    let filteredWorks = projectsData

    if(currentFilterStatus === "landing") {
        filteredWorks = projectsData.filter(item => item.type==="landing")
    }
    if(currentFilterStatus === "react") {
        filteredWorks = projectsData.filter(item => item.type==="react")
    }
    if(currentFilterStatus === "spa") {
        filteredWorks = projectsData.filter(item => item.type==="spa")
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <StyledSectionTitle>My Works</StyledSectionTitle>
                <TabMenu tabItems={tubItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
                    {
                        filteredWorks.map((p:{srcImage: string, title: string, text: string}, index: number) => {
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

