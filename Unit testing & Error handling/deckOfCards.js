function printDeckOfCards(cards) {

    let cardsToPrint = [];

    function createCard(face, suit) {

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        };

        const card = {
            face,
            suit,
            toString() {
                return `${this.face}${this.suit}`;
            },
        };

        return card;
    }

    for (let card of cards) {

        let tokens = card.split('');
        let suit = tokens.pop();
        let face = tokens.join('');

        try {
            cardsToPrint.push(createCard(face, suit));
        } catch (e) {
            console.log(e.message);
        };
    }

    return cardsToPrint
        .map(c => c.toString())
        .join(' ');
}
