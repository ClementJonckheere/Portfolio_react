import React from "react";
import { useState } from "react";
import GetDate from "../components/GetDate";

export default function Header( {backgroundColor, btnIsOpen, modalInfo, category} ) {
    console.log(category);
    const[startMenuOpen, setstartMenuOpen] = useState(false); 
    const btnInfo = modalInfo[category];


    function toggleStartMenu() {
      setstartMenuOpen(!startMenuOpen);
    }
    

    return(
        <>  
        <div className="app-container" style={{ backgroundColor: backgroundColor }}>
            <header className="header-barre">
                <nav className="nav-header">
                <div className="menu-home">
                    <div id="start-menu" className={`menu ${startMenuOpen ? "menu-open" : ""}`}>
                      <div class="menu-bar">
                        <div className="sidebar">
                          <img src="sidebar-image.png" className="sidebar-image" alt="sidebar"/>
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
                          <a className="a" href="mailto: clementjonckheere1999@gmail.com" target="_blank" rel="noreferrer noopener">
                          <div className="bar">
                            <img src="./gmail.png" class="social-image" alt="gmail"/>
                            <div className="social-text">
                              <u className="u" >G</u>
                              mail
                            </div>
                          </div>
                          </a>
                          <div className="hr"></div>
                          <a className="a" href="Clément JONCKHEERE.pdf" target="_blank" rel="noreferrer noopener">
                          <div className="bar">
                            <img src="./cv.png" class="social-image" alt="cv"/>
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
                    <button className="liens-navigation-home" id="home-navigation" onClick={toggleStartMenu}>
                      <img src="./windows.png" alt="barre de navigation" className="icon-home"></img>
                      Home
                    </button>
                    {btnIsOpen ? (
                      <button className="liens-icons">    
                      <img src={btnInfo.icon} alt="icons" className="icon-navigation" ></img>  
                      {btnInfo.name}</button>    
                    ) : null}
                  </div>
                </nav>
            <GetDate />
          </header>
      </div>
    </>
  )
}