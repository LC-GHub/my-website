import React, { useEffect, useState } from 'react';
import './App.css';
import ReactTyped from './ReactTyped';
import logo from './Raspberry Pi.svg'
import { Breadcrumb, Layout, Menu, theme, Flex, Row, Col, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [animationCom, setAnimationCom] = useState<boolean>(false);
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);

  useEffect(() => {
    if (animationCom && !animationPlayed) {
      setAnimationPlayed(true)
    }
  }, [animationCom, animationPlayed])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Listen for key press (e.g., spacebar) to skip animation
      if (event.key === ' ' && !animationPlayed) {
        setAnimationCom(true);
      }
    };

    const handleClick = () => {
      // Listen for mouse click to skip animation
      if (!animationPlayed) {
        setAnimationCom(true);
      }
    };

    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
      document.body.removeEventListener('click', handleClick);
    };
  }, [animationPlayed])

  const handleComplete = () => {
    console.log("animation done")
    setAnimationCom(true)
  }

  return (
    <Layout className='layout'>
      {animationCom &&
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

      }
      <Content className='content'>
        <div className='typing-anime'>
          <ReactTyped
            strings={['Hi, my name is Lionel.', 'I am a software engineer.', 'I like to play 🏸.', 'Fun fact: Avocados are a fruit, not a vegetable.']}
            fadeOut={true}
            fadeOutClass='typed-fade-out'
            onComplete={handleComplete}
            fadeOutDelay={10}
            played = {animationPlayed}
          />
        </div>
      </Content>

      {animationCom &&
        <Footer className={`footer ${animationPlayed ? 'fade-in' : ''}`}>
          <div className='footer-content'>
            This web application is hosted on a
            <a href='https://www.raspberrypi.com/'>
              <img src={logo} className='rpi-logo' />
            </a>
          </div>
        </Footer>
      }



    </Layout>
  );
};

export default App;
