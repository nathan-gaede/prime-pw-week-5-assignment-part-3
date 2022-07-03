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
        
console.log(array[i].title, 'by',array[i].artist, 'published in',array[i].yearPublished);
        
}
   return; 
}
showCollection(collection);






