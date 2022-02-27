const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');

let chosenCards = [];
let chosenCardsIds = [];
let matches = [];
import cards from './data/cards';


cards.sort(() => 0.5 - Math.random());

const createBoard = function() {
   for (var i = 0; i < cards.length; i++) {
      var card = document.createElement('img');
      console.log(card)
      card.setAttribute('src', './CardImgs/Blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard)
      grid.appendChild(card);
   }
}

const flipCard = function() {
   var cardId = this.getAttribute('data-id')
   chosenCards.push(cards[cardId].name)
   chosenCardsIds.push(cardId)
   this.setAttribute('src', cards[cardId].img)
   if (chosenCards.length === 2) {
      setTimeout(checkMatch, 300)
   }
}

const checkMatch = function() {
   let cards = document.querySelectorAll('img')
   const optionOneId = chosenCardsIds[0];
   const optionTwoId = chosenCardsIds[1];
   if (chosenCards[0] === chosenCards[1]) {
      alert('MATCH FOUND');
      matches.push(chosenCards)
   } else {
      cards[optionOneId].setAttribute('src', 'CardImgs/Blank.png');
      cards[optionTwoId].setAttribute('src', 'CardImgs/Blank.png');
      alert('NOT A MATCH!  TRY AGAIN.')
   }
   chosenCards = [];
   chosenCardsIds = [];
   scoreDisplay.textContent = matches.length;
   if (matches.length === cards.length / 2) {
      scoreDisplay.text = 'Nice! You found all the matches!'
   }
}



createBoard();