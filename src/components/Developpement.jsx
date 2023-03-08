import { useState } from "react";

function Developpement({openBtn, closeBtn, updateCategory}) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
  
      
    const handleModalOpen = () => {
      setIsOpen(true);
      openBtn();
      updateCategory("development");
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
        <div className='react-modal' style={{ top: 200 }} onDoubleClick={handleModalOpen} >

            <img className="developpement-image" src="./dossier_ouvert.png" alt="icon"/>
            <p className="p_developpement">Projets Dev</p>
        </div>
                    {isOpen && (
                        <div className="modal_game" style={{ left: modalX, top: modalY }}>
                        <div className="modal-header" onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}>
                          <div className="windows-name">
                            <img className="icon-modal-windows" src="./dossier_ouvert.png" alt="icon page des competences"></img>
                          Projets de developpement
                          </div>
                            <button className="close-button" onClick={handleModalClose}><img className="image_popup_header " src="./close.png" alt="icon close"/></button>
                        </div>
                        <div className="modal-content">
                        <div className="cards-content">
                              <div className="card-body">
                                <div className="card-title">
                                  <h3>DealGames :</h3>
                                </div>
                                <div className="card-content">
                                  <p>Création de mon premier site web avec symphony, c'est un site de vente et de troc de jeux video, d'accessoirs et de consoles.</p>
                                  <p>L'objectif est d'avoir une base de donnée avec une connexion, inscription, ajouter/mdofier/editer une annonce, et avoir un dashboard pour l'admin.</p>
                                </div>
                                <div className="card-picture">
                                  <a className="card-link" href="https://github.com/ClementJonckheere/DealsGame-symphony.git" target="_blank" rel="noreferrer noopener">
                                    <img className="card-image" src="DealGames.png" alt="site de troc jeux video avec Symfony" />
                                  </a>
                                </div>
                              </div>
                              <div className="card-body">
                                <div className="card-title">
                                  <h3>Dj Agency :</h3>
                                </div>
                                <div className="card-content">
                                  <p>Dj ajency est une entreprise d'art qui accompagne de nouveaux artiste sur le marché de l'art comptemporain</p>
                                  <p>C'est un site de vitrine pour l'entreprise que j'ai realisé pendant mon stage de premiere année sur Wordpress.</p>
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