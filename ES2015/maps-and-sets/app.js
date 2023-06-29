// const r = [...new Set("referee")].join("")

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

let chars = ['A', 'B', 'A', 'C', 'B'];

let spoon = [1,2,3]

// function hasDuplicate(arr) {
//     new Set(arr).size !== arr.length
// }

const hasDuplicate = arr => new Set(arr).size !== arr.length

// function vowelCount(str){
//     let splitArr = str.split("");
//     let map = {};
//     const vowels = "aeiou";
 
//     splitArr.forEach(function(letter) {
//      let lowerCasedLetter = letter.toLowerCase()
//      if (vowels.indexOf(lowerCasedLetter) !== -1) {
//          if (map[lowerCasedLetter]) {
//              map[lowerCasedLetter]++;
//          } else {
//              map[lowerCasedLetter] = 1;
//          }
//      }
//     });
//     return map;
//  }