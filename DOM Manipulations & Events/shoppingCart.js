function solve() {

   let addProductButtonElements = document.querySelectorAll('button.add-product');
   let checkoutButtonElement = document.querySelector('.checkout');
   let textareaElement = document.querySelector('textarea');
   let boughtProducts = [];

   let arrButtonElements = Array.from(addProductButtonElements);


   arrButtonElements.forEach(b => {
      b.addEventListener('click', function (e) {

         let productName = e.currentTarget.parentNode.previousSibling.previousSibling.childNodes[1].textContent;
         let productPrice = Number(e.currentTarget.parentNode.nextSibling.nextSibling.firstChild.textContent);
         textareaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         boughtProducts.push({ name: productName, price: productPrice });
      });
   });


   checkoutButtonElement.addEventListener('click', function (e) {

      let products = boughtProducts.reduce((acc, curr) => {

         if (!acc.includes(curr.name)) {
            acc.push(curr.name);
         };

         return acc;
      }, []);

      let sum = boughtProducts.reduce((acc, curr) => {
         return acc + Number(curr.price);
      }, 0);

      textareaElement.textContent += `You bought ${products.join(', ')} for ${sum.toFixed(2)}.`;

      arrButtonElements.forEach(x => {
         x.setAttribute('disabled', 'true');
         e.currentTarget.setAttribute('disabled', 'true');
      });
   });
}
