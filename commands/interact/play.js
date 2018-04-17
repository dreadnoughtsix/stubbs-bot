const {Command} = require('discord.js-commando');
const RPSGame = require('./games/rps.js');
const FlipCoinGame = require('./games/coinflip.js');
const DiceRollGame = require('./games/diceroll.js');

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'interact',
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

        this.RPS = new RPSGame();
        this.DICE_ROLL = new DiceRollGame();
    }

    run(message, {game, gameInput}) {
        let responseMessage = '';

        if (game == 'rps') {
            responseMessage += this.RPS.getDecision(gameInput);

        } else if (game == 'coinflip') {
            responseMessage += FlipCoinGame.getCoinFlip();

        } else if (game == 'diceroll') {
            responseMessage += this.DICE_ROLL.getRoll();
        }
        
        setTimeout(function () {
            message.say(responseMessage);
        }, 1000);
    }
};
