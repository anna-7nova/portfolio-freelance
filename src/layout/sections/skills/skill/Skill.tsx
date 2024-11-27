import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';


type SkillPropsType = {
    IconSkillId: string
    titleValue: string
    textValue: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction='column' align='center'>
                <StyledIcon>
                    <Icon iconId={props.IconSkillId} />
                </StyledIcon>
                <SkillTitle>{props.titleValue}</SkillTitle>
                <SkillText>{props.textValue}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
}

const StyledSkill = styled.div`
width: 330px;
flex-grow: 1;
padding: 45px 20px 60px 20px;

@media ${theme.media.mobile} {
    padding: 62px 0 40px 0;
}
`

export const StyledIcon = styled.div`
position: relative;
z-index:0;

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
}
`

const SkillTitle = styled.h3`
display: inline-clock;
padding: 65px 0 14px 0;

text-transform: uppercase;
`
const SkillText = styled.p`
text-align: center;
`