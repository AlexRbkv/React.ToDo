import React, {useContext} from 'react';
import listMenuStyles from './listmenu.module.css';
import {ListMenuBtn} from './ListMenuBtn/ListMenuBtn';
import {IData, Context} from '../ToDo/ToDo'; 

export const ListMenu = () => {
    const {dataState, checkAll, unchekAll, removeAllCheckedItems} = useContext(Context);
    return (
            <div className={listMenuStyles.listMenuWrap}>
                <ListMenuBtn onClick={checkAll} text="Выделить все"/>
                <ListMenuBtn onClick={unchekAll} text="Убрать выделения"/>
                {dataState.length !== 0 ? <ListMenuBtn onClick={removeAllCheckedItems} text="Удалить выделенные"/> : null}
            </div>
    );
};