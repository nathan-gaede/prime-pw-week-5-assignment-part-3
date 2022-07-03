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
 * @param {string} title 
 * @param {string} artist 
 * @param {string} yearPublished 
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
}
addToCollection( 'Dirt', 'Alice in Chains', '1992');

console.log(addToCollection('Dirt', 'Alice in Chains', '1992'))


