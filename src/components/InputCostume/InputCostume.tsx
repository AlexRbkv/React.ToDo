import React from 'react';
import { Input } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface Props {
    className: string,
    onChange: (value: string) => void,
    value: string,
}

export const InputCostume: React.FC<Props> = (props) => {
    return (
        <Input value={props.value} addonAfter={<SearchOutlined />} onChange={(e) => props.onChange(e.target.value)} className={props.className} placeholder="Что доабвить в список" />
    );
}