"use strict";

const tetrisDeleteBlock =
[
    ['O','O','O'],
    ['O','O','O'],
    ['O','O','O']
];

const tetrisBlock1_1 =
[
    ['X','O','O'],
    ['X','X','O'],
    ['O','X','O']
];

const tetrisBlock1_2 =
[
    ['O','X','X'],
    ['X','X','O'],
    ['O','O','O']
];
const tetrisBlock1_3 =
[
    ['O','X','O'],
    ['O','X','X'],
    ['O','O','X']
];
const tetrisBlock1_4 =
[
    ['O','X','X'],
    ['X','X','O'],
    ['O','O','O']
];
const tetrisBlock2_1 =
[
    ['X','O','O'],
    ['X','O','O'],
    ['X','X','O']
];
const tetrisBlock2_2 =
[
    ['O','O','X'],
    ['X','X','X'],
    ['O','O','O']
];const tetrisBlock2_3 =
[
    ['O','X','X'],
    ['O','O','X'],
    ['O','O','X']
];const tetrisBlock2_4 =
[
    ['X','X','X'],
    ['X','O','O'],
    ['O','O','O']
];
let tetrisBlock1=[tetrisBlock1_1,tetrisBlock1_2,tetrisBlock1_3,tetrisBlock1_4];
let tetrisBlock2=[tetrisBlock2_1,tetrisBlock2_2,tetrisBlock2_3,tetrisBlock2_4];
let tetrisBlocks=[tetrisBlock1, tetrisBlock2];
let blockNr=0;
let rotation=0;

function init()
{
    displayBlock();
    //window.addEventListener("keydown", pressedKey);
    window.addEventListener('keydown', function (e) 
    {if (e.key=="ArrowDown") {pressedArrowDown();}
     if (e.key=="ArrowUp") {pressedArrowUp();}
    }, false);
}

function pressedArrowUp()
{
    if (blockNr==tetrisBlocks.length-1)
    {
        blockNr=0;
    }
    else
    {
        blockNr=blockNr+1;
    }
    displayBlock();
}


function displayBlock()
{
    const row1Element = document.getElementById("row1");
    let row1Elements = row1Element.getElementsByTagName("td");

    const row2Element = document.getElementById("row2");
    let row2Elements = row2Element.getElementsByTagName("td");

    const row3Element = document.getElementById("row3");
    let row3Elements = row3Element.getElementsByTagName("td");

    const row4Element = document.getElementById("row4");
    let row4Elements = row4Element.getElementsByTagName("td");

    const row5Element = document.getElementById("row5");
    let row5Elements = row5Element.getElementsByTagName("td");

    const row6Element = document.getElementById("row6");
    let row6Elements = row6Element.getElementsByTagName("td");

    const row7Element = document.getElementById("row7");
    let row7Elements = row7Element.getElementsByTagName("td");

    const row8Element = document.getElementById("row8");
    let row8Elements = row8Element.getElementsByTagName("td");

    const row9Element = document.getElementById("row9");
    let row9Elements = row9Element.getElementsByTagName("td");

    const row10Element = document.getElementById("row10");
    let row10Elements = row10Element.getElementsByTagName("td");

    const row11Element = document.getElementById("row11");
    let row11Elements = row11Element.getElementsByTagName("td");

    const row12Element = document.getElementById("row12");
    let row12Elements = row12Element.getElementsByTagName("td");

    const row13Element = document.getElementById("row13");
    let row13Elements = row13Element.getElementsByTagName("td");

    const row14Element = document.getElementById("row14");
    let row14Elements = row14Element.getElementsByTagName("td");

    const row15Element = document.getElementById("row15");
    let row15Elements = row15Element.getElementsByTagName("td");

    //Maak twee dimensionale array 15x13
    let tableElements=[row1Elements,row2Elements,row3Elements,row4Elements,row5Elements,row6Elements,row7Elements,row8Elements,row9Elements, row10Elements, row11Elements, row12Elements, row13Elements, row14Elements, row15Elements]
    //console.log(tableElements);
    console.log("blocknr" + blockNr);

    //Display tetris block in col 6,7 and 8 at start
    for (let i=0; i<3; i++)
    {
        for (let j=0; j<3; j++)
        {
            if (tetrisBlocks[blockNr][rotation][j][i]=="X")
            {
                tableElements[0+j][5+i].style.backgroundColor = "red";
            }
            else
            {
                tableElements[0+j][5+i].style.backgroundColor = "white"  
            }
        }
    }

}