function focused() {

    let inputElements = document.querySelectorAll('input[type="text"]');


    Array.from(inputElements).forEach(i => {

        i.addEventListener('focus', function (e) {

            e.currentTarget.parentNode.setAttribute('class', 'focused');
        });

        i.addEventListener('blur', function(e) {

            e.currentTarget.parentNode.removeAttribute('class');
        });
    });

}
