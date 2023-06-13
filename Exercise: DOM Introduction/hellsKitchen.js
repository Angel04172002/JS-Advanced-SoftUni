function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function getAverageSalary(restaurant) {

      let workers = restaurant.workers;

      let sum = workers.reduce((acc, curr) => {
         return acc + curr.salary;
      }, 0);

      return sum / workers.length;
   }  
   
   function getBestSalary(restaurant) { 

      let sortedWorkers = restaurant.workers.sort((a, b) => b.salary - a.salary);
      return sortedWorkers[0].salary;
   }

   function getBestRestaurant(restaurant) {

      let keys = Object.keys(restaurant);

      keys.sort((a, b) => {
         
         let firstCriteria = restaurant[b].averageSalary - restaurant[a].averageSalary;
         let secondCriteria = keys.indexOf(a) - keys.indexOf(b);

         return firstCriteria || secondCriteria;
      });

      return restaurant[keys[0]];
   }
   
   function displayRestaurant(bestRestaurant) {

      let output = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

      return output;
   }


   function displayWorkers(bestRestaurant) {

      let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let output = "";

      for(let worker of sortedWorkers) {

         output += `Name: ${worker.name} With Salary: ${worker.salary} `; 
      }

      return output;
   }


   function buildRestaurant(arr) {
      let restaurantObj = {};

      arr.forEach(x => {

         let [restaurant, workers] = x.split(' - ');
         let splittedWorkers = workers.split(', ');

         if(!restaurantObj[restaurant]) {
            restaurantObj[restaurant] = {};
            restaurantObj[restaurant].name = restaurant;
            restaurantObj[restaurant].workers = [];
         };

         for(let worker of splittedWorkers) {

            let [workerName, salary] = worker.split(' ');
            salary = Number(salary);
            restaurantObj[restaurant].workers.push({name: workerName, salary});
         };

         restaurantObj[restaurant].averageSalary = getAverageSalary(restaurantObj[restaurant]);
         restaurantObj[restaurant].bestSalary = getBestSalary(restaurantObj[restaurant]);
      });

      return restaurantObj;
   }


   let textareaElement = document.querySelector('#inputs > textarea');
   let bestRestaurantDivElement = document.querySelector('#bestRestaurant > p');
   let bestRestaurantWorkersDivElement = document.querySelector('#workers > p');

   function onClick() {

      let arrOfRestaurants = JSON.parse(textareaElement.value);
      let restaurant = buildRestaurant(arrOfRestaurants);
      let bestRestaurant = getBestRestaurant(restaurant);

      bestRestaurantDivElement.textContent = displayRestaurant(bestRestaurant);
      bestRestaurantWorkersDivElement.textContent = displayWorkers(bestRestaurant);

   }
}
