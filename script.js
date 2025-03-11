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
