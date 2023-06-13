function toggle() {

    let textToShow = document.getElementById('extra');
    let moreButton = document.querySelector('#accordion .head .button');

    if (moreButton.textContent === 'More') {
        textToShow.style.display = 'block';
        moreButton.textContent = 'Less';
    } else {
        textToShow.style.display = 'none';
        moreButton.textContent = 'More';
    };
}

