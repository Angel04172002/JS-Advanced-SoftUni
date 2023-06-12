function extractText() {
    
    let listElement = document.getElementById('items');
    let content = listElement.textContent;

    let textareaElement = document.getElementById('result');
    textareaElement.textContent = content;
}
