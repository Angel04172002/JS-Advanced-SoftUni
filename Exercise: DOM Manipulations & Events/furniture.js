function solve() {

  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('#container button'));
  let textareaElements = Array.from(document.querySelectorAll('#container textarea'));
  let tableBody = document.querySelector('tbody');

  generateBtn.addEventListener('click', addNewRow);
  buyBtn.addEventListener('click', showResult);


  function tr(...content) {
    return createElement('tr', {}, ...content);
  }


  function td(...content) {
    return createElement('td', {}, ...content);
  }

  function p(...content) {
    return createElement('p', {}, ...content);
  }


  function createElement(tagName, props, ...data) {

    let newElement = document.createElement(tagName);
    let entry = '';

    for (let prop in props) {
      newElement[prop] = props[prop];
    };

    for (let content of data) {

      if (typeof content === 'number' || typeof content === 'string') {
        entry = document.createTextNode(content);
      } else {
        entry = content;
      };

      newElement.appendChild(entry);
    };

    return newElement;
  }


  const items = [];

  function addNewRow() {


    let input = JSON.parse(textareaElements[0].value);

    for (let item of input) {

      let { img, name, price, decFactor } = item;
      let checkbox = createElement('input', { type: "checkbox" }, '');
      let image = createElement('img', { src: img });

      let tableRowElement = tr(

        td(image),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td(checkbox)
      );


      tableBody.appendChild(tableRowElement);

      items.push({
        element: tableRowElement,
        isChecked,
        item
      });

      function isChecked() {
        return checkbox.checked;
      }
    };
  }


  function showResult() {

    let result = items.filter(i => i.isChecked()).reduce((acc, { item: c }, i, a) => {
    
    acc.furniture.push(c.name);
    acc.total += Number(c.price);
    acc.avgDec += Number(c.decFactor) / a.length;

    return acc;

    }, { furniture: [], total: 0, avgDec: 0 });

  
    textareaElements[1].value = `Bought furniture: ${result.furniture.join(', ')}\nTotal price: ${result.total.toFixed(2)}\nAverage decoration factor: ${result.avgDec}`;
  }
}
