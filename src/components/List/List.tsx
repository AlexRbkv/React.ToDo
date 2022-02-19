import React, {useContext} from "react";
import { ListItem } from "../ListItem/ListItem";
import listStyles from "./list.module.css"
import {Button} from 'antd';
import {IData, Context} from '../ToDo/ToDo';

interface IListProps {
    inputText: string,
}

export const List: React.FC<IListProps> = (props) => {
    const {dataState, addItem} = useContext(Context);
    return (
        <div className={listStyles.listWrap}>
            {
                dataState.length > 0 ? 
                    dataState.map((item: IData) => 
                        <ListItem key={dataState.indexOf(item)} item={item}/> 
                    )
                :
                "В списке нет дел"
                
            }
            {
                props.inputText != '' ? 
                    <Button type="text" className={listStyles.addBtn} onClick={() => addItem(props.inputText)}>+ Доабвить</Button>
                :
                ''
            }
        </div> 
    );
};