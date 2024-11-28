import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Footer_Styles'

const footerItemsData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedIn"
    },

]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.FooterContainer>
                <FlexWrapper direction='column' align='center'>
                    <S.Name>Anna</S.Name>
                    <S.StyledFooterList>
                        {footerItemsData.map((f: { iconId: string }, index: number) => {
                            return (
                                <S.StyledFooterItems key={index} ><a href="">
                                    <Icon iconId={f.iconId} width="21px" height="21px" viewBox="0 0 21 21" />
                                </a>
                                </S.StyledFooterItems>
                            )
                        })}
                    </S.StyledFooterList>
                    <small>© 2024 Anna Semenova, All Rights Reserved.</small>
                </FlexWrapper>
            </S.FooterContainer>
        </S.Footer>
    );
}

