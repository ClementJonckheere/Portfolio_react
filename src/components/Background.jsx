import { useState } from "react";

function Background( {openBtn, closeBtn, setBackgroundColor, updateCategory}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalX, setModalX] = useState(0);
  const [modalY, setModalY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [currentColor, setCurrentColor] = useState('#008080');

  const handleModalOpen = () => {
    setIsOpen(true);
    openBtn();
    updateCategory("background");
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

  const colors = ['#008080', '#142d4c', '#ff7070', '#a55233', '#1d1716', '#183A1D', '#F7C04A', '#BE6DB7'];

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
    setCurrentColor(color);
  };
  
  return (
    <>
      <div className='container_icon'>
        <div className='react-modal' style={{ top: 400 }} onDoubleClick={handleModalOpen} >
          <img className="skills-image" src="./settings-icon.png" alt="icon"/>
          <p className="p_skills">Settings</p>
        </div>
        {isOpen && (
          <div className="modal_background" style={{ left: modalX, top: modalY }}>
            <div className="modal-header" onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}>
              <div className="windows-name">
                <img className="icon-modal-windows" src="./settings-icon.png" alt="icon page des competences"></img>
                Settings
              </div>
              <button className="close-button" onClick={handleModalClose}><img className="image_popup_header " src="./close.png" alt="icon close"/></button>
            </div>
            <div className="modal-content">
            <div className="current-color">
                <h2 className="h2-current-color">Couleur actuelle : </h2>
                <div className="container-current-color">
                  <div className="color-sample" style={{ backgroundColor: currentColor }}></div>
                  <p>{currentColor}</p>
                  <div className="color" style={{ backgroundColor: currentColor }} onClick={() => handleBackgroundColorChange(currentColor)}></div>
                </div>
              </div>
              <h2 className="h2-choose-color">Choisissez une couleur de fond :</h2>
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