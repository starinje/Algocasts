// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  let counterObject = {}

  for(let char of str){
    if(!counterObject[char]){
      counterObject[char] = 1
    } else {
      counterObject[char]++
    }
  }
  
  let maxChar = ''
  let maxValue = 0

  for(let char in counterObject){
    if(counterObject[char] > maxValue){
      maxValue = counterObject[char]
      maxChar = char
    }
  }
  
  return maxChar
}


module.exports = maxChar;
