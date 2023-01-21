import React from 'react';

const About = ({ closePopup }) => {
    return (
        <>
        <header className='popup_header'>
            <h2>A propos</h2>
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

export default About;