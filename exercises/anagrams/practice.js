// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function Anagrams(string1, string2) {

  const processedString1 = string1
                          .toLowerCase()
                          .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') //remove spaces and punctuation
                          .split('')
                          .sort()
                          .join('')
  
    const processedString2 = string2
                          .toLowerCase()
                          .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') //remove spaces and punctuation
                          .split('')
                          .sort()
                          .join('')

  return processedString1 == processedString2
}