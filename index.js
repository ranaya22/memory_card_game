//This code works for just flipping and matching


const cards = document.querySelectorAll('.game');
shuffle();
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let score = 0;


document.querySelector(".scoreP").textContent = score;






cards.forEach(card => card.addEventListener('click',flipcard));


let restartBtn = document.getElementById('restartBtn');
  restartBtn.addEventListener("click", resetBoard);






  function shuffle() {
    cards.forEach(card =>{
      let randomCard = Math.floor(Math.random()*9);
      card.style.order = randomCard;


    });  
  }


function flipcard() {
    if (lockBoard) return;
    this.classList.add('flip');
    if (!hasFlippedCard){ //first card flip
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        hasFlippedCard = false;
        secondCard = this;
        //looking to see if my first and second card match
        checkForMatch();


        score++;
        document.querySelector(".scoreP").textContent = score;


}


function checkForMatch() {    
    let isMatch = firstCard.dataset.setting === secondCard.dataset.setting;
    isMatch ? disableCards() : unflipCards();
    }
function disableCards() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);
}
function unflipCards() {
    lockBoard = true;
    setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 450);
}


function resetBoard() {
   location.reload();
   score = 0;
   document.querySelector(".score").textContent = score;


}
