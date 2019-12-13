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

function  saludarAstrid() {
    speech.speak({ text: 'Hola Astrid ?' });
}

function listening() {

    return (
        <div>
            <h1>Mi Componente</h1>
            <button onClick={saludarAstrid}>Click me</button>
        </div>
    );
}

export default listening;

//speech.speak({ text: 'Hola Astrid ?' });
