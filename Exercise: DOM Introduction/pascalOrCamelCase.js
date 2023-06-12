function solve() {

  let cases = {
    "Camel Case": function (input) {

      let arr = input.split(' ').map((x, i) => {
        if (i != 0) {
          return x[0].toUpperCase() + x.substring(1).toLowerCase();
        };
        return x.toLowerCase();
      });

      return arr.join('');
    },

    "Pascal Case": function (input) {

      let arr = input.split(' ').map(x => x[0].toUpperCase() + x.substring(1).toLowerCase());
      return arr.join('');
    },
  };

  let firstInputElement = document.getElementById('text').value;
  let secondInputElement = document.getElementById('naming-convention').value;

  let caseFunc = cases[secondInputElement];
  let modifiedText = 'Error!';


  if(caseFunc) {
    modifiedText = caseFunc(firstInputElement);
  };

  let resultElement = document.getElementById('result');

  resultElement.textContent = modifiedText;
}
