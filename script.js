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

for(const item in message_words){
    let randomNum= generateRandomNumber(message_words[item].length);
    let randomWord = message_words[item][randomNum];

    switch(item){
        case 'theme':
            todaysBuild.push(`The world you will build will be the theme: "${randomWord}"`);
            break;
        case 'colors':
            todaysBuild.push(`Focus on building with the color: "${randomWord}"`);
            break;
        case 'minifigure':
            todaysBuild.push(`Your main character in this world is a(n) "${randomWord}"`);
            break;
        default:
            todaysBuild.push('Looks like you are not building');
            break;
    }
}

const formatMessage = build => {
    const format = build.join('\n');
    console.log(format);
}

formatMessage(todaysBuild);

