import React from 'react';

const Projects = ({ closePopup }) => {
    return (
        <>
        <header className='popup_header'>
            <h2>Projets</h2>
            <button onClick={closePopup}>
                fermer
            </button>
        </header>
        <div className='popup-cntent'>
            <p>This is the content of Projets</p>
        </div>
        </>
    )
}

export default Projects;