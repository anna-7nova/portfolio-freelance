import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return (
                        <li key={index}>
                            <Link href="#">{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid blue;
        margin: 0 auto 40px;
    }
`