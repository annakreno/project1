/*----- constants -----*/

const iconImages = [
    {name: "diamond", html: "<img class='icons' id='diamond' src='slot_machine_images/Diamond.png'/>"},
    {name: "cherry", html: "<img class='icons' id='cherry' src='slot_machine_images/cherry3.png'/>"},
    {name: "bell", html: "<img class='icons' id='bell' src='slot_machine_images/bell4.png'/>"},
    {name: "seven", html: "<img class='icons' id='seven' src='slot_machine_images/lucky_seven.png'/>"},
    {name: "banana", html: "<img class='icons' id='banana' src='slot_machine_images/banana.png'/>"},
    {name: "clover", html: "<img class='icons' id='clover' src='slot_machine_images/clover2.png'/>"},
    {name: "horseshoe", html: "<img class='icons' id='horseshoe' src='slot_machine_images/horseshoe.png'/>"},
    {name: "coin", html: "<img class='icons' id='coin' src='slot_machine_images/coin.png'/>"},
]

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const allSlots = document.querySelectorAll(".container > div");
const slotEl1 = document.getElementById("slot1");
const slotEl2 = document.getElementById("slot2");
const slotEl3 = document.getElementById("slot3");
let winner = document.querySelector("div.winStatus");
let leverEl = document.getElementById("lever");
let confettiEl = document.getElementById("confetti");
let loseEffectEl = document.getElementById("loseEffect");
const winningsEl = document.querySelector(".points > h3:last-child");
const leverSoundEl = document.getElementById("leverSound");
const spinSoundEl = document.getElementById("spinSound");
const winSoundEl = document.getElementById("winSound");
const loseSoundEl = document.getElementById("loseSound");

/*----- event listeners -----*/
leverEl.addEventListener("click", init);

/*----- functions -----*/

function init() {
    leverPull();
    setTimeout(function() {spinSlots()}, 1000);
    setTimeout(function() {updateIcons()}, 4000);
    setTimeout(function(){checkForWinner()}, 5000);
}

function leverPull() {
    leverSoundEl.play();
    winner.innerText = "";
    setTimeout(function(){leverEl.innerHTML = "<img src='slot_machine_images/leverDown.png'>"}, 500);
    setTimeout(function(){leverEl.innerHTML = "<img src='slot_machine_images/leverUp.png'>"}, 1000);
}

function spinSlots() {
    spinSoundEl.play();
    slotEl1.innerHTML = "<img class='spinningSlot1' src='slot_machine_images/midSpin1.png'>";
    slotEl2.innerHTML = "<img class='spinningSlot2' src='slot_machine_images/midSpin2.png'>";
    slotEl3.innerHTML = "<img class='spinningSlot3' src='slot_machine_images/midSpin3.png'>";
    
}

function getRandomNum() {
    return Math.floor(Math.random() * 8);
}

function updateIcons() {
    allSlots.forEach(slot => {
        const newIdx = getRandomNum();
        slot.innerHTML = iconImages[newIdx].html;
    });
}

function checkForWinner(allSlots) {
    if(slotEl1.innerHTML === slotEl2.innerHTML && slotEl2.innerHTML === slotEl3.innerHTML) {
        winSoundEl.play();
        confettiEl.classList.add("confetti");
        setTimeout(function(){
            winner.innerHTML = "<h3> WINNER 🎉 </h3>";
        }, 500);
        if(winningsEl.innerText) {
            let amountWon = parseInt(winningsEl.innerText);
            amountWon = amountWon + 100;
            winningsEl.innerText = amountWon;
            } else {
                winningsEl.innerText = 100;
            }
        setTimeout(function() {
            confettiEl.classList.remove("confetti");
            winner.innerHTML = "<h3> CLICK THE LEVER TO PLAY AGAIN </h3>";
        }, 6750);
    } else {
        loseSoundEl.play();
        setTimeout(function(){
            loseEffectEl.classList.add("loseEffect");
            winner.innerHTML = "<h3> CLICK THE LEVER TO PLAY AGAIN </h3>";
        }, 500);
        setTimeout(function() {
            loseEffectEl.classList.remove("loseEffect");
        }, 2000);
    }
}
