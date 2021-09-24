
let numberOfFaces = prompt('How many :) faces do you want to generate?'); //sets the initial number of smiley faces

const theLeftSide = document.querySelector('#leftSide'); //targets the  left div

const theRightSide = document.querySelector('#rightSide'); //targets the right div

window.addEventListener('load', generateFaces); //calls the smileys up upon window load

let attempt = 0; //declare, initialize, and assign global attempt variable

const btn = document.createElement("button");

function generateFaces() {
    while(numberOfFaces <= 0 || isNaN(numberOfFaces)) {
        numberOfFaces = parseInt(prompt('Please enter only a number greater than zero.'));
    }
    for (let i=0; i < numberOfFaces; i++) { //for # of smileys - 1, do this once, starts count at 0
        let face = document.createElement('img'); //creates new img element in DOM
        face.src = 'images/smile.png'; //assigns smile.png to the img element in DOM
        let randomTop = Math.floor(Math.random() * 400) + 1; //generates a number between 1 and 400, adds +1 to tell it to start counting from 1
        let randomLeft = Math.floor(Math.random() * 400) + 1; //generates a number between 1 and 400, adds +1 to tell it to start counting from 1
        face.style.top = randomTop + 'px'; //assigns a random top position for face img in pixels
        face.style.left = randomLeft + 'px'; //assigns a random left positionfor face img in pixels
        theLeftSide.appendChild(face); //appends face to the left side for this iteration
    }
    const leftSideImages = theLeftSide.cloneNode(true); //copies the images generated on the left side
    leftSideImages.removeChild(leftSideImages.lastChild); //removes the last child, aka 1 smiley face
    theRightSide.appendChild(leftSideImages); //assigns the right side the copied images, less 1 child
    theLeftSide.lastChild.addEventListener('click', nextLevel); //the correct answer, user proceeds to play
    document.body.addEventListener('click', gameOver); //if user clicks outside of smileys, game over
    attempt += 1;
}
function nextLevel() {
    event.stopPropagation(); //ensures the event is only applied to one face at a time

    numberOfFaces += 1; //adds 5 new faces to the screen per side each time
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFaces(); //generates the new set of faces
}
function gameOver() {
    alert('Game . . . OVER! You had ' + attempt + ' attempts!' ) //lets the user know they're out of luck and how many attempts they had
    theLeftSide.lastChild.removeEventListener('click', nextLevel); //removes the action of clicking on smiley faces
    document.body.removeEventListener('click', gameOver); //removes the action of clicking on body
    
    //create a button element and style it
    btn.innerHTML = "LET'S PLAY AGAIN";
    document.body.appendChild(btn);
    btn.style.position = 'absolute';
    btn.style.marginTop = '220px';
    btn.style.marginLeft = '400px';
    btn.style.padding = '20px 60px';
    btn.style.backgroundColor = 'orange';
    btn.style.color = 'white';
    btn.style.fontSize = '1.2em';
    btn.addEventListener('click', reloadPage);
}
function reloadPage() {
    location = location;
}