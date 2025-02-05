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

  let charMap1 = createCharMap(string1)
  let charMap2 = createCharMap(string2)

  if(string1.length !== string2.length ){
    return false
  }

  for (let char in charMap1){
    if(charMap1[char] !== charMap2[char]){
      return false
    }
  }

  return true
}

function createCharMap(str){

  const charMap = {}

  for (let char of str){
    if(!charMap[char]){
      charMap[char] = 1
    } else {
      charMap[char]++
    }
  }
  return charMap
}