import React, {useState} from "react";
import toDoStyles from "./todo.module.css";
import 'antd/dist/antd.css';

import {List} from "../List/List";
import {InputCostume} from "../InputCostume/InputCostume";
import {ListMenu} from "../ListMenu/ListMenu";

interface IToDo {
    title?: string,
    className?: string,
    state: Array<IData>,
}

export interface IData {
    title: string, checked: boolean,
}

const defaultState = {
    dark: false,
  };

export const Context = React.createContext<Partial<any>>({});

export const ToDo: React.FC<IToDo> = (props) => {

    const [inputText, setInputText] = useState<string>('');
    const [dataState, setDataState] = useState<Array<IData>>(props.state);

    const onCheckChange = (item: IData) => {
        setDataState(dataState.map((dataItem, index) => {
            if (index == dataState.indexOf(item)) {
                return {...dataItem, checked: !item.checked};
            } else {
                return dataItem;
            }
            
        }));
    }

    const onInputChange = (value: string) => {
        setInputText(value);
    }

    const addItem = (title: string) => {
        if (title != '') {
            setDataState(dataState => [...dataState, {'title': title, 'checked': false}]);
        }
    }

    const checkAll = () => {
        setDataState(dataState.map(item => {return {...item, checked: true}}));
    }

    const unchekAll = () => {
        setDataState(dataState.map(item => {return {...item, checked: false}}));
    }

    const removeItem = (item: IData) => {
        setDataState(dataState.filter(target => target !== item));
    }

    const removeAllCheckedItems = () => {
        setDataState(dataState.filter(target => target.checked === false));
    }

    return (
        <Context.Provider value={{dataState, inputText, removeItem, onCheckChange, addItem, checkAll, unchekAll, removeAllCheckedItems}}>
            <div className={toDoStyles.toDoWrap}>
            <div className={toDoStyles.toDoCaptionWrap}>
                <h2 className={toDoStyles.toDoCaption}>{props.title}</h2>
                <h5 className={toDoStyles.toDoListLength}>Количество: {dataState.length}</h5>
            </div>
            <InputCostume className={toDoStyles.toDoInput} onChange={onInputChange} value={inputText}/>
            <List inputText={inputText}/>
            <ListMenu/>
        </div>
        </Context.Provider>
    );
}