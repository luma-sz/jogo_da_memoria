const cards = document.querySelectorAll('.memory-card');

let VirouCarta = false;
let lockBoard = false;
let primeiraCarta, segundaCarta;

function flipCard(){ {
  if (lockBoard) return;
  if(this === primeiraCarta) return
  this.classList.toggle('flip');
}

if (!VirouCarta ){
  //primeiro clique
  VirouCarta = true;
  primeiraCarta = this;

  return;

} else {
  //segundo clique
  VirouCarta = false;
  segundaCarta = this;

    checkForMatch();
      }

function checkForMatch(){ //se as cartas combinam
  let isMatch = primeiraCarta.dataset.framework ===
    segundaCarta.dataset.framework;
 isMatch ? disableCards() : unflipCards();
} {
      unflipCards();
}

function disableCards() {
        primeiraCarta.removeEventListener('click', VirouCarta);
        segundaCarta.removeEventListener('click', VirouCarta);
}  
      
function unflipCards () { //se as cartas não combinam
    lockBoard = true;   
  
    setTimeout(() => { 
          primeiraCarta.classList.remove('flip');
          segundaCarta.classList.remove('flip');
      lockBoard = false;

          } ,1500)
      }
}
cards.forEach(card => card.addEventListener('click', flipCard));

