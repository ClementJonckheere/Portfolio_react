import React from "react";
import { useState } from "react";
import GetDate from "../components/GetDate";

export default function Header() {
    const[startMenuOpen, setstartMenuOpen] = useState(false);  

    function toggleStartMenu() {
      setstartMenuOpen(!startMenuOpen);
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
                              mail
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
                    <button className="liens-navigation-home" id="home-navigation" onClick={toggleStartMenu}>
                      <img src="./windows.png" alt="test" className="icon-home"></img>
                      Home
                    </button>
                  </div>
                </nav>
            <GetDate />
          </header>
      </div>
    </>
  )
}