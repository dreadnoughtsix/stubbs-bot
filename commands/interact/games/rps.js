module.exports = class RPSGame {
    constructor() {

        this.validMoves = ['rock', 'paper', 'scissors'];


        // Lose = -1
        // Tie = 0
        // Win = 1

        this.outcomes = {
            rock: {
                rock: 0,
                paper: 1,
                scissors: 2
            },

            paper: {
                paper: 0,
                scissors: 1,
                rock: 2
            },

            scissors: {
                paper: -1,
                scissors: 0,
                rock: 1,
                paper: 2
            }
        };

        this.decisions = ['Tie! Yay, we both win!', 'I lost ;-;', 'I won! Yay me! *wags tail*'];
    }

    getDecision(playerInput) {
        const botChoice = Math.floor(Math.random() * 3);

        let responseMsg = 'I drew ' + this.validMoves[botChoice] + '.';

        // If the player's input is valid
        if (this.validMoves.indexOf(playerInput) >= 0) {

            responseMsg += this.decisions[this.outcomes[this.validMoves[botChoice]][playerInput]];

        } else {
            responseMsg += ' What is that? Is that a Spock?';
        }

        return responseMsg;
    }
}
