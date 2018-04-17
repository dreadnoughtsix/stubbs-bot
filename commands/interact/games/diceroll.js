let {rolldice : diceConfig} = require ('../../../config.json');
module.exports = class DiceRollGame {

    constructor() {
        diceConfig = diceConfig || {};

        this.RESPONSES = diceConfig.response || [];
        
    }
    getRoll() {
        let retMsg = 'I rolled a ';
        console.log(this.RESPONSES.length);
        retMsg += Math.floor(Math.random() * 12) + 1;
        return retMsg + '!';
    }
}
