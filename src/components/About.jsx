import { useState } from "react";

function About() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
  
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
    return (
        <>
        <div className='container_icon'>
            <div className='react-modal' style={{ top: 360 }} onDoubleClick={() => setIsOpen(true)} >
                <img className="about-image" src="./about.png" alt="icon"/>
                <p className="p_apropos">A propos</p>
            </div>
            {isOpen && (
                        <div className="modal_game" style={{ left: modalX, top: modalY }}>
                            <div className="modal-header" onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}>
                                <p>Contenu de la modale</p>
                                <button onClick={() => setIsOpen(false)}>Fermer</button>
                            </div>
                            <div className="modal-content">
                                <p>Bonjour</p>
                            </div>
                        </div>
                    )}
        </div>
        
        </>
    )
}

export default About;


