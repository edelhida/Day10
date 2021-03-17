// Only change code below this line 
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
    
};

function myFunction(myClothes) {
var hatValue = myClothes.hat;
var shirtValue = myClothes.shirt;
var shoesValue = myClothes.shoes;
return { hatValue, shirtValue, shoesValue };

}
// Only change code above this line 

console.log(myFunction(myClothes));
module.exports =  myFunction(myClothes);