import React, { useEffect, useState } from 'react';
import './App.css';
import ReactTyped from './ReactTyped';
import logo from './Raspberry Pi.svg'
import { Breadcrumb, Layout, Menu, theme, Flex, Row, Col, Button } from 'antd';
import FloatButton_custom from './shared/floatbtn';


const { Header, Content, Footer } = Layout;

function SkillsCompetencyPage() {

    return (
       <Layout className="aboutme">
           <Content className="aboutme-content">
               <p>
                Page Under Constrution. Be back soon!
               </p>
           </Content>
           <FloatButton_custom/>
       </Layout>
    );

}

export default SkillsCompetencyPage;