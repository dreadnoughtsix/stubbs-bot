const {CommandoClient} = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');

const client = new CommandoClient({
    commandPrefix: '!',
    owner: config.ownerKey,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['play', 'Play with Stubbs']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        enable: false,
        disable: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in as ' + client.user.username);
    client.user.setActivity('Flopping Around');
});

client.login(config.loginKey);
