const celebs = 
['Gordon Ramsay', 'Batman', 'Chris Moyles', 'Ariana Grande', 'Sia', 'Beyonce', 'Tetsuya Nomura', 'Dr Now', 'Arthur Morgan', 'Aloy'];
//first part of the non sequitur
const action = 
['was eating a donor kebab', 'was buying tent pegs', "was trying to measure people's elbows", 'was getting frustrated at a crossword', 'was stuck in a hedge', 'was running barefoot', 'was chewing their toenails', 'was throwing sandals', 'was brushing their teeth with icing sugar', 'begging for Starbucks'];
//second part of the non sequitur 
const location = 
['in Didcott', 'in the desert', 'in Nettos', 'while lost a million light years away from earth', 'in the sewers', 'in Farmfoods', 'outside a bridal wear shop', "while trapped in a genie's lamp", 'while riding a banana boat', 'while on fire'];
//third part of the non sequitur 

let randomCeleb = celebs[Math.floor(Math.random() * celebs.length)];
let randomAction = action[Math.floor(Math.random() * action.length)];
let randomLocation =location[Math.floor(Math.random() * location.length)];
//This will choose a random element from each array

function nonSequitur () {
    console.log(randomCeleb, randomAction, randomLocation);
};

console.log('WHO WAS DOING WHAT AND WHERE???');
nonSequitur();
