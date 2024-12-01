import React from 'react';
import { Link } from '../../../../components/Link';
import { Button } from '../../../../components/Button';
import {S} from '../Works_Styles'

type ProjectPropsType = {
    srcImage: string
    title: string
    text: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.StyledComponent>
            <S.ImageWrapper>
                <S.Image src={props.srcImage} />
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <Link active>demo</Link>
                <Link>Code</Link>
            </S.Description>
        </S.StyledComponent>
    );
}

