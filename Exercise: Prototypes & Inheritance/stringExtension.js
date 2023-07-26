(function () {

    String.prototype.ensureStart = function (str) {

        let currentString = this.toString();

        if (!currentString.startsWith(str)) {
            return `${str}${currentString}`;
        }

        return currentString;
    };

    String.prototype.ensureEnd = function (str) {

        let currentString = this.toString();

        if (!currentString.endsWith(str)) {
            return `${currentString}${str}`;
        }

        return currentString;
    };

    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    };

    String.prototype.truncate = function (n) {

        const FULLSTOP = '.';
        const PERIODS = '...';

        let currentString = this.toString();

        if (n <= 3) {
            return FULLSTOP.repeat(n);
        }

        if (currentString.length <= n) {
            return currentString;
        }

        let splittedString = currentString.substr(0, n - 2);
        let lastIndex = splittedString.lastIndexOf(' ');

        if (lastIndex !== -1) {
            return `${currentString.substr(0, lastIndex)}${PERIODS}`;
        }

        return `${currentString.substr(0, n - 3)}${PERIODS}`
    };

    String.format = function (string, ...params) {

        for (let i = 0; i < params.length; i++) {

            let index = string.indexOf(`{${i}}`);

            while (index !== -1) {
                string = string.replace(`{${i}}`, params[i]);
                index = string.indexOf(`{${i}}`);
            }
        }

        return string;
    }

})();
