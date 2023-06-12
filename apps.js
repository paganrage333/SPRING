function countDown(num) {
    let i = num; 
    const timer = setInterval(() => {
        console.log(i);
        i--;

        if (i === 0) {
            clearInterval(timer);
            console.log("DONE!")
        }
    }, 1000);
}

function randomGame() {

function getNum(){
    return Math.random();
}

const randNum = getNum();

console.log(randNum);

let i = 0;
let intervalId;

function incrementCounter() {
    const randNum = getNum();
    console.log(randNum);
    i++;

    if (randNum > .75) {
        clearInterval(intervalId);
        console.log("It took", i, "tries to find a number greater than .75")
    }
}

intervalId = setInterval(incrementCounter, 1000);
}


