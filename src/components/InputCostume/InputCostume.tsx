import React from 'react';
import { Input } from 'antd';
const {  SettingOutlined  } = icons;

interface Props {
    className: string,
    inputState: string,
}

export const InputCostume: React.FC<Props> = (props) => {
    return (
        <Input addonAfter={<SettingOutlined />} className={props.className} placeholder="Что доабвить в список?" />
    );
}