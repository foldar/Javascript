"use strict";

function init()
{
    addEventHandlers();
    initColorSection();

    const colorElements = document.getElementsByClassName("pickColor");
    let headerElement = document.getElementById("randomColor");
    
    let randomColor = setRandomColor();
    let randomIndexNumber = randomIntFromInterval(0,5);

    let colorElement = document.getElementById("randomColor");
    colorElement.textContent = randomColor;
    headerElement.textContent = colorElements[randomIndexNumber].style.backgroundColor;
}

function initColorSection()
{
    const colorElements = document.getElementsByClassName("pickColor");

    for (let i = 0 ; i < colorElements.length; i++)
    {
        let randomColor = setRandomColor();
        colorElements[i].style.backgroundColor = randomColor;
    }
}

/*
    setRandomColor returns a string containing
    a CSS rgb declaration with random color intensity between
    0 and 255 for red, green and blue
*/
function setRandomColor()
{
    let rgbRed = randomIntFromInterval(0,255);
    let rgbGreen = randomIntFromInterval(0,255);
    let rgbBlue = randomIntFromInterval(0,255);

    let rgbColor = "rgb("+rgbRed + ", "+rgbGreen + ", "+rgbBlue + ")";

    return rgbColor;
}

/*
    randomIntFromInterval returns a random number
    between the given parameter values min and max

    The Math.floor() method rounds a number DOWNWARDS to the nearest integer,
    and returns the result.

    Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
*/
function randomIntFromInterval(min, max)
{
    let returnValue;

    returnValue = Math.floor(Math.random() * (max - min + 1) + min);
    return returnValue;
}

function addEventHandlers()
{
    let elements = document.getElementsByClassName("pickColor");
    for (let i=0; i<elements.length; i++)
    {
        elements[i].addEventListener('click', checkPickedColor, false);
    }
}

function checkPickedColor()
{
    console.log(this.style.backgroundColor);
    console.log(randomColor.textContent);
    if (this.style.backgroundColor==randomColor.textContent)
    {
        alert("You guessed "+this.style.backgroundColor+" right");
        if (confirm("Do you want to play again?")==true)
        {init();}
    }
    else
    {
        alert("You guessed it wrong");
        if (confirm("Do you want to try again?")==true)
        {
            this.style.backgroundColor = "inherit";
            this.style.border = "inherit";
            //remove eventlistener
            this.removeEventListener('click', checkPickedColor,false);
        }
    }
}