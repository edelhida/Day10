function myFunction(myObj, checkProp) {
    // Only change code below this line 
    
   var myObj = {
       title: "Titanic",
       song: "My Heart Will Go On",
       genre: "drama"

   }; 
 myObj.hasOwnProperty("title");
 myObj.hasOwnProperty("song");
 myObj.hasOwnProperty("genre");
 
 
 

    console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title"));
    console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song"));
    console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre"));
    console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor"));
    

    // Only change code above this line
    
}
    myFunction();
    module.exports = myFunction;