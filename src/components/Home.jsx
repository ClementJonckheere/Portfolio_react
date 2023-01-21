import React from 'react';

const Home = ({ closePopup }) => {
    return (
        <>
        <header className='popup_header'>
            <h2>Welcome</h2>
            <button onClick={closePopup}>
                fermer
            </button>
        </header>
        <div className='popup-cntent'>
            <p>This is the content of Home</p>
        </div>
        </>
    )
}

export default Home;