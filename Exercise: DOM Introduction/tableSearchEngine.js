function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let searchInputElement = document.getElementById('searchField');
      let tableRowElements = document.querySelectorAll('table tbody tr');

      let inputText = searchInputElement.value.toLowerCase();

      Array.from(tableRowElements).forEach(x => {

         let data = x.textContent.toLowerCase();

         if (data.includes(inputText)) {
            x.setAttribute('class', 'select');
         } else {
            x.removeAttribute('class');
         };
      });
   }
}
