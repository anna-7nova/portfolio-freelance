import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import {S} from './../Skills_Styles'


type SkillPropsType = {
    IconSkillId: string
    titleValue: string
    textValue: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <FlexWrapper direction='column' align='center'>
                <S.StyledIcon>
                    <Icon iconId={props.IconSkillId} />
                </S.StyledIcon>
                <S.SkillTitle>{props.titleValue}</S.SkillTitle>
                <S.SkillText>{props.textValue}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
}

