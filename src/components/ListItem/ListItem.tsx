import React, {useContext} from 'react';
import { Checkbox } from 'antd';
import listItemStyles from './listItem.module.css';
import {Context, IData} from '../ToDo/ToDo';
import {Button} from 'antd';

interface IListItemProps {
    item: IData,
}

export const ListItem: React.FC<IListItemProps> = (props) => {
    const {removeItem, onCheckChange} = useContext(Context);
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Checkbox className={listItemStyles.listItem} checked={props.item.checked} onChange={() => onCheckChange(props.item)}>
                { 
                    props.item.checked ? <s>{props.item.title}</s> : props.item.title
                }
            </Checkbox>
            <Button type="text" onClick={() => removeItem(props.item)}>remove</Button>
        </div>
        
    );
}