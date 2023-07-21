class List {

    #listOfNumbers = [];
    size = 0;

    validate(index) {
        return index >= 0 && index < this.#listOfNumbers.length;
    }

    sortAsc() {
        this.#listOfNumbers.sort((a, b) => a - b);
    }

    updateSize() {
        this.size = this.#listOfNumbers.length;
    }

    add(element) {
        this.#listOfNumbers.push(element);
        this.sortAsc();
        this.updateSize();
    }

    remove(index) {
        if (!this.validate(index)) {
            throw new Error('Index points outside the length of the collection');
        }

        this.#listOfNumbers.splice(index, 1);
        this.updateSize();
    }

    get(index) {
        if (!this.validate(index)) {
            throw new Error('Index points outside the length of the collection');
        }

        return this.#listOfNumbers[index];
    }
}
