import React from "react";
import { ListItem } from "../ListItem/ListItem";
import listStyles from "./list.module.css"
import {Button} from 'antd';
import {IData} from '../ToDo/ToDo';

interface IListProps {
    dataState: Array<IData>,
    onCheckChange: any,
    addItem: (title: string) => void,
    inputText: string,
}

export const List: React.FC<IListProps> = (props) => {
    return (
        <div className={listStyles.listWrap}>
            {
                props.dataState.length > 0 ? 
                    props.dataState.map(item => 
                        <ListItem onChange={props.onCheckChange} key={props.dataState.indexOf(item)} item={item}/> 
                    )
                :
                "В списке нет дел"
                
            }
            {
                props.inputText != '' ? 
                    <Button type="text" className={listStyles.addBtn} onClick={() => props.addItem(props.inputText)}>+ Доабвить</Button>
                :
                ''
            }
        </div> 
    );
};