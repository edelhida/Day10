// Only change code below this line 
var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
};

function myFunction(name) {
school.name = name;
return school;


}
console.log(myFunction("Paragon"));
// Only change code above this line 

myFunction();
module.exports = { school, myFunction };