import React, { useState } from 'react';

function Flashcard({ flashcard }) {
    const [showTarget, setShowTarget] = useState(false);
    const [randomColor, setRandomColor] = useState(getRandomColor());

    function getRandomColor() {
        const colors = [
            '#ffc947', '#42b883', '#ff6b6b', '#8a2be2', '#ff6347',
            '#20b2aa', '#9370db', '#1e90ff', '#ffc0cb', '#32cd32',
            '#f08080', '#66cdaa', '#ba55d3', '#cd853f',
            '#ff4500', '#00ced1', '#8b4513', '#3cb371'
            ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const flipCard = () => {
        setRandomColor(getRandomColor()); // Generate new color before flipping
        setShowTarget(!showTarget);
    };

    return (
        <div
        className={`flashcard ${showTarget ? 'show-target' : ''}`}
        onClick={flipCard}
        >
        <div className="flashcard-inner">
            <div className="flashcard-front" style={{ backgroundColor: randomColor }}>
            <span className="content">{flashcard.source}</span>
            </div>
            <div className="flashcard-back" style={{ backgroundColor: randomColor }}>
            <span className="content">{flashcard.target}</span>
            </div>
        </div>
        </div>
    );
}

export default Flashcard;
