import React from "react";
import About from "../components/About";
import Background from "../components/Background";
import Design from "../components/Design";
import Developpement from "../components/Developpement";
import Competences from "../components/Skills";
import Header from "../includes/Header";
import { useState } from "react";
import config from "../components/config";

const Windows = () => {
  const [backgroundColor, setBackgroundColor] = useState('#008080');
  const [btnIsOpen, setBtnIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const [modalInfo, setModalInfo] = useState(config);

  function openBtn() {
      setBtnIsOpen(true);
      setModalInfo(modalInfo);
  };

  function closeBtn() {
    setBtnIsOpen(false);
  };

  function updateCategory(name) {
    setCategory(name);
  }

  return(
    <>
      <main className="windows">

      <div className="about-me" >
        <About openBtn={openBtn} closeBtn={closeBtn} modalInfo={modalInfo.about} updateCategory={updateCategory} category={category}/>
        </div>
        <div className="developpement">
        <Developpement  openBtn={openBtn} closeBtn={closeBtn} modalInfo={modalInfo.development} updateCategory={updateCategory} category={category}/>
        </div>
        <div className="design">
        <Design  openBtn={openBtn} closeBtn={closeBtn} modalInfo={modalInfo.design} updateCategory={updateCategory} category={category}/>
        </div>
        <div className="project">
          <Competences openBtn={openBtn} closeBtn={closeBtn} modalInfo={modalInfo.skills} updateCategory={updateCategory} category={category}/>
        </div>
        <div className="background">
          <Background setBackgroundColor={setBackgroundColor} openBtn={openBtn} closeBtn={closeBtn} modalInfo={modalInfo.background} updateCategory={updateCategory} category={category}/>
        </div>
      <Header backgroundColor={backgroundColor} btnIsOpen={btnIsOpen} modalInfo={modalInfo} category={category}/>
      {/* </DragDropContext> */}
    </main>
    </>
  )

}

export default Windows;