function solve() {

  let textareaElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let textareaElementValue = textareaElement.value;
  let splittedText = textareaElementValue.split('.').filter(x => x.length > 0).map(s => s + '.');

  let roof = Math.ceil(splittedText.length / 3);

  for(let i = 0; i < roof; i++) {
    
     let paragraphText = splittedText.splice(0, 3).join('');
     outputElement.innerHTML += `<p>${paragraphText}</p>`;
  };
}

