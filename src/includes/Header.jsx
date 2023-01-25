import React from "react";
import { useState } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import GetDate from "../components/GetDate";
// import { Link } from "react-router-dom";

export default function Header() {
    const[isPopupOpen, setIsPopupOpen] = useState(false);
    const[popupContent, setPopupContent] = useState(null);
    const[startMenuOpen, setstartMenuOpen] = useState(false);
    
    // const[programsMenuOpen, setProgramsMenuOpen] = useState(false);

    function toggleStartMenu() {
      setstartMenuOpen(!startMenuOpen);
    }

    const handleIconClick = (content) => {
        setIsPopupOpen(true);
        setPopupContent(content);
    }

    return(
        <>  
        <div className="app-container">
            <header className="header-barre">
                <nav className="nav-header">
                <div className="menu-home">
                    <div id="start-menu" className={`menu ${startMenuOpen ? "menu-open" : ""}`}>
                      <div class="menu-bar">
                        <div className="sidebar">
                          <img src="/sidebar-image.a5e56956.png" className="sidebar-image" alt="sidebar"/>
                        </div>
                        <div className="socials">
                          <a className="a" href="https://github.com/ClementJonckheere" target="_blank" rel="noreferrer noopener">
                          <div className="bar">
                            <img src="./github.png" className="social-image" alt="github"/>
                            <div className="social-text">
                              <u className="u">G</u>
                              ithub
                            </div>
                          </div>
                          </a>
                          <a className="a" href="https://www.linkedin.com/in/cl%C3%A9ment-jonckheere-0042b8197/" target="_blank" rel="noreferrer noopener">
                          <div className="bar">
                            <img src="./linkedin.png" class="social-image" alt="linkedin"/>
                            <div className="social-text">
                              <u className="u" >L</u>
                              inkedin
                            </div>
                          </div>
                          </a>
                          <a className="a" href="https://mail.google.com/mail/u/2/#inbox" target="_blank" rel="noreferrer noopener">
                          <div className="bar">
                            <img src="./gmail.png" class="social-image" alt="gmail"/>
                            <div className="social-text">
                              <u className="u" >G</u>
                              amail
                            </div>
                          </div>
                          </a>
                          <div className="hr"></div>
                          <a className="a" href="https://mail.google.com/mail/u/2/#inbox" target="_blank" rel="noreferrer noopener">
                          <div className="bar">
                            <img src="./cv.png" class="social-image" alt="gmail"/>
                            <div className="social-text">
                              <u className="u" >C</u>
                              urriculum vitae
                            </div>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigations">

                    <button className="liens-navigation-home" id="home-navigation" onClick={toggleStartMenu}><img src="./windows.png" alt="test"></img>Home</button>
                  </div>

                  <div className="navigations">
                    <div className="icon" onClick={() => handleIconClick(<About closePopup={() => setIsPopupOpen(false)} />)}>
                    <p className="liens-navigation"><img className="image_navigation" src="a_propos.png" alt="test"></img> A propos</p>
                    </div>
                  </div>

                  <div className="navigations">
                    <div className="icon" onClick={() => handleIconClick(<Skills closePopup={() => setIsPopupOpen(false)} />)}>
                    <p className="liens-navigation"> <img className="image_navigation" src="./competences.png" alt="test"></img>Compétences</p>
                    </div>
                  </div>

                  <div className="navigations">
                    <div className="icon" onClick={() => handleIconClick(<Projects closePopup={() => setIsPopupOpen(false)} />)}>
                    <p className="liens-navigation"><img className="image_navigation" src="" alt="test"></img> Projets </p>
                    </div>
                  </div>
                </nav>
                <GetDate />
            </header>
        {isPopupOpen && (
          <div className="popup-container">
            <div className="popup">
              {popupContent}
            </div>
          </div>
        )}
      </div>
          </>
      )
  }