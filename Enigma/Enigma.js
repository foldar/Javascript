"use strict";

let sleutel=new Array(27);
let offSet=0;

function init()
{
    addEventHandlers();
    refreshEnigmaTable();
}

function refreshEnigmaTable()
{
    defineSleutel();
    fillEnigmaCodeTable();
}

function defineSleutel()
{
    let sleutel1 = document.getElementById("sleutel1").value;
    let sleutel2 = document.getElementById("sleutel2").value;
    console.log("sleutel1" + sleutel1);
    console.log("sleutel2" + sleutel2);
    //+sleutel1 is converted to number by the +
    offSet=(+sleutel1-1)*9 + +sleutel2;
    console.log("offset" + offSet);
    //Character: a The ASCII value is: 97
    // a = String.fromCharCode(97)

    //Voor de letters in het alphabet
    for (let i=97; i<123; i++)
    {
        if (offSet+i-97<=27)
        {
            sleutel[offSet + i - 97]=String.fromCharCode(i);
        }
        else
        {
            sleutel[((offSet + i -98) % 26)]=String.fromCharCode(i);
        }        
    }
    // Laatste letter, de spatie (die volgt niet de ascii tabel)
    if (offSet+26<=27)
    {
        sleutel[offSet+26]= " ";
    }
    else
    {
        sleutel[offSet-1] = " ";
    }
    console.log("sleutel" + sleutel);
}

function fillEnigmaCodeTable()
{
    const cellElements = document.getElementsByClassName("table");

    for (let i=0; i<cellElements.length; i++)
    {
        cellElements[i].textContent=sleutel[i+1];
    }
}

function addEventHandlers()
{
    let Element1 = document.getElementById("sleutel1");
    let Element2 = document.getElementById("sleutel2");

    Element1.addEventListener('click', refreshEnigmaTable, false);
    Element2.addEventListener('click', refreshEnigmaTable, false);

    let encode = document.getElementById("encodeButton");

    encode.addEventListener('click', encodeText, false);
}

function encodeText()
{
    const textToEncode = document.getElementById("inputText").value.toLowerCase();
    let encodedText="";
    document.getElementById("outputText").innerHTML="";

    for (let i=0; i<textToEncode.length; i++)
    {
        appendEncodedChar(textToEncode[i]);
    }
}

function appendEncodedChar(character)
{
    let output="";
    if (character.length>1)
    {
        console.log("encodeChar string to encode longer than 1 character.");
        character=character[1];
    }

    for (let i=0; i<sleutel.length; i++)
    {
        if (sleutel[i]==character)
        {
            output=i;
        }
    }
    console.log("output " + output);
    if (output=="")
    //this character cant be encoded, eg a dot, leave it unchanged.
    {
        output=character;
        var div = document.getElementById("outputText");
        var p = document.createElement("p");
        p.innerHTML = output;
        p.className="noBorders"
        div.append(p);
    }
    else
    {
        var tabelNummer=~~(((+output)/9)+0.99)   //het tabelnr
        var div = document.getElementById("outputText");
        var p = document.createElement("p");
        p.innerHTML = tabelNummer;
        p.className="Borders1";
        //Set borders of the p-element
        //console.log(output%9)
        switch((+output)%9) 
        {
            case 1:
              // borders right bottom
              p.className="Borders1";
              break;
            case 2:
              // borders left right bottom
              p.className="Borders2";
              break;
            case 3:
              //borders left bottom
              p.className="Borders3";
              break;
            case 4:
              //borders top bottom right
              p.className="Borders4";
              break;
            case 5:
              //borders top bottom left right
              p.className="Borders5";
              break;
            case 6:
              //borders top bottom left
              p.className="Borders6";
              break;
            case 7:
              //borders top right
              p.className="Borders7";
              break;
            case 8:
              //borders top left right
              p.className="Borders8";
              break;
            case 0:
              //borders top left
              p.className="Borders9";
              break;
        }
        div.append(p);
    }

    return output
}
