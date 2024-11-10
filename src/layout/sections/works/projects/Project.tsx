import React from 'react';
import styled from 'styled-components';

type ProjectPropsType = {
    srcImage: string
    title: string
    text: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledComponent>
            <Image src={props.srcImage}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </StyledComponent>
    );
}

const StyledComponent = styled.div`
max-width: 540px;
`
const Image = styled.img`
object-fit: cover;
`

