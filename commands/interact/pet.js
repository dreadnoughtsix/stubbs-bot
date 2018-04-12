const {Command} = require('discord.js-commando');
var testMsg = '(TESTING: play command group)';

module.exports = class PetCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pet',
            group: 'interact',
            memberName: 'pet',
            description: 'Pet Stubbs',
            examples: ['pet']
        });
    }
   
    run(message) {
        return message.say('Did you pet me? OH BOY! **\*flails around\***');
    }
};
