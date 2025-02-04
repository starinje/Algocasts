//write out all of the ways to loop
// all of the array methods....
//ways to declare a functions




//Reversing a string
function reverse(str) {
  return str.split('').reverse().join('');
}

function reverse(str) {
  let reversed = ''

  for (let character of str){
    reversed = character + reversed
  }

  return reversed
}

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}

// Array Reducing
Array.reduce((accumulator, item) => {
  return accumulator + item
}, 'startingValue')


//Array Filtering
Array.filter((item) => {
  item.name === 'someValue'
})

//Array Mapping
Array.map((item) => item + 1)


//palindrome detection
function palindrome(str) {

  let reversedStr = str.split('').reverse().join('')
  return str === reversedStr
  
}

function palindrome(str) {

  let strArray = str.split('')

  return strArray.every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

//Reverse an integer
function reverseInt(n) {

  const sign = Math.sign(n)
  const reversed = n
    .toString()
    .replace('-', '')
    .split('')
    .reverse()
    .join('')

  return parseInt(reversed) * sign

}

//most seen character in string 
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


//fizzbuzz
function fizzBuzz(n) {

  const numbersArray = []

  for (let i=1; i <= n; i++){

    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz')
    } else if (i % 3 === 0){
      console.log('fizz')
    } else if (i % 5 === 0){
      console.log('buzz')
    } else {
      console.log(i)
    }
    
  }
}


//anagram
function anagrams(stringA, stringB) {
  // Clean and prepare both strings
  const cleanedStringA = stringA
    .toLowerCase()        // Convert to lowercase
    .replace(/[^a-z]/g, '') // Remove non-alphabetic characters (anything not a-z)
    .split('')            // Split into an array of characters
    .sort()               // Sort the characters alphabetically
    .join('');            // Join the array back into a string

  const cleanedStringB = stringB
    .toLowerCase()        // Convert to lowercase
    .replace(/[^a-z]/g, '') // Remove non-alphabetic characters
    .split('')            // Split into an array of characters
    .sort()               // Sort the characters alphabetically
    .join('');            // Join the array back into a string

  // Compare the cleaned and sorted strings
  return cleanedStringA === cleanedStringB;
}

//build a character map
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}