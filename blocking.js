/**
 * Created by Nick on 2016-09-08.
 */

var fs =require('fs');

var food = fs.readFileSync('food.txt', 'utf8');

console.log('FOOD\n');

console.log(food);


var drinks = fs.readFileSync('drinks.txt', 'utf8');

console.log('\n\nDRINKS\n');

console.log(drinks);