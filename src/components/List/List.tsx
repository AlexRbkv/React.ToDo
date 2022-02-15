import React from "react";
import { ListItem } from "../ListItem/ListItem";
import listStyles from "./list.module.css"
interface ToDoListItem {
    id: number,
    title: string,
    checked: boolean,
}
interface IListProps {
    dataState: ToDoListItem[],
}

export const List: React.FC<IListProps> = (props) => {
    return (
        <div className={listStyles.listWrap}>
            {
                props.dataState.length > 0 ? 
                    props.dataState.map(item => 
                        <ListItem key={item.id} title={item.title} checked={item.checked}/> 
                    )
                :
                "В списке нет дел"
                
            }
        </div> 
    );
};