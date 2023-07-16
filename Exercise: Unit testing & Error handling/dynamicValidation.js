function validate() {

    const emailInputElement = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInputElement.addEventListener('change', onChange);

    function onChange(e) {

        const { currentTarget } = e;
        const currentTargetValue = currentTarget.value;

        const operation = pattern.test(currentTargetValue) ? 'remove' : 'add';
        emailInputElement.classList[operation]('error');
    }
}
