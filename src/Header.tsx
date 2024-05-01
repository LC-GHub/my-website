import React, { useEffect, useState } from 'react';
import './App.css';
import ReactTyped from './ReactTyped';
import logo from './Raspberry Pi.svg'
import { Breadcrumb, Layout, Menu, theme, Flex, Row, Col, Button } from 'antd';

const { Header, Content, Footer } = Layout;

interface HeaderCustomProps {
    isanimationplayed: boolean;
  }

const Header_custom: React.FC<HeaderCustomProps> = ({isanimationplayed}) => {
  const [animationCom, setAnimationCom] = useState<boolean>(false);
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(isanimationplayed);

  useEffect(() => {
    if (animationCom && !animationPlayed) {
      setAnimationPlayed(true)
    }
  }, [animationCom, animationPlayed])

  const handleComplete = () => {
    console.log("animation done")
    setAnimationCom(true)
  }

  return (
        <Header className={`header ${animationPlayed ? 'fade-in' : ''}`}>
          <Row justify="space-between" align="middle" gutter={20} style={{ width: '100%' }}>
            <Col span={6} className='col'>
              <Button style={{ background: 'transparent', width: '100%', height: '100%' }} href='/'>
                <div className='header-component title'>
                  Lionel.dev_
                </div>
              </Button>
            </Col>
            <Col span={6}>
              <Button style={{ background: 'transparent', width: '100%', height: '100%' }} href='/aboutme'>
                <div className='header-component menu-item'>
                  About me
                </div>
              </Button>
            </Col>
            <Col span={6}>
              <Button style={{ background: 'transparent', width: '100%', height: '100%' }}>
                <div className='header-component menu-item'>
                  Skills && Competencies
                </div>
              </Button>
            </Col>
            <Col span={6}>
              <Button style={{ background: 'transparent', width: '100%', height: '100%' }}>
                <div className='header-component menu-item'>
                  Link
                </div>
              </Button>
            </Col>
          </Row>
        </Header>
  )
};

export default Header_custom;
