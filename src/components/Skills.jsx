import { useState } from "react";


function Competences( {openBtn, closeBtn, updateCategory}) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
  
    const handleModalOpen = () => {
      setIsOpen(true);
      openBtn();
      updateCategory("skills");
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
        <>
        <div className='container_icon'>
        <div className='react-modal' style={{ top: 100 }} onDoubleClick={handleModalOpen}>
                <img className="skills-image" src="./terminal_icon.png" alt="icon"/>
                <p className="p_skills">Compétences</p>
            </div>
            {isOpen && (
                        <div className="modal_game" style={{ left: modalX, top: modalY }}>
                            <div className="modal-header" onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}>
                              <div className="windows-name">
                                <img className="icon-modal-windows" src="./terminal_icon.png" alt="icon page des competences"></img>
                              Mes compétences
                              </div>
                                <button className="close-button" onClick={handleModalClose}><img className="image_popup_header " src="./close.png" alt="icon close"/></button>
                            </div>
                            <div className="modal-content">
                              <div className="container-competences">
                                <div className="fakeScreen">
                                  <div className="line1">C:\Users\clement\Desktop\competences>$ competence_dev<span class="cursor1">_</span></div>
                                  <div className="line2">
                                    <ul>
                                      <li>-HTML</li>
                                      <li>-CSS</li>
                                      <li>-JavaScript</li>
                                      <li>-ReactJs</li>
                                      <li>-Vuejs</li>
                                      <li>-PHP</li>
                                      <li>-Synfony</li>
                                      <li>-Wordpress</li>
                                      <li>-Python</li>
                                      <li>-Java</li>
                                      </ul>
                                      <span className="cursor2">_</span></div>
                                  <div className="line3">C:\Users\clement\Desktop\competences>$ competence_design<span class="cursor3">_</span></div>
                                  <div className="line4">
                                  <ul>
                                      <li>-AdobeXd</li>
                                      <li>-Photoshop</li>
                                      <li>-Illustrator</li>
                                      <li>-Indesign</li>
                                      <li>-Blender</li>
                                      </ul>
                                    <span className="cursor4">_</span></div>
                              </div>
                              </div>
                            </div>
                        </div>
                    )}
        </div>
        
        </>
    )
}

export default Competences;


