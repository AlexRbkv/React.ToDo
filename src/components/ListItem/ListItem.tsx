import React from 'react';
import { Checkbox } from 'antd';

interface IListItemProps {
    title: string,
    checked: boolean,
}

export const ListItem: React.FC<IListItemProps> = (props) => {

    function onChange () {
        
    }

    return (
        <Checkbox checked={props.checked} onChange={onChange}>{props.title}</Checkbox>
    );
}