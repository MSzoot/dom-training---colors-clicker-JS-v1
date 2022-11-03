let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");


const buttons = document.querySelectorAll('button');

const timesClicked = {"red":0,"yellow":0,"green":0}

buttons.forEach( button =>{
    button.onclick  = () => {
        timesClicked[button.value]++
        button.innerText = timesClicked[button.value]
    }
})

const resetBTN = document.getElementById('reset');

let clear = () => {
    buttons.forEach(button => {
        button.innerText = ''
    })
}

resetBTN.onclick= () => clear();