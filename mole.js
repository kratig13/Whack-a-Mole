let currmoletile;
let currplanttile;
let score = 0;
let gameover=false;


window.onload = function() {
    setGame();  
}

function setGame() {
    //set up the grid board for the game in htlm
    for( let i = 0; i < 9 ; i++ )
        {
            //create div tag <div id="0-8"></div>
            let tile = document.createElement("div");
            tile.id = i.toString();
            tile.addEventListener("click", selecttile);
            document.getElementById("board").appendChild(tile);
        }

        setInterval(setMole , 1000); //1000 millisecond = 1 seconds
        setInterval(setplant , 2000); //2000 millisecond = 2 seconds
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if(gameover){
        return;
    }

    if(currmoletile){
        currmoletile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png"

    let num = getRandomTile();
    if(currplanttile && currplanttile.id == num)
        {
            return;
        }
    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);
}

function setplant(){
    if(gameover){
        return;
    }


    if(currplanttile){
        currplanttile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if(currmoletile && currmoletile.id == num)
        {
            return;
        }
    currplanttile=document.getElementById(num);
    currplanttile.appendChild(plant);

}

function selecttile(){
    if(gameover){
        return;
    }

    if( this == currmoletile){
        score +=10;
        document.getElementById("score").innerText = score.toString();

    }
    else if (this == currplanttile)
        {
            
            document.getElementById("score").innerText= "GAME OVER:" + score.toString();
            gameover = true;
        }
}