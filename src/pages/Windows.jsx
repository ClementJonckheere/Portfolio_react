import React from "react";
import About from "../components/About";
import Design from "../components/Design";
import Developpement from "../components/Developpement";
import Game from "../components/game/Game";
import Competences from "../components/Skills";
import Header from "../includes/Header";
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DragDropContext } from 'react-beautiful-dnd';
const Windows = () => {
  return(
    <>
      <main className="windows">
      {/* <DragDropContext backend={HTML5Backend}> */}
      <div className="game">
        <Game />
        </div>
        <div className="design">
        <Design />
        </div>
        <div className="developpement">
        <Developpement />
        </div>
        <div className="about-me">
        <About />
        </div>
        <div className="project">
          <Competences />
        </div>
      <Header />
      {/* </DragDropContext> */}
    </main>
    </>
  )

}

export default Windows;