import { useState } from "react";

function Background( {setBackgroundColor}) {
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

    // Tableau contenant les différentes couleurs
    const colors = ['#008080', '#142d4c', '#ff7070', '#a55233', '#1d1716'];
  
    // Fonction qui met à jour la couleur de la div app-container
    const handleBackgroundColorChange = (color) => {
      setBackgroundColor(color);
    };
return (
    <>
    <div className='container_icon'>
        <div className='react-modal' style={{ top: 500 }} onDoubleClick={() => setIsOpen(true)} >
            <img className="skills-image" src="./competences.png" alt="icon"/>
            <p className="p_skills">Settings</p>
        </div>
        {isOpen && (
                    <div className="modal_game" style={{ left: modalX, top: modalY }}>
                        <div className="modal-header" onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}>
                        <div className="windows-name">
                            <img className="icon-modal-windows" src="./competences.png" alt="icon page des competences"></img>
                        Mes compétences
                        </div>
                            <button className="close-button" onClick={() => setIsOpen(false)}><img className="image_popup_header " src="./close.png" alt="icon close"/></button>
                        </div>
                        <div className="modal-content">
        <h2>Choisissez une couleur de fond :</h2>
        <div className="color-selector">
          {colors.map((color) => (
            <div
              key={color}
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleBackgroundColorChange(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
    )}
  </div>
  </>
)
}

export default Background;