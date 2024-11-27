import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <FlexWrapper direction='column' align='center'>
                    <Name>Anna</Name>
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
            </FooterContainer>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
background-color: ${theme.colors.primaryBg};
padding: 40px 0;

small {
font-weight: 400;
font-size: 12px;
opacity: 0.5;
}
`

const FooterContainer = styled.div`
max-width: 1170px;
width: 100%;
min-height: 100%;
padding: 0 15px;
margin: 0 auto;
outline: 1px solid red;
`
const Name = styled.span`
${font({fontFamily: '"Josefin Sans", sans-serif', fontWeight: 700, Fmax: 22, Fmin: 16})}
letter-spacing: 0.14em;
`

const StyledFooterList = styled.ul`
display: flex;
gap: 20px;
margin: 30px 0;
`

const StyledFooterItems = styled.li`
a {
border-radius: 50%;
width: 35px;
height: 35px;
background-color: ${theme.colors.iconBg};
display: flex;
justify-content: center;
align-items: center;

color: ${theme.colors.accent};

&:hover {
background-color: ${theme.colors.accent};
color: ${theme.colors.primaryBg};
transform: translateY(-4px);
}
}
`