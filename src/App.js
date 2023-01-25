import React from "react";
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


const router= createBrowserRouter(
  [
    {
      path:"/",
      element: <Windows />
    }
  ]
)

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
