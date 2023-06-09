function solve() {

    let obj = {
        mage(name) {

            let mageObj = {

                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            };

            return mageObj;
        },
        fighter(name) {

            let fighterObj = {

                name,
                health: 100,
                stamina: 100,
                fight() {

                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                },
            };

            return fighterObj;
        },
    };

    return obj;
}
