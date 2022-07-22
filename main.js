'use strict'

const card = document.querySelector('.add-card');
const newCard = document.createElement('div').classList.add('card');

function addCard(){
   addCard.parentNode.appendChild(newCard);
   return;
}
 card.addEventListener('click', addCard);