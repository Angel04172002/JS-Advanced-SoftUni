function createSortedList() {

    let instance = {

        list: [],
        size: 0,
        add(element) {
            this.list.push(element);
            this.size++;
            this.list.sort(this.compare);
            return instance;
        },
        remove(index) {
            this.validate(index);
            this.list.splice(index, 1);
            this.size--;
            this.list.sort(this.compare);
            return instance;
        },
        get(index) {
            this.validate(index);
            return this.list[index];
        },
        validate(index) {

            if(index < 0 || index >= this.list.length) {
                throw new Error();
            };
        },
        compare(a, b) {
            return a - b;
        },
    };

    return instance;
}
