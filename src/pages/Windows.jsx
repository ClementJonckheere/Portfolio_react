import React from "react";
import About from "../components/About";
import Background from "../components/Background";
import Design from "../components/Design";
import Developpement from "../components/Developpement";
import Game from "../components/game/Game";
import Competences from "../components/Skills";
import Header from "../includes/Header";
import { useState } from "react";
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DragDropContext } from 'react-beautiful-dnd';
const Windows = () => {
  const [backgroundColor, setBackgroundColor] = useState('#008080');
  const [modalIcon, setModalIcon] = useState(null);
  const [modalName, setModalName] = useState(null);

  const handleModalOpen = (icon, name) => {
    setModalIcon(icon);
    setModalName(name);
  };

  const handleModalClose = () => {
    setModalIcon(null);
    setModalName(null);
  };
  return(
    <>
      <main className="windows">

      <div className="about-me">
        <About />
        </div>
        <div className="developpement">
        <Developpement />
        </div>
        <div className="design">
        <Design />
        </div>
        <div className="project">
          <Competences  onModalOpen={() => handleModalOpen('./competences.png', 'Compétences')} onModalClose={handleModalClose}/>
        </div>
        <div className="game">
        <Game />
        </div>
        <div className="background">
          <Background setBackgroundColor={setBackgroundColor}/>
        </div>
      <Header backgroundColor={backgroundColor} modalIcon={modalIcon} modalName={modalName}/>
      {/* </DragDropContext> */}
    </main>
    </>
  )

}

export default Windows;