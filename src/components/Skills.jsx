import { useState } from "react";

function Competences() {
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
            <div className='react-modal' style={{ top: 100 }} onDoubleClick={() => setIsOpen(true)} >
                <img className="skills-image" src="./competences.png" alt="icon"/>
                <p className="p_skills">Compétences</p>
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
                              <div className="container-competences">

                                <section className="domaines-competences">
                                  <div className="title-competences">
                                    <h2>Domaines de competences :</h2>
                                  </div>
                                  <div className="container-domaines">
                                    <div className="domaines-block">
                                      <h3>Projets Web</h3>
                                      <p>Site vitrine, e-commerce, application mobile</p>
                                    </div>
                                    <div className="domaines-block">
                                      <h3>Conception graphique & Webdesign</h3>
                                      <p>Maquettes Web, Logos, Design 3d</p>
                                    </div>
                                    <div className="domaines-block">
                                      <h3>Interface d'administration</h3>
                                      <p>PHP - MYSQL</p>
                                    </div>
                                    <div className="domaines-block">
                                      <h3>CMS</h3>
                                      <p>Wordpress, Prestashop</p>
                                    </div>
                                    <div className="domaines-block">
                                      <h3>Integration de la maquette</h3>
                                      <p>Utilisation HTML/CSS respectant les normes d'accessiblités
                                      & ergonomie des pages web</p>
                                    </div>
                                    <div className="domaines-block">
                                      <h3>Dynamistation des pages</h3>
                                      <p>JavaScript, ReactJs, VueJs</p>
                                    </div>
                                  </div>
                                </section>

                                <section className="competences">
                                  <div className="competences-dev">
                                    <h2>Competences en developpement :</h2>
                                    <div className="icon-dev">
                                      <div className="icons-block">
                                        <div className="icon-element">
                                          HTML
                                        <img className="icon-language" src="./icons-html.png" alt="icon html" />
                                        </div>
                                        <div className="icon-element">
                                          CSS
                                        <img className="icon-language" src="./icons-css.png" alt="icon css" />
                                        </div>
                                        <div className="icon-element">
                                          JavaScript
                                        <img className="icon-language" src="./icons-javascript.png" alt="icon css" />
                                        </div>
                                      </div>
                                      <div className="icons-block">
                                        <div className="icon-element">
                                            PHP
                                          <img className="icon-language" src="./icons-php.png" alt="icon html" />
                                        </div>
                                        <div className="icon-element">
                                            MYSQL
                                          <img className="icon-language" src="./icons-mysql.png" alt="icon html" />
                                        </div>
                                        <div className="icon-element">
                                            SYMFONY
                                          <img className="icon-language" src="./icons-symfony.png" alt="icon html" />
                                        </div>
                                      </div>
                                      <div className="icons-block">
                                      <div className="icon-element">
                                              REACTJS
                                          <img className="icon-language" src="./icons-react.png" alt="icon html" />
                                        </div>
                                        <div className="icon-element">
                                              VUEJS
                                          <img className="icon-language" src="./icons-vuejs.png" alt="icon html" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="competences-design">
                                  <h2>Competences en design :</h2>
                                  <div className="icons-block">
                                      <div className="icon-element">
                                              AdobeXd
                                          <img className="icon-language" src="./icons-adobe-xd.png" alt="icon html" />
                                        </div>
                                      <div className="icon-element">
                                              Photoshop
                                        <img className="icon-language" src="./icons-adobe-photoshop.png" alt="icon html" />
                                        </div>
                                      <div className="icon-element">
                                              Illustrator
                                        <img className="icon-language" src="./icons-adobe-illustrator.png" alt="icon html" />
                                      </div>
                                    </div>
                                    <div className="icons-block">
                                    <div className="icon-element">
                                              Blender
                                        <img className="icon-language" src="./icons-blender.png" alt="icon html" />
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                        </div>
                    )}
        </div>
        
        </>
    )
}

export default Competences;


