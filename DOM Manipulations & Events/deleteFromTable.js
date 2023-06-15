function deleteByEmail() {

    let emailInputElement = document.querySelector('input[name="email"]');
    let tableDataElements = document.querySelectorAll('tbody tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');
    let arrayOfTdElements = Array.from(tableDataElements);
    console.log(arrayOfTdElements);
    let tableDataToDelete = arrayOfTdElements.find(x => x.textContent === emailInputElement.value);

    if (tableDataToDelete) {
        resultElement.textContent = 'Deleted.';
        tableDataToDelete.parentNode.remove();
    } else {
        resultElement.textContent = 'Not found.';
    };
}
