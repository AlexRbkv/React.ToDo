import React from 'react';
import {Button} from 'antd';

interface IListMenuBtnProps {
    text: string,
    lisеState?: string
    onClick?: () => void;
}

export const ListMenuBtn: React.FC<IListMenuBtnProps> = (props) => {
    const onBtnClick = props.onClick || function() {return null};
    console.log(props.onClick);
    return (
        <Button onClick={() => onBtnClick()} type="text">{props.text}</Button>
    )
}