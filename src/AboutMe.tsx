import React from "react";

import './AboutMe.css'
import { FloatButton, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import FloatButton_custom from "./shared/floatbtn";

function AboutMe() {

     return (
        <Layout className="aboutme">
            {/* <Header className="aboutme-header" style={{background:'transparent'}}>
                hello
            </Header> */}
            <Content className="aboutme-content">
                <p>
                My name is Lionel Chew, and I am a passionate software engineer. This website serves as my personal playground, where I hone my skills in front-end and back-end development, as well as delve into the world of DevOps. With a relentless drive to improve, I constantly seek out new challenges and opportunities to grow, pushing the boundaries of my capabilities to become a better-rounded software engineer.
                </p>
            </Content>
            <FloatButton_custom/>
        </Layout>
     );

 }

 export default AboutMe;