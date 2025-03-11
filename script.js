// Generate random number
const generateRandomNumber = number => {
    return Math.floor(Math.random()* number)
}

// Words for message that will be chosen randomly
const message_words = {
    theme: ['pirate', 'space', 'art', 'star wars', 'marvel', 'botanicals', 'icons', 'ideas', 'city'],
    colors: ['blue', 'red', 'yellow', 'brown', 'black', 'grey', 'orange', 'green', 'white'],
    minifigure: ['astronaut', 'adventure', 'hero', 'villain', 'knight', 'bandit', 'wizard', 'jedi']
}

// Store build in empty array
let todaysBuild = [];

for(const item of message_words){
    let randomWord = generateRandomNumber(message_words[item].length);

    switch(message_words[item]){
        case 'theme':
            todaysBuild = `Today focus on sets with the Theme: "${randomWord}"`;
        case 'colors':
            todaysBuild = `Main color of your build today be: "${randomWord}"`;
        case 'minifigure':
            todaysBuild = `Today's build will be centered on a(n) "${randomWord}" character`;
        default:
            todaysBuild = 'Looks like you are not building';
    }
};


console.log(todaysBuild);
