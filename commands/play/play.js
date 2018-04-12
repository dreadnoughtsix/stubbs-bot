const {Command} = require('discord.js-commando');
const {RPSGame} = require('./rps.js');

module.exports = class PlayCommand extends Command {
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
        let responseMessage = '';
        if (game == 'rps') {

            RPSGame rps = new RPSGame();
            responseMessage += rps.getDecision(gameInput);

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
