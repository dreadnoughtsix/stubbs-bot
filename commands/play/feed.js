const {Command} = require('discord.js-commando');
let foodCount = 0;

module.exports = class FeedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            group: 'play',
            memberName: 'feed',
            description: 'Feed Stubbs',
            examples: ['feed <food>'],
            args: 
            [
                {
                    key: 'food',
                    prompt: 'I can eat chicken, pork, or dog treats only!',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }

    run(message, {food}) {
        let returnMsg = '';
        let interval = 1000;

        if (foodCount == 1) {
            returnMsg += 'I need to poop now **-runs to the toilet-**';

        } else if (!food) {
            returnMsg += 'Oh, you don\'t have any food for me? **-cries-**';

        } else {
            message.say('**-sniffs food-**');
            foodCount++;
            interval = 2000;
            returnMsg += 'I love ' + food + '! **-munch munch munch-**';
        }

        setTimeout(function() {
            message.say(returnMsg);
        }, interval);
    }
};
