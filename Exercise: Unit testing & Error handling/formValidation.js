function validate() {

    //Dictionaries
    const html = {
        companyInfo: document.getElementById('companyInfo'),
        companyCheckbox: document.getElementById('company'),
        submitButton: document.getElementById('submit'),
        validDiv: document.getElementById('valid')
    };

    const inputElements = {
        username: document.getElementById('username'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        'confirm-password': document.getElementById('confirm-password'),
        companyNumber: document.getElementById('companyNumber')
    };


    //helper functions
    function checkLength(word, minLength, maxLength) {
        return word.length >= minLength && word.length <= maxLength;
    }

    function checkPassword(password, minLength, maxLength, field) {
        return (
            checkLength(password, minLength, maxLength) &&
            /^\w+$/g.test(password) &&
            inputElements[field].value === password
        );
    }

    const validate = {
        username: (value) => checkLength(value, 3, 20) && /^[a-zA-Z0-9]*$/g.test(value),
        email: (value) => /^.*@.*\..*$/g.test(value),
        password: (value) => checkPassword(value, 5, 15, 'confirm-password'),
        'confirm-password': (value) => checkPassword(value, 5, 15, 'password'),
        companyNumber: (value, isChecked) => {

            if (isChecked) {
                return value >= 1000 && value <= 9999
            };

            return true;
        },
    };

    //Attach events
    html.companyCheckbox.addEventListener('change', onChange);
    html.submitButton.addEventListener('click', onClick);

    //callbacks
    function onChange(e) {

        const { currentTarget } = e;
        const isChecked = currentTarget.checked;
        const style = isChecked ? 'block' : 'none';

        html.companyInfo.style.display = style;
        validate.companyNumber(inputElements.companyNumber, isChecked);
    }

    function onClick(e) {

        e.preventDefault();

        let isInvalidElement = false;

        Object.entries(inputElements).forEach(([name, element]) => {

            const isValid = validate[name](element.value, html.companyCheckbox.checked);
            const elementStyle = isValid ? 'border: none' : 'border-color: red';
            inputElements[name].style = elementStyle;

            if (!isValid) {
                isInvalidElement = true;
            };
        });

        const validDivDisplay = isInvalidElement ? 'none' : 'block';
        html.validDiv.style.display = validDivDisplay;
    }
}
