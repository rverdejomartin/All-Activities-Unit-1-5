let divLetters;
let letter;
let cities = [];
let word;
let divWord;
let lifes = 10;
let complete = false;
let guessedWord = [];
let showWord;
let divLifes;


window.onload = () =>{
    play();
}

function generateCity(){
    //create the array with the cities values
    cities = ["GRANADA","MADRID","BARCELONA","GUIPUZCUA","VALENCIA"];
    //generate a random to get a random citie
    let random = Math.floor(Math.random()*cities.length);
    //assign the random value on the global
    word = cities[random];

    //do a loop to fill a array
    for(let i=0;i<word.length;i++){
        guessedWord.push("_");
    }
}

function showCity(){
    //we need to convert the array to string to show in the viewport
    showWord = guessedWord.join(" ");
    //get the div id
    divWord = document.getElementById("word");
    //asign the content in html and the personal style
    divWord.innerHTML = showWord;
    divWord.style.fontSize = "50px";
}

//show the game lifes
function showLifes(){
    divLifes = document.getElementById("lifes");
    divLifes.innerHTML = "You have "+lifes+" lifes";
}

function clickOnButton(){
    divLetters = document.getElementById("letters");
    divLetters.addEventListener("click", (e)=>{
        letter = e.target.value; //we add to the variable letter the value of the button
        let matchWord = false;

        //loop for find the value and matching
        for(let i =0; i<word.length; i++){
            if(word.charAt(i) === letter){
                guessedWord[i] = letter;
                matchWord = true;
            }
        }

        //change the appearance of the button
        e.target.disabled = true;;

        //if the button word inside, match with a word of the array
        if(matchWord){
            //refresh the shown array
            showCity();
            //if guessed word is complete
            if(guessedWord.join('') === word){
                divLifes.innerHTML = "You win!!";
                disabledAllButtons(); //helper to disable the buttons for no more clicks
            }
        } else{

            lifes--;
            showLifes();

            //game finish with the lifes
            if(lifes <=0){
                divLifes.innerHTML = "You lost!!";
                disabledAllButtons();
            }
        }
    });

}

function disabledAllButtons(){
    let buttons = divLetters.querySelectorAll("button");
    buttons.forEach(button =>{
        button.disabled = true;
    });
}


function play(){
    lifes = 10;
    guessedWord = [];

    generateCity();
    showCity();
    showLifes();
    clickOnButton();
}