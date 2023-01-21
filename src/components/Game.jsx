import React, { useState, useRef } from 'react';

function Game() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPressed, setIsPressed] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const imageRef = useRef(null);

    const handleMouseDown = (e) => {
        if (e.target.className === "game-image") {
            setIsDragging(true);
            setIsPressed(true);
            const rect = imageRef.current.getBoundingClientRect();
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleMouseMove = (e) => {
        if (!isPressed || !isDragging) {
            return;
        }
        const rect = imageRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseUp = () => {
        setIsPressed(false);
        setIsDragging(false);
    };

    return (
        <div>
            <img 
                className="game-image" 
                src="./Minesweeper.webp" 
                style={{
                    position: "absolute", 
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    width: 80,
                }}
                onDoubleClick={() => setIsOpen(true)} 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                alt="icon"
                ref={imageRef}
            />
            {isOpen && (
                <div className="modal_game">
                    <div className="modal-content">
                        <p>Contenu de la modale</p>
                        <button onClick={() => setIsOpen(false)}>Fermer</button>
                    </div>
                </div>
            )}
            <p className="p_game" style={{
                position: "absolute", 
                transform: `translate(${position.x}px, ${position.y + 40}px)`
            }}>I follow the icon</p>
        </div>
    );
}

export default Game;