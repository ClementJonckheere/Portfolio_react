const About = ({ closePopup }) => {
    return (
        <>
        <div className='popup-body'>
            <header className='popup_header'>
                <div className='intitu_popup_header'>
                    <img className='image_popup_header' src="./a_propos.png" alt='image_popup_header' />
                    <h2 className="title_popup_header">A propos</h2>
                </div>
                <div className='close_popup_header'>
                    <button className="button_popup_header" onClick={closePopup}>
                        <img className="icon_button_popup_header" src='./close.png' alt='fermer' />
                    </button>
                </div>
            </header>
            <div className='popup-content' style={{ maxHeight: '580px', overflow: 'auto' }}>
                <div className='picture_body_popup'>
                    <img className='image_body_popup' src='testimage.jpg' alt='clement Jonckheere' />
                </div>
                <div className="title-body-content">
                    <h1>Clement Jonckheere</h1>
                </div>
                <div className="about-me">
                    <h2 className="description-about-me">Etudient en Web developpement | 2eme anné d'etude suppérieur | Ecole La Manu 2021-2023 </h2>
                </div>
                <div className="about-me-content">
                    <p>frenfernfnjerfjerr</p>
                    <p>frenfernfnjerfjerr</p>
                    <p>frenfernfnjerfjerr</p>

                    <p>frenfernfnjerfjerr</p>
                    <p>frenfernfnjerfjerr</p>
                    <p>frenfernfnjerfjerr</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;


