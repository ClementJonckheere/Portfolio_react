import React, {useState, useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Windows from "./pages/Windows";
import "./assets/css/Header.css";
import "./assets/css/Windows.css";
import"./assets/css/reset.css";
import "./assets/css/Game.css";
import "./assets/css/About.css";
import "./assets/css/Design.css";
import "./assets/css/Developpement.css";
import "./assets/css/GetDate.css";
import "./assets/css/Skill.css";
import "./assets/css/AboutSections/InfoGen.css";
import "./assets/css/AboutSections/CV.css";
import "./assets/css/Background.css";

const router= createBrowserRouter(
  [
    {
      path:"/",
      element: <Windows />
    }
  ]
)


function App() {
  const [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}, [])
  return (
    <div className="App">
      {
        loading ?
        <div class="loader">
          <div class="container-picture-windows">
            <img class="picture-windows" src="icon-windows-95.png" alt="icon windows 95"></img>
          </div>
          <div class="microsoft">
            <h2 class="h2-microsoft">Microsoft 95</h2>
          </div>
          <div class="title-windows">
            <h1>Bienvenue sur le portfolio de <strong class="name-title">Clément</strong></h1>
          </div>
          <div class="barLoad">
            <div class="loadBar">
            </div>
          </div> 
        </div>
        :
        <RouterProvider router={router} />
      }
    </div>
  );
}

export default App;
