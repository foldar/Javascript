"use strict";

import words from './woorden.json' assert {type: 'json'};

let wrongGuesses="";

const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", play);
window.addEventListener("load", play);
window.addEventListener("keydown", pressedKey);

let wordObject = {};

function randomIntFromInterval(min, max)
{
    let returnValue;

    returnValue = Math.floor(Math.random() * (max - min + 1) + min);
    return returnValue;
}

function getWord()
{
    let randomWordArray = [];
    let objRandomWord = {};

    let randomWord = "";
    let randomNumber = randomIntFromInterval(0,words.length);    

    randomWord = words[randomNumber];

    if ( randomWord.length > 0 )
    {
        for ( let i=0; i < randomWord.length; i++ )
        {
            let tmpObj = {
                char: randomWord[i], 
                show: false
            };
            randomWordArray.push(tmpObj);
        }
        
        let maxRetries = randomWord.length < 7 ? 7 : 11;

        objRandomWord = {
            word: randomWord,
            maxCharacters: randomWord.length,
            characters: randomWordArray,
            maxRetries: maxRetries,
            numRetries: 0
        }
        
    }
    return objRandomWord;
}

function play()
{
    wrongGuesses="";
    wordObject = getWord();
    displayWord();
    displayGalg();

    //const myDivElement = document.getElementById("randomWord");
    //myDivElement.textContent = wordObject.word;    
    console.log("word object", wordObject);
}
