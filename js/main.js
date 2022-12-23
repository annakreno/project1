/*----- constants -----*/

const iconImages = [
    {name: "diamond", html: "<img class='icons' id='diamond' src='slot_machine_images/Diamond.png'/>"},
    {name: "cherry", html: "<img class='icons' id='cherry' src='slot_machine_images/cherry3.png'/>"},
    {name: "bell", html: "<img class='icons' id='bell' src='slot_machine_images/bell4.png'/>"},
]

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

const buttonEl = document.querySelector("button");
const allSlots = document.querySelectorAll(".container > div");
const slotEl1 = document.getElementById("slot1");
const slotEl2 = document.getElementById("slot2");
const slotEl3 = document.getElementById("slot3");
let winner = document.querySelector("h3");

/*----- event listeners -----*/
buttonEl.addEventListener("click", init);

/*----- functions -----*/

function init() {
    updateIcons()
    checkForWinner()

}

function getRandomNum() {
    return Math.floor(Math.random() * 3);
}

function updateIcons() {
    allSlots.forEach(slot => {
        const newIdx = getRandomNum();
        slot.innerHTML = iconImages[newIdx].html;
    });
}

function checkForWinner(allSlots) {
    if(slotEl1.innerHTML === slotEl2.innerHTML && slotEl2.innerHTML === slotEl3.innerHTML) {
        winner.innerText = "You Won!" 
    } else {
        winner.innerText = "You Lost :( - click button to play again"
    }
}
