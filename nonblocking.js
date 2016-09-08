/**
 * Created by Nick on 2016-09-08.
 */

var fs = require('fs');

var food = fs.readFile('food.txt','utf8', function(err, food){

    if(err){
        console.log(err);

    }else {
        console.log(food);
    }
});

console.log('FOOD\n');


var drinks = fs.readFile('drinks.txt','utf8', function(err, drinks){

    if(err){
        console.log(err);

    }else {
        console.log('\n\nDRINKS\n');
        console.log(drinks);
    }
});

