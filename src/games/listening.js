import React from 'react';
import Speech from 'speak-tts'

const speech = new Speech()

speech.init({
    'volume': 0.5,
    'lang': 'es-US',
    'rate': 1,
    'pitch': 1,
    'voice': 'Google español de Estados Unidos',
    'splitSentences': true
})

function getRandomLetter() {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CH"]
    let position = Math.floor(letters.length * Math.random())

    return letters[position]
}

function sayLetter(text) {
    speech.speak({ text });
}

function listening() {
    const letter = getRandomLetter();


    return (
        <div>
            <h1>Mi Componente</h1>
            <button onClick={() => sayLetter(letter)}>Click me</button>

        </div>
    );
}

export default listening;
