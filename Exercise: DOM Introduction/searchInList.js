function search() {

   let liElements = document.querySelectorAll('#towns li');
   let inputElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');
   let matchesFound = 0;

   Array.from(liElements).forEach(x => {
      if(x.textContent.includes(inputElement.value)) {
         x.style.fontWeight = 'bold';
         x.style.fontStyle = 'italic';
         matchesFound++;
      } else {
         x.style.fontWeight = 'normal';
         x.style.fontStyle = 'normal';
      };
   });

   let output = `${matchesFound} matches found`;
   resultElement.textContent = output;
}
