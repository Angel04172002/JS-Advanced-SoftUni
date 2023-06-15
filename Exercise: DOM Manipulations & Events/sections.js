function create(words) {

   let contentElement = document.getElementById('content');
   
   words.forEach(w => {
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = w;
      paragraphElement.style.display = 'none';
      divElement.appendChild(paragraphElement);

      divElement.addEventListener('click', function(e) {
         console.log(e.currentTarget);
         e.currentTarget.firstElementChild.style.display = 'block';
      });

      contentElement.appendChild(divElement);
   });
}
