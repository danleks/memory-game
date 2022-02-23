document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const score = document.querySelector('.score');

    const cardsArray = [
        {
            name: 'cheeseburger',
            src: './images/cheeseburger.png',
        },
        {
            name: 'cheeseburger',
            src: './images/cheeseburger.png',
        },
        {
            name: 'fries',
            src: './images/fries.png',
        },
        {
            name: 'fries',
            src: './images/fries.png',
        },
        {
            name: 'hotdog',
            src: './images/hotdog.png',
        },
        {
            name: 'hotdog',
            src: './images/hotdog.png',
        },
        {
            name: 'ice-cream',
            src: './images/ice-cream.png',
        },
        {
            name: 'ice-cream',
            src: './images/ice-cream.png',
        },
        {
            name: 'milkshake',
            src: './images/milkshake.png',
        },
        {
            name: 'milkshake',
            src: './images/milkshake.png',
        },
        {
            name: 'pizza',
            src: './images/pizza.png',
        },
        {
            name: 'pizza',
            src: './images/pizza.png',
        },
    ]

    cardsArray.sort(() => .5 - Math.random());

    let cardsToMatch = [];

    // 1. create board
    function createBoard() {
        for (let i = 0; i < cardsArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // 2. check for matches
    function checkForMatch() {
        const cardOne = cardsToMatch[0].name;
        const cardTwo = cardsToMatch[1].name;

        if (cardOne === cardTwo) {
            alert('You found a match');
            +score.textContent++;
        } else {
            const cards = document.querySelectorAll('img');
            alert('Not this time. Try again');
            cards[cardsToMatch[0].id].setAttribute('src', './images/blank.png');
            cards[cardsToMatch[1].id].setAttribute('src', './images/blank.png');
        }

        if (+score.textContent === 6) {
            alert('Gongatulations. You found all the cards!');
        }

        cardsToMatch = [];
    }

    // 3. flip a card
    function flipCard() {
        let cardChosen = this;
        let cardChosenID = this.getAttribute('data-id');
        cardChosen.setAttribute('src', cardsArray[cardChosenID].src);

        cardsToMatch.push({
            name: cardsArray[cardChosenID].name,
            id: cardChosenID
        });


        if (cardsToMatch.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})