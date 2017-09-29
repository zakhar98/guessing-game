class GuessingGame {
    constructor() {}
    

    setRange(min, max) {
    this.mn = min;
    this.mx = max;
    this.c;

    }

    guess() {
        this.c=Math.ceil((this.mn+this.mx)/2);
        return this.c;

    }

    lower() {
        this.mx=Math.ceil((this.mn+this.mx)/2);

    }

    greater() {
        this.mn=Math.ceil((this.mn+this.mx)/2);
    }
}

module.exports = GuessingGame;
