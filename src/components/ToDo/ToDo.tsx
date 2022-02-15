import React, {useState} from "react";
import {List} from "../List/List";
import {InputCostume} from "../InputCostume/InputCostume";
import toDoStyles from "./todo.module.css";

interface IToDo {
    title?: string,
    className?: string,
}

export const ToDo: React.FC<IToDo> = (props) => {

    const [inputState, setInputState] = useState('addItem');
    const [dataState, setDataState] = useState([
        {'id': 1, 'title': 'Item1', 'checked': false},
        {'id': 2, 'title': 'Item2', 'checked': false},
        {'id': 3, 'title': 'Item3', 'checked': true},
    ]);

    return (
        <div className={toDoStyles.toDoWrap}>
            <h2 className={toDoStyles.toDoCaption}>ToDo1</h2>
            <InputCostume className={toDoStyles.toDoInput} inputState={inputState}/>
            <List dataState={dataState}/>
        </div>
    );
}