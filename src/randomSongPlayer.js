import React, { useState, useRef } from 'react';

const RandomSoundPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const sounds = [
        // '/assets/sound1.mp3',
        '/assets/sound2.mp3',
        // '/assets/sound3.mp3',
        // '/assets/sound4.mp3',
    ];

    const playRandomSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const randomIndex = Math.floor(Math.random() * sounds.length);
        const randomSound = sounds[randomIndex];

        const audio = new Audio(randomSound);
        audioRef.current = audio;

        setIsPlaying(true);

        audio.play();

        audio.onended = () => {
            setIsPlaying(false);
        };
    };

    return (
        <div className="random-sound-player">
            <button
                onClick={playRandomSound}
                className={`sound-button ${isPlaying ? 'playing' : ''}`}
            >
                {isPlaying ? 'En cours...' : 'Okay'}
            </button>

            <style jsx>{`
                .random-sound-player {
                    display: flex;
                    justify-content: center;
                    margin: 20px;
                }
                
                .sound-button {
                    width: 150px;
                    aspect-ratio: 1/1;
                    font-size: 16px;
                    border-radius: 50%;
                    border: none;
                    background-color: #3498db;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .sound-button:hover {
                    background-color: #2980b9;
                }
                
                .sound-button.playing {
                    background-color: #e74c3c;
                }
            `}</style>
        </div>
    );
};

export default RandomSoundPlayer;