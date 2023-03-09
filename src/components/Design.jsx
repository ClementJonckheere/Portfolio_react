import { useState } from "react";

function Design({ openBtn, closeBtn, updateCategory }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
  
    const handleModalOpen = () => {
      setIsOpen(true);
      openBtn();
      updateCategory("design");
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
    return (
        <div className='container_icon'>
        <div className='react-modal' style={{ top: 300 }} onDoubleClick={handleModalOpen} >
            <img className="design-image" src="./dossier_ouvert.png" alt="icon"/>
            <p className="p_design">Projets Design</p>
        </div>
                    {isOpen && (
                        <div className="modal_game" style={{ left: modalX, top: modalY }}>
                        <div className="modal-header" onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}>
                          <div className="windows-name">
                            <img className="icon-modal-windows" src="./dossier_ouvert.png" alt="icon page des competences"></img>
                          Projets design
                          </div>
                            <button className="close-button" onClick={handleModalClose}><img className="image_popup_header " src="./close.png" alt="icon close"/></button>
                        </div>
                        
                        <div className="modal-content">
                          <div className="cards-content">
                              <div className="card-body">
                                <div className="card-title">
                                  <h3>Modelisation 3D d'une maison avec Blender :</h3>
                                </div>
                                <div className="card-content">
                                  <p>Découverte du logicel de modelisation 3D Blender, réalisation d'une maison sur une ile, en utilisant des textures, utilisation de l'éclairage pour le rendu de la création. Le rendu est en png.</p>
                                </div>
                                <div className="card-picture">
                                  <img className="card-image" src="maison-clement.png" alt="blender Maison" />
                                </div>
                              </div>

                              <div className="card-body">
                                <div className="card-title">
                                  <h3>Logos avec Illustrator:</h3>
                                </div>
                                <div className="card-content">
                                  <p>Réalisation de logos pour des projets en classes.</p>
                                </div>
                                <div className="card-picture-logo">
                                  <img className="card-logo" src="PlantaShop.png" alt="Logo plantashop" />
                                  <img className="card-logo" src="TIBAG.png" alt="Logo Tibag" />
                                </div>
                              </div>

                              <div className="card-body">
                                <div className="card-title">
                                  <h3>Illustration avec Illustrator:</h3>
                                </div>
                                <div className="card-container">
                                  <div className="card-content">
                                    <p>Réalisation de d'une image pour m'entraîner avec le logiciel.</p>
                                  </div>
                                  <div className="card-picture">
                                    <img className="card-illustr" src="fusee.png" alt="Logo plantashop" />
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                    )}
    </div>
    );
}

export default Design;