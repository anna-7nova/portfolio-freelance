import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { Menu } from '../../components/menu/Menu';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center'>
                <span>Anna</span>
                <StyledFooterList>
                    <StyledFooterItems><a href="">
                        <Icon iconId="instagram" width="21px" height="21px" viewBox="0 0 21 21" />
                    </a>
                    </StyledFooterItems>
                    <StyledFooterItems><a href="">
                        <Icon iconId="telegram" width="21px" height="21px" viewBox="0 0 21 21" />
                    </a>
                    </StyledFooterItems>
                        <StyledFooterItems><a href="">
                            <Icon iconId="vk" width="21px" height="21px" viewBox="0 0 21 21" />
                        </a>
                        </StyledFooterItems>
                        <StyledFooterItems><a href="">
                            <Icon iconId="linkedIn" width="21px" height="21px" viewBox="0 0 21 21" />
                        </a>
                        </StyledFooterItems>
                </StyledFooterList>
                <small>© 2024 Anna Semenova, All Rights Reserved.</small>
            </FlexWrapper>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
background-color: #f1e4d6;
min-height: 30vh;
`
const StyledFooterList = styled.ul`
display: flex;
`

const StyledFooterItems = styled.li`
margin: 15px;
`