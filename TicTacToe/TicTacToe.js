"use strict";

let player1Or2=1;

function init()
{
    const button = document.getElementById("btnNewGame");

    button.className="btnNewGameOff";
    player1Or2=1;
    addEventHandlers();
}

function addEventHandlers()
{
    const tableElement = document.getElementById("canvas");
    const cellElements = tableElement.getElementsByTagName("td");

    for (let i=0; i<cellElements.length; i++)
    {
        cellElements[i].addEventListener('click', cellClicked, false);
    }
}

function buttonClicked()
{
    const tableElement = document.getElementById("canvas");
    const cellElements = tableElement.getElementsByTagName("td");  
    const button = document.getElementById("btnNewButton");

    for (let i=0; i<cellElements.length; i++)
    {
        cellElements[i].style.backgroundImage="";
        cellElements[i].className="";
    }
    init();
}

function cellClicked()
{
    if (player1Or2!=1)
    {
        this.style.backgroundImage = "url(img/o.png)";
        document.getElementById("footer").textContent = "Player 1 is aan de beurt.";
        checkForWin();
        player1Or2=1;
    }
    else
    {
        this.style.backgroundImage = "url(img/x.png)";
        document.getElementById("footer").textContent = "Player 2 is aan de beurt.";
        checkForWin();
        player1Or2=2;
    }
    console.log(player1Or2);
    //remove click handler, als hij eenmaal ingevuld is kan er niet nogmaals op geclickt worden
    this.removeEventListener('click', cellClicked, false)
}

function checkForWin()
{
    const tableElement = document.getElementById("canvas");
    const cellElements = tableElement.getElementsByTagName("td");
    let indicator;
    let board=new Array(8);
    let playerWon=0;
    let blinkImage="";
    let gridFull;

    console.log("Player " + player1Or2);
    if (player1Or2==1)
    {
        indicator="x";
        blinkImage='url("img/x-transparant.png")';
    }
    else
    {
        indicator="o";
        blinkImage='url("img/o-transparant.png")';
    }

     for (let i=0; i<cellElements.length; i++)
    {
        switch (cellElements[i].style.backgroundImage)
        {
            case 'url("img/x.png")':
                board[i]="x";
                break;
            case 'url("img/o.png")':
                board[i]="o";
                break;
            case "":
                board[i]="";
                break;
        }
    }

    console.log(board);
    //Check 1st of 8 possibilities of having 3 in a row
    if (board[0]==indicator && board[1]==indicator && board[2]==indicator)
    {
        //cell 0 1 and 2
        playerWon=player1Or2;
        cellElements[0].className = "blink-image";
        cellElements[1].className = "blink-image";
        cellElements[2].className = "blink-image";
    }

    //Check 2nd of 8 possibilities of having 3 in a row
    if (board[3]==indicator && board[4]==indicator && board[5]==indicator)
    {
        //cell 3 4 and 5
        playerWon=player1Or2;
        cellElements[3].className = "blink-image";
        cellElements[4].className = "blink-image";
        cellElements[5].className = "blink-image";
    }

    //Check 3rd of 8 possibilities of having 3 in a row
    if (board[6]==indicator && board[7]==indicator && board[8]==indicator)
    {
        //cell 6 7 and 8
        playerWon=player1Or2;
        cellElements[6].className = "blink-image";
        cellElements[7].className = "blink-image";
        cellElements[8].className = "blink-image";
    }

    //Check 4th of 8 possibilities of having 3 in a row
    if (board[0]==indicator && board[3]==indicator && board[6]==indicator)
    {
        //cell 0 3 and 6
        playerWon=player1Or2;
        cellElements[0].className = "blink-image";
        cellElements[3].className = "blink-image";
        cellElements[6].className = "blink-image";
    }

    //Check 5th or 8 possibilities of having 3 in a row
    if (board[1]==indicator && board[4]==indicator && board[7]==indicator)
    {
        //cell 1 4 and 7
        playerWon=player1Or2;
        cellElements[1].className = "blink-image";
        cellElements[4].className = "blink-image";
        cellElements[7].className = "blink-image";
    }

    //Check 6th of 8 possibilities of having 3 in a row
    if (board[2]==indicator && board[5]==indicator && board[8]==indicator)
    {
        //cell 2 5 and 8
        playerWon=player1Or2;
        cellElements[2].className = "blink-image";
        cellElements[5].className = "blink-image";
        cellElements[8].className = "blink-image";
    }

    //Check 7th of 8 possibilities of having 3 in a row
    if (board[0]==indicator && board[4]==indicator && board[8]==indicator)
    {
        //cell 0 4 and 8
        playerWon=player1Or2;
        cellElements[0].className = "blink-image";
        cellElements[4].className = "blink-image";
        cellElements[8].className = "blink-image";
    }

    //Check 8th of 8 possibilities of having 3 in a row
    if (board[6]==indicator && board[4]==indicator && board[2]==indicator)
    {
        //cell 6 4 and 2
        playerWon=player1Or2;
        cellElements[6].className = "blink-image";
        cellElements[4].className = "blink-image";
        cellElements[2].className = "blink-image";
    }

    console.log(playerWon);
    if (playerWon!=0)
    {
        //a player won (stored in playerWon variable)
        document.getElementById("footer").textContent = "Player " + playerWon + " heeft gewonnen.";

        //remove click events fromt he remaining blank images
        for (let i=0; i<board.length; i++)
        {
             if (board[i]=="")
            {
                console.log("Done"+i);
                 cellElements[i].removeEventListener('click', cellClicked, false);
            }
        }
    }
    else
    {
        //Check if the grid is full
        gridFull=1;
        console.log(board);
        for (let i=0; i<board.length; i++)
        {
            if (board[i]=='')
            {
                gridFull=0;
            }
        }

        if (gridFull==1)
        {
            document.getElementById("footer").textContent = "Gelijkspel, geen van de spelers heeft gewonnen.";
        }
    }

    if (playerWon!=0 || gridFull==1)
    {
        //Add button, for if you want to play again
        const btnbutton = document.getElementById("btnNewGame");
    
        btnbutton.addEventListener('click', buttonClicked, false);
        btnbutton.className="btnNewGameOn";
    }
}