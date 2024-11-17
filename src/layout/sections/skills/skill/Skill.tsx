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
width: 380px;
padding: 62px 20px 40px 20px;
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
padding: 70px 0 15px 0;

font-family: "Josefin Sans", sans-serif;
font-weight: 700;
font-size: 16px;
letter-spacing: 0.06em;
text-transform: uppercase;
`
const SkillText = styled.p`
font-weight: 400;
font-size: 14px;
text-align: center;
`