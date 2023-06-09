function solve() {

    let mageHero = {

        mageProto: {
            cast: function (spellname) {
                this.mana--;
                console.log(`${this.name} cast ${spellname}`)
            },
        },

        mage: function (name) {

            let mageObj = {
                ...this.mageProto,
                name,
                mana: 100,
                health: 100
            };

            return mageObj;
        },
    };


    let fighterHero = {

        fightProto: {

            fight: function() {

                this.stamina--;
                console.log(`${this.name} slashes at the foe!`)
            },
        },

        fighter: function(name) {

            let fighterObj = {
                ...this.fightProto,
                name,
                stamina: 100,
                health: 100
            };

            return fighterObj;
        },
    };

    let heroes = {
        ...mageHero,
        ...fighterHero
    };

    return heroes;
}
