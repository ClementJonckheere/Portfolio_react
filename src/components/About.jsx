import { useEffect, useState } from "react";
import CV from "./AboutComponents/CV";
import InfoGen from "./AboutComponents/InfoGen";
import Objectif from "./AboutComponents/Objectif";


function About( {openBtn, closeBtn, updateCategory} ) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [selectedOption, setSelectedOption] = useState("InfoGen");
    
  
    const handleModalOpen = () => {
      setIsOpen(true);
      openBtn();
      updateCategory("about");
    };
  
    const handleModalClose = () => {
      setIsOpen(false);
      closeBtn();
    };
  
    const handleMouseDown = (event) => {
      setIsMouseDown(true);
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
  
    const handleMouseMove = (event) => {
      if (isMouseDown) {
        setModalX(modalX + event.clientX - mouseX);
        setModalY(modalY + event.clientY - mouseY);
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      }
    };
  
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };
  
    const handleWindowResize = () => {
      const modal = document.querySelector(".modal_game");
      const modalWidth = modal.offsetWidth;
      const modalHeight = modal.offsetHeight;
      const left = (window.innerWidth - modalWidth) / 2;
      const top = (window.innerHeight - modalHeight) / 2;
      setModalX(left);
      setModalY(top);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
    return (
        <>
        <div className='container_icon'>
            <div className='react-modal' style={{ top: 0}} onDoubleClick={handleModalOpen} >
                <img className="about-image" src="./a_propos.png" alt="icon"/>
                <p className="p_apropos">A propos</p>
            </div>
            {isOpen && (
              <div className="modal_game" style={{ left: modalX, top: modalY }}>
                <div className="modal-header" onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}>
                  <div className="windows-name">
                    <img className="icon-modal-windows" src="./a_propos.png" alt="icon page a propos de moi"></img>
                      A propos
                    </div>
                    <button className="close-button" onClick={handleModalClose}><img className="image_popup_header " src="./close.png" alt="icon close"/></button>
                  </div>
                  <div className="modal-content">
                  <div className="info-bar">
                    <div className="router-modale-about">
                    <button className="btn-modal-about" onClick={() => setSelectedOption("InfoGen")}><u className="u">In</u>fo generale</button>
                      <button className="btn-modal-about" onClick={() => setSelectedOption("Objectif")}><u className="u">M</u>es objectifs</button>
                      <button className="btn-modal-about" onClick={() => setSelectedOption("CV")}><u className="u">M</u>on parcours</button>
                    </div>
                  </div>
                      <div className="info-generale-about"> 
                        {selectedOption === "InfoGen" && <InfoGen />}
                        {selectedOption === "Objectif" && <Objectif />}
                        {selectedOption === "CV" && <CV />}
                    </div>
                  </div>
                  </div>
              )}
        </div>
        </>
    )
}

export default About;


