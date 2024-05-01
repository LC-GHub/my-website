import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import App from "./App"
import AboutMe from "./AboutMe"
import SkillsCompetencyPage from "./SkillsCompetencyPage";
import LinkPage from "./LinkPage";
 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    {/* background */}
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
    {/* background */}
    <Routes>
     <Route path="/" Component={App} />
     <Route path="/aboutme" Component={AboutMe} />
     <Route path="/skills" Component={SkillsCompetencyPage} />
     <Route path="/links" Component={LinkPage} />
   </Routes>
   </BrowserRouter>,
   rootElement
 );