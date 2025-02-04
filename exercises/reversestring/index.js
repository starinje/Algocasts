// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  debugger
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
  
}

console.log(reverse('1234'))

module.exports = reverse;



// function reverse(str) {

//   return str.split('').reverse().join('');

// }


// function reverse(str) {
//   let reversed = ''

//   for (let character of str){
//     console.log(character)
//     reversed = character + reversed
//   }

//   return reversed
// }