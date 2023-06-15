function addItem() {
    let ulElement = document.getElementById('items');
    let newInputElement = document.getElementById('newItemText');
    let newLiEelement = document.createElement('li');
    let newAElement = document.createElement('a');

    newLiEelement.textContent = newInputElement.value;
    newAElement.setAttribute('href', '#');
    newAElement.textContent = '[Delete]';

    newAElement.addEventListener('click', function() {
        newAElement.parentNode.remove();
    });

    newLiEelement.appendChild(newAElement);
    ulElement.appendChild(newLiEelement);
}
