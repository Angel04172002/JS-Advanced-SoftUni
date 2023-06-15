function validate() {
    
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    let emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', function(e) {

        if(e.currentTarget.value.match(pattern) === null) {
            emailInputElement.setAttribute('class', 'error');
        } else {
            emailInputElement.removeAttribute('class');
        };
    });

}
