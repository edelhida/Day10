// Only change code below this line 
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
};

function myFunction(myFood) {
var vegetableValue = myFood ["vegetable"];
var fruitValue = myFood["fruit"];
var drinkValue = myFood["drink"];

return { vegetableValue, fruitValue, drinkValue };
}
// Only change code above this line 

console.log(myFunction(myFood));
module.exports =  myFunction(myFood);