const {Command} = require('discord.js-commando');
var testMsg = '(TESTING: play command group)';
let foodCount = 0;

module.exports = class RPSCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'play',
            memberName: 'play',
            description: 'Play with Stubbs',
            examples: ['!play <game>'],
            args: 
            [
                {
                    key: 'game',
                    prompt: 'I can play a lot of games!',
                    type: 'string',
                    default: ''
                },
                {
                    key: 'gameInput',
                    prompt: '',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }

    run(message, {game, gameInput}) {
        let responseMessage = 'I drew ';
        if (game == 'rps') {

            let botResponse = ['rock', 'paper', 'scissors'];
            let gameOutput = ['Tie!', 'I win!', 'I lose ;-;', 'Is that what a Spock is?'];
            let decision = Math.floor(Math.random() * 3);
            let gameDecision = 0;

            switch (gameInput) {
                case 'rock':
                    if (botResponse[decision] == 'rock') gameDecision = 0;
                    else if (botResponse[decision] == 'paper') gameDecision = 1;
                    else if (botResponse[decision] == 'scissors') gameDecision = 2;
                    break;
                case 'paper':
                    if (botResponse[decision] == 'paper') gameDecision = 0;
                    else if (botResponse[decision] == 'scissors') gameDecision = 1; 
                    else if (botResponse[decision] == 'rock') gameDecision = 2;
                    break;
                case 'scissors':
                    if (botResponse[decision] == 'scissors') gameDecision = 0;
                    else if (botResponse[decision] == 'rock') gameDecision = 1;
                    else if (botResponse[decision] == 'paper') gameDecision = 2;
                    break;
                default:
                    gameDecision = 3;
            }

            setTimeout(function () {
                message.say(responseMessage + botResponse[decision] + ". " + gameOutput[gameDecision]);
            }, 1000);
        } else if (game == 'coinflip') {
            let responseMsg = 'I flipped ';
            let randCoin = Math.floor(Math.random() * 2);
            if (randCoin) responseMsg += 'head! THE QUEEN!';
            else responseMsg += 'tail! THE CARIBOU!!';

            setTimeout(function () {
                message.say(responseMsg);
            }, 1000);
        }
    }
};
