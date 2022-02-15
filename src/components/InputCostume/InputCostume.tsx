import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface Props {
    className: string,
    inputState: string,
}

export const InputCostume: React.FC<Props> = (props) => {
    return (
        <Input addonAfter={props.inputState === 'search' ? <SearchOutlined /> : <PlusOutlined />} className={props.className} placeholder="Что доабвить в список" />
    );
}