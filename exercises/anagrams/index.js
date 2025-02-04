// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  // let characterMapStringA = {}
  // let characterMapStringB= {}

  // let stringACleaned = stringA
  //   .toLowerCase() //convert to lowercase
  //   .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') //replace punctuation and empty spaces
  //   .split('') //convert to array
  //   //.filter((char) => char !== ' ') //remove space characters
  //   .sort()

  // let stringBCleaned = stringB
  //   .toLowerCase() //convert to lowercase
  //   .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') //replace punctuation and empty spaces
  //   .split('') //convert to array
  //   //.filter((char) => char !== ' ') //remove space characters
  //   .sort()

  //   console.log(stringACleaned)
  //   console.log(stringBCleaned)

  
  // return stringACleaned.join('') == stringBCleaned.join('')

  const processedStringA = stringA
                              .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') //remove spaces and punctuation
                              .split('')
                              .sort()
                              .join('')
  
  const processedStringB = stringB
                              .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') //remove spaces and punctuation
                              .split('')
                              .sort()
                              .join('')
                          
  return processedStringA == processedStringB

}

let result = anagrams('string1 ', ' string1')
console.log(`Is Anagram: ${result}`)

module.exports = anagrams;
