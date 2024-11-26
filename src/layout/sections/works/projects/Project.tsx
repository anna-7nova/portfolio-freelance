import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/Button';

type ProjectPropsType = {
    srcImage: string
    title: string
    text: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledComponent>
            <ImageWrapper>
                <Image src={props.srcImage} />
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <Link>demo</Link>
                <Link>Code</Link>
            </Description>
        </StyledComponent>
    );
}

const StyledComponent = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

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

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const Description = styled.div`
    padding: 25px 20px;
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
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

