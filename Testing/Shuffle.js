// There is one way to shuffle arrays, but should be avoided

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];


//The array appears to be shuffled, but it is very 
//unefficent for larger arrays! it's also less uniform
//than other shuffle methods
//! cards.sort(() => Math.random() - 0.5) 


//Fisher-Yates Algorithm

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]; //Destructering
    }
}

shuffle(cards);

console.log(cards);