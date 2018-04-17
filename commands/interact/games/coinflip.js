module.exports = class FlipCoinGame {
    static getCoinFlip() {

        let response = 'I flipped ';
        let randCoin = Math.floor(Math.random() * 2);

        if (randCoin) response += 'heads! ALL HAIL THE QUEEN!';
        else response += 'tails! ALL HAIL THE CARIBOU!';
        return response;
    }

}
