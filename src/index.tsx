import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import App from "./App"
import AboutMe from "./AboutMe"
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
   </Routes>
   </BrowserRouter>,
   rootElement
 );