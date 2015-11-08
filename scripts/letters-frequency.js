'use strict'

const fs = require('fs')

const letters = 'abcdefghijklmnopqrstuvwxyz'
const poem = fs.readFileSync(__dirname + '/../poem.txt', 'utf8')
const poemChars = poem.split('').filter(char => (
  letters.indexOf(char.toLowerCase()) > -1
))

const counts = Array(letters.length).fill(0)

for (var i = 0, len = poemChars.length, letterIndex; i < len; i++) {
  letterIndex = letters.indexOf(poemChars[i].toLowerCase())
  if (letterIndex > -1) {
    counts[letterIndex]++
  }
}

const averages = counts
  .map((count, i) => ({ letter: letters[i], count: count }))
  .sort((a, b) => b.count - a.count)

const results = {
  letters: averages.reduce((o, v, i) => {
    o[v.letter] = v.count
    return o
  }, {}),
  total: poemChars.length,
}

console.log(JSON.stringify(results))

// averages.forEach(letter => console.log(
//   letter.letter.toUpperCase() + ':',
//   letter.count + ' occurences,',
//   'every ' + Math.round(results.total / letter.count) + ' characters'
// ))
// console.log('\nTotal:', results.total)
