// Only change code below this line 


function myFunction(propName) {
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar - roar"
    };

    delete lion[propName];
    return lion;
};



console.log(myFunction("roar"));
// Only change code above this line 

myFunction("roar");
module.exports = myFunction;