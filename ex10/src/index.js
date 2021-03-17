function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "James Blunt",
            title: "Goodbye my lover",
            release_year: 1998,
            formats: {
                1: "MP3",
                2: "BB",
                3: "CC"
            },
            gold: true
        }
    };
    return myMusic
}

console.log(myFunction());
myFunction();
module.exports = myFunction;