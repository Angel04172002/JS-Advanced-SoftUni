function addItem() {

    let newItemTextElement = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let menuElement = document.getElementById('menu');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = newItemTextElement.value;
    newOptionElement.value = newItemValue.value;

    menuElement.appendChild(newOptionElement);

    newItemTextElement.value = '';
    newItemValue.value = '';
}
