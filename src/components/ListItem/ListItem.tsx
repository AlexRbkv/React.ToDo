import React from 'react';
import { Checkbox } from 'antd';
import listItemStyles from './listItem.module.css';
import {IData} from '../ToDo/ToDo';

interface IListItemProps {
    item: IData,
    onChange: any,
}

export const ListItem: React.FC<IListItemProps> = (props) => {
    return (
        <Checkbox className={listItemStyles.listItem} checked={props.item.checked} onChange={() => props.onChange(props.item)}>{props.item.title}</Checkbox>
    );
}