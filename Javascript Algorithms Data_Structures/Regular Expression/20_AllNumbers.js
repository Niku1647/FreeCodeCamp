/*

Use the shorthand character class \d let movieName = "2001: A Space Odyssey";


*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; // Change this line
let result = movieName.match(numRegex).length;

