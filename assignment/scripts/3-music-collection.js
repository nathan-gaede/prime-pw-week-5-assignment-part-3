console.log('***** Music Collection *****')

//Create variable "collection" as an empty array.
const collection = [ 
    
]

//Testing for empty array.
console.log(collection);

//Create function "addToCollection". Album title, artist, yearPublished are the 
//input parameters (string).

/**
 * 
 * @param {*} title 
 * @param {*} artist 
 * @param {*} yearPublished 
 * @returns 
 */

function addToCollection( title, artist, yearPublished ) {
    const addAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        
        };
collection.push(addAlbum);
return addAlbum;
};

console.log(addToCollection('Dirt', 'Alice in Chains', '1992'))

//Add five more albums with a mix of same and different artists and years published.

console.log(addToCollection('Jar of Flies', 'Alice in Chains', '1994'));
console.log(addToCollection('Core', 'Stone Temple Pilots', '1992'));
console.log(addToCollection('The Blackening', 'Machine Head', '2007'));
console.log(addToCollection('The Wall', 'Pink Floyd', '1979'));
console.log(addToCollection('Master of Puppets', 'Metallica', '1986'));
//Console.log the collection array.
console.log(collection);

//Create function called showCollection. This function should take in an 
//array parameter.

/**
 * 
 * @param {*} array 
 */

function showCollection( array, ) {
//Console.log the number of items in the array.
    console.log(array.length)
//Loop over the array and console.log each album's information formatted like
//`TITLE by ARTIST, published in YEAR.
    for ( i=0; i < array.length; i +=1 ) {
//Added [i] after array to allow each album's information to be console.logged
//Without the [i], results were undefined as array.title did not "dig down"
//far enough to access albums that reside in collection array.       
console.log(array[i].title, 'by',array[i].artist, 'published in',array[i].yearPublished);
        
}
   return; 
}
//Test the showCollection function.
showCollection(collection);

//Add a function named findByArtist that takes in a string parameter.
//Create an array to hold any results, empty to start.
//Loop through the `collection` and add any objects with a matching artist to the array.
//Return the array with the matching results. If no results are found, return an empty array.

//Set parameters
/**
 * 
 * @param {string} artistInput 
 * @returns artistArray
 */

 
function findByArtist( artistInput, ) {
    let artistArray = []
    //console.log(artistInput);
    //Created for loop and then tried to get a for of loop to work further down the code.
    // for ( let i = 0; i < collection.length; i +=1) {
    //     if (artistInput === collection[i].artist) {
            
    
    
    for ( let album of collection ) {
        if (artistInput === album.artist) {
        artistArray.push(album)
        }
    }
    
    
    
    // console.log(artistArray)
    return artistArray;
}

//Testing for a single match
console.log(findByArtist( 'Alice in Chains',))
//Testing for no match and empty array
console.log(findByArtist( 'Rage Against the Machine',))
//Testing one match
console.log(findByArtist( 'Metallica',))
//Accessing the collection table.
console.table(collection)
//Testing to access the artists in the collection.
console.log(collection[0].artist)







