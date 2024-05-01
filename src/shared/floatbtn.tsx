import React from 'react';
import { FloatButton } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';



const FloatButton_custom: React.FC = () => {
    const navigate = useNavigate();
    const handleOnClickBack = () => {
        navigate('/')
    }

    return (
        <FloatButton onClick={handleOnClickBack} icon = {<LeftOutlined />}/>
    )
};

export default FloatButton_custom;