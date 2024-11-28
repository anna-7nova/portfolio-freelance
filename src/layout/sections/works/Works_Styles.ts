import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Link } from '../../../components/Link';
import { Button } from '../../../components/Button';

// Works

const Works = styled.section`
${FlexWrapper} {
    gap: 30px;
}
`

// Tab Menu

const StyledMenu = styled.nav`
    ul{
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }

    @media ${theme.media.mobile} {
        padding: 33px 0 5px;
    }
`

// Project

const StyledComponent = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const Description = styled.div`
    padding: 25px 20px 35px;

    h3{
        text-transform: capitalize;
    }

    p{
    padding: 14px 0 10px;
    }

    ${Link} {
        padding: 10px 0;
        & + ${Link} {
        margin-left: 20px;
        }
    } 
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        position: absolute;
        content: "";
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;

        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

export const S = {
    Works,
    StyledMenu,
    StyledComponent,
    Description,
    ImageWrapper,
    Image
}