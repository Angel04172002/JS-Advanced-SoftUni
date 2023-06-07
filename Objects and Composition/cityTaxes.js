function cityTaxes(name, population, treasury) {

    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population + (percentage / 100 * this.population));
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury - (percentage / 100 * this.treasury));
        },
    };

    return obj;
}
