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