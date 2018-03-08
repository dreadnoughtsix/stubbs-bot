const {Command} = require('discord.js-commando');
var testMsg = '(TESTING: play command group)';
let foodCount = 0;

module.exports = class FeedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            group: 'play',
            memberName: 'feed',
            description: 'Pet Stubbs',
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
        console.log('Food Count:', foodCount);
        if (foodCount == 1) {
            returnMsg += 'I need to poop now **-runs to the toilet-**';
        }
        else if (!food) {
            returnMsg += 'Oh, you don\'t have any food for me? **-cries-**';
        } else {
            message.say('**-sniffs food-**');
            foodCount++;
            returnMsg += 'I love ' + food + '! **-munch munch munch-**';
        }
        setTimeout(function() {
            message.say(returnMsg);
        }, 2000);
    }
};
