import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Link } from '../../../../components/Link';

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
margin-bottom: 40px;
    ul{
        display: flex;
        justify-content: center;
        gap: 20px;
    }
}
`