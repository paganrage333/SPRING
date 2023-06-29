// function add(x,y){
//     return x + y;
// }

// function subtract(x,y){
//     return x - y;
// }

// function multiply(x,y){
//     return x * y;
// }

// function divide(x,y){
//     return x / y;
// }

// const mathFuncs = [ add, subtract, multiply, divide ];

// function doAllMath(a,b,mathFuncs){
//     for(let func of mathFuncs){
//        console.log(func(a,b));
//     }
// }

// const arr = [4,5,6]

const colors = ['teal', 'peach', 'cyan', 'orange']

function myForEach(arr, callback){
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

myForEach(colors, function(color){
    console.log(color.toUpperCase())
});


function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++){
        mappedArray.push(callback(arr[i])) 
    }
    return mappedArray;
}

function mySome(arr,callback) {
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return true;
    }
    return false
}

function myEvery(arr,callback) {
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)) return false;
    }
    return true
}

myEvery([3,4,5,6], function(e){
    return e > 2
})

function myFind(arr,callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr) === true) return arr[i]
    }
}

function myFindIndex(arr,callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr) === true) return i
    }
    return -1;
}

[ 2, 3, 6, 77, 89, 102, 23 ].reduce((max,cur)=> {
    return Math.max(max,cur)
})

//ES5 Map Callback

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//ES2015 Arrow Shorthand

// const double = arr => arr.map(val => val * 2); 

//Original function

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// Arrow function rewrite

//   const squareAndFindEvens = (numbers) => numbers.map(val => val ** 2).filter(square => square % 2 === 0);
  

//Original function

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// Arrow function rewrite

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0) 

const numbies = [5,4,-1,8]

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idx), items.slice(idx+1)];
}

const extend = (arr1, arr2) => ([...arr1, ...arr2])

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj
}

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}