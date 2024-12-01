import React from 'react';
import { Link } from '../../../../components/Link';
import {S} from '../Works_Styles'

export type TabStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabItems: Array<{status: TabStatusType, title: string}> 
    changeFilterStatus: (value: TabStatusType) => void
    currentFilterStatus: string

}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.StyledMenu>
            <ul>
                {props.tabItems.map((item: {status: TabStatusType, title: string}, index: number) => {
                    return (
                        <li key={index}>
                            <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </S.StyledMenu>
    );
};

