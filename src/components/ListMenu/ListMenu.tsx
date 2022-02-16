import React from 'react';
import listMenuStyles from './listmenu.module.css';
import {ListMenuBtn} from './ListMenuBtn/ListMenuBtn';

interface IListItemProps {
    checkAll?: () => void,
    unchekAll?: () => void,
    showItems?: (listStateArg: string) => void,
}

export const ListMenu: React.FC<IListItemProps> = (props) => {
    return (
        <div className={listMenuStyles.listMenuWrap}>
            <ListMenuBtn onClick={props.checkAll} text="Выделить все"/>
            <ListMenuBtn onClick={props.unchekAll} text="Удалить выделения"/>
            {
                // if (showItems) {
                //     <div>
                //         <ListMenuBtn onClick={props.showItems} text="Все"/>
                //         <ListMenuBtn onClick={props.showItems} text="Активные"/>
                //         <ListMenuBtn onClick={props.showItems} text="Завершенные"/>)
                //     </div>
                // }
            }
        </div>
    );
};