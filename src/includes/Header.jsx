import React from "react";
import { useState } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";

export default function Header() {
    const[isPopupOpen, setIsPopupOpen] = useState(false);
    const[popupContent, setPopupContent] = useState(null);
    const[startMenuOpen, setstartMenuOpen] = useState(false);
    // const[programsMenuOpen, setProgramsMenuOpen] = useState(false);

    function toggleStartMenu() {
      setstartMenuOpen(!startMenuOpen);
    }

    // function toggleProgramsMenu() {
    //   setProgramsMenuOpen(!programsMenuOpen);
    // }
    // onClick={toggleProgramsMenu}
    {/* <div id="programs-menu" className={`menu ${programsMenuOpen ? "menu-open" : ""}`}>
      <a href="#">Program 1</a>
      <a href="#">Program 2</a>
      <a href="#">Program 3</a>
      </div> */}

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
                      <div className="grid-nav">
                        <div className="background-95">
                          <div className="back-95">
                          <div className="my-name">Windows 95</div>
                          </div>
                        </div>
                      <div className="liens">
                        <div className="link-gith">
                          <img src="" alt="github"></img>
                          <Link className="liens-home" id="liens-github" href="#">Github</Link>
                        </div>
                        <div className="link-gith">
                          <img src="" alt="github"></img>
                        <Link className="liens-home" id="liens-linkedin" href="#">Linkedin</Link>
                        </div>
                        <div className="link-gith">
                          <img src="" alt="github"></img>
                        <Link className="liens-home" id="liens-gmail" href="#">Gmail</Link>
                        </div>
                      </div>
                    </div>
                    </div>

                </div>
                    <button className="liens-navigation" id="home-navigation" onClick={toggleStartMenu}>Home</button>
                    <div className="icon" onClick={() => handleIconClick(<About closePopup={() => setIsPopupOpen(false)} />)}>
                    <p className="liens-navigation"> A propos</p>
                    </div>
                    <div className="icon" onClick={() => handleIconClick(<Skills closePopup={() => setIsPopupOpen(false)} />)}>
                    <p className="liens-navigation"> Compétences</p>
                    </div>
                    <div className="icon" onClick={() => handleIconClick(<Projects closePopup={() => setIsPopupOpen(false)} />)}>
                    <p className="liens-navigation"> Projets </p>
                    </div>
                </nav>
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