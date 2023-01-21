import React from 'react';

const Skills = ({ closePopup }) => {
    return (
        <>
        <header className='popup_header'>
            <h2>Compétences</h2>
            <button onClick={closePopup}>
                fermer
            </button>
        </header>
        <div className='popup-cntent'>
            <p>This is the content of A propos</p>
        </div>
        </>
    )
}

export default Skills;