class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;

        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {

        if(this.innerLength === 0) {
            return '...';
        }

        
        let stringToAdd =  this.innerString.length > this.innerLength ? '...' : '';

        return this.innerString.substring(0, this.innerLength) + stringToAdd;
    }
}
