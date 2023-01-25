import React from "react";
import Design from "../components/Design";
import Developpement from "../components/Developpement";
import Game from "../components/Game";
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
      <Header />
      {/* </DragDropContext> */}
    </main>
    </>
  )

}

export default Windows;