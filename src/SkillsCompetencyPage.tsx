import React, { useEffect, useState } from 'react';
import './App.css';
import ReactTyped from './ReactTyped';
import logo from './Raspberry Pi.svg'
import { Breadcrumb, Layout, Menu, theme, Flex, Row, Col, Button } from 'antd';
import FloatButton_custom from './shared/floatbtn';
import './SkillsCompetencyPage.css'
import ImageGallery from './ImageGallery'


const { Header, Content, Footer } = Layout;

function SkillsCompetencyPage() {

    const [feAssests, setFeAssests] = useState<string[]>([]);
    const [beAssests, setBeAssests] = useState<string[]>([]);
    const [otherAssests, setOtherAssests] = useState<string[]>([]);

    useEffect(() => {
        fetchFeAssets();
        fetchBeAssets();
        fetchOtherAssets();
    }, [])

    const fetchFeAssets = () => {
        const context = require.context('../assets/fe', false, /\.(png|jpe?g|svg)$/);
        console.log('fetched FE')
        const images = context.keys().map(context);
        setFeAssests(images as string[]);
    };
    const fetchBeAssets = () => {
        const context = require.context('../assets/be', false, /\.(png|jpe?g|svg)$/);
        console.log('fetched BE')
        const images = context.keys().map(context);
        setBeAssests(images as string[]);
    };
    const fetchOtherAssets = () => {
        const context = require.context('../assets/others', false, /\.(png|jpe?g|svg)$/);
        console.log('fetched')
        const images = context.keys().map(context);
        setOtherAssests(images as string[]);
    };

    return (
       <Layout className="aboutme">
           <Content className="aboutme-content">
                <div className='content-container'>
                    <Row className='row-box backend-box'>
                        <h2 className='row-box-header'>Frontend.</h2>
                        <ImageGallery images = {feAssests}/>
                    </Row>
                    <Row className='row-box frontend-box'>
                        <h2 className='row-box-header'>Backend.</h2>
                        <ImageGallery images = {beAssests}/>
                    </Row>
                    <Row className='row-box others-box' style={{flexGrow: 1}}>
                        <h2 className='row-box-header'>Others.</h2>
                        <ImageGallery images = {otherAssests}/>
                    </Row>
                </div>
           </Content>
           <FloatButton_custom/>
       </Layout>
    );

}

export default SkillsCompetencyPage;