/*

Rewrite the function nonMutatingSplice by using slice instead of splice. 
It should limit the provided cities array to a length of 3, 
and return a new array with only the first three items.

Do not mutate the original array provided to the function.

*/

function nonMutatingSplice(cities) {
    // Only change code below this line
    
    var new_cities = cities.slice(0, 3) 
    return new_cities;
  
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);