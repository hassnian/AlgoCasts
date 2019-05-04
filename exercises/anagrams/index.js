// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){
        const strA=cleaString(stringA);
        const strB=cleaString(stringB);
        return strA===strB?  true:  false
}
function cleaString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split("").sort().join("")
}

anagrams('rail safety', 'fairy tales')
module.exports = anagrams;


// function anagrams(stringA, stringB) {
        
//     const charMapA=buildCharMap(stringA)
//     const charMapB=buildCharMap(stringB)
//     console.log();
//     console.log(charMapB);
// if(Object.keys(charMapA).length !== Object.keys(charMapB).length){
//     return false
// }
// for (let char in charMapA){
//     if(charMapA[char]!==charMapB[char]){
//         return false
//     }
    
// }
// return true

// }
// function buildCharMap(string){
// let charMap={}
// for (let char of string.replace(/[^\w]/g,'').toLowerCase()){
//    charMap[char]=charMap[char]++ || 1
// } 
// return charMap

// }