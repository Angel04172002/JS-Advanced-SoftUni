function addItem() {

    let ulElement = document.getElementById('items');
    let newInputElement = document.getElementById('newItemText');
    let newLiEelement = document.createElement('li');
    newLiEelement.textContent = newInputElement.value;
    ulElement.appendChild(newLiEelement);

}
