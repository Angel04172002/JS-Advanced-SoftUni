function lockedProfile() {

    let mainElement = document.querySelector('main');

    mainElement.addEventListener('click', showAndHideInfo);


    function showAndHideInfo(e) {

        if (e.target.tagName === 'BUTTON') {

            let lockBtn = e.target.parentNode.querySelector('input[value="lock"]');
            let isChecked = lockBtn.checked;

            if (isChecked) {
                return;
            };

            let hiddenFields = e.target.previousElementSibling;

            if (e.target.textContent === "Show more") {
                e.target.textContent = "Hide it";
                hiddenFields.style.display = 'block';
            } else {
                e.target.textContent = "Show more";
                hiddenFields.style.display = 'none';
            };
        };
    }
}
