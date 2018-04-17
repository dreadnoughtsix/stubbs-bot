const {Command} = require('discord.js-commando');
let {feed: feedConfig} = require('../../config.json');
let foodCount = 0;

module.exports = class FeedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            group: 'interact',
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

        feedConfig = feedConfig || {};
        this.VALID_FOODS = feedConfig.validFoods || [];
        this.MAX_FOOD_COUNT = feedConfig.maxFoodCount || 5;
    }

    run(message, {food}) {
        let returnMsg = '';
        let interval = 1000;

        if (foodCount == this.MAX_FOOD_COUNT) {
            returnMsg += 'I need to poop now **-runs to the toilet-**';
            foodCount = 0;
        } else if (!food) {
            returnMsg += 'Oh, you don\'t have any food for me? **-cries-**';

        } else if (this.VALID_FOODS.indexOf(food.toLowerCase()) >= 0) {
            message.say('**-sniffs food-**');
            foodCount++;
            interval = 2000;
            returnMsg += 'I love ' + food + '! **-munch munch munch-**';
        } else {
            message.say('**-sniffs food-**');
            interval = 1500;
            returnMsg += 'Eww, what is that? **-runs away-**';
        }

        setTimeout(function() {
            message.say(returnMsg);
        }, interval);
    }
};
