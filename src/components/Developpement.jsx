import { useState } from "react";

function Developpement() {
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
        <div className='container_icon'>
        <div className='react-modal' style={{ top: 200 }}
        onDoubleClick={() => setIsOpen(true)} >

            <img className="developpement-image" src="./dossier_ouvert.png" alt="icon"/>
            <p className="p_developpement">Projets Dev</p>
        </div>
                    {isOpen && (
                        <div className="modal_game" style={{ left: modalX, top: modalY }}>
                        <div className="modal-header" onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}>
                          <div className="windows-name">
                            <img className="icon-modal-windows" src="./competences.png" alt="icon page des competences"></img>
                          Projets de developpement
                          </div>
                            <button className="close-button" onClick={() => setIsOpen(false)}><img className="image_popup_header " src="./close.png" alt="icon close"/></button>
                        </div>
                        <div className="modal-content">
                        <div className="cards-content">
                              <div className="card-body">
                                <div className="card-title">
                                  <h3>DealGames :</h3>
                                </div>
                                <div className="card-content">
                                  <p>Création d'un site de troc de jeux video avec Symfony.</p>
                                </div>
                                <div className="card-picture">
                                  <a className="card-link" href="https://github.com/ClementJonckheere/DealsGame-symphony.git" target="_blank" rel="noreferrer noopener">
                                    <img className="card-image" src="DealGames.png" alt="site de troc jeux video avec Symfony" />
                                  </a>
                                </div>
                              </div>

                              <div className="card-body">
                                <div className="card-title">
                                  <h3>Portoflio Windows 95 :</h3>
                                </div>
                                <div className="card-content">
                                  <p>Découverte du logicel de modelisation 3D Blender, réalisation d'une maison sur une ile, en utilisant des textures, utilisation de l'éclairage pour le rendu de la création. Le rendu est en png.</p>
                                </div>

                                <div className="card-picture">
                                  <a className="card-link" href="https://github.com/ClementJonckheere/DealsGame-symphony.git" target="_blank" rel="noreferrer noopener">
                                    <img className="card-image" src="monportfolio.png" alt="Mon portfolio windows 95" />
                                  </a>
                                </div>
                              </div>

                              <div className="card-body">
                                <div className="card-title">
                                  <h3>Dj Agency :</h3>
                                </div>
                                <div className="card-content">
                                  <p>Découverte du logicel de modelisation 3D Blender, réalisation d'une maison sur une ile, en utilisant des textures, utilisation de l'éclairage pour le rendu de la création. Le rendu est en png.</p>
                                </div>

                                <div className="card-picture">
                                  <a className="card-link" href="https://github.com/ClementJonckheere/DJ-Agency-wp" target="_blank" rel="noreferrer noopener">
                                    <img className="card-image" src="dj-agency.png" alt="Mon portfolio windows 95" />
                                  </a>
                                  <a className="card-link" href="https://github.com/ClementJonckheere/DJ-Agency-wp" target="_blank" rel="noreferrer noopener">
                                    <img className="card-image" src="dj-agency-2.png" alt="Mon portfolio windows 95" />
                                  </a>
                                </div>
                                <a href="https://dj-agency.fr/agent-artistique/" target="_blank" rel="noreferrer noopener">Voir le site</a>
                              </div>
                          </div>
                        </div>
                    </div>
                    )}
    </div>
    );
}

export default Developpement;