import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';


type SkillPropsType = {
    IconSkillId: string
    titleValue: string
    textValue: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.IconSkillId}/>
            <SkillTitle>{props.titleValue}</SkillTitle>
            <SkillText>{props.textValue}</SkillText>
        </StyledSkill>
    );
}

const StyledSkill = styled.div`
width: 30%;
background-color: #133531;
margin: 10px;
`

const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`