// let title = document.getElementById('title')

// // title.innerText = "Good night!";

// let message = "Goodbye my lover!";

// title.innerHTML= `<h2 class='text-red-600 text-5xl text-center'>${message}</h2>`


// title.style.backgroundColor = "Orange"

// let red = document.getElementById("red");
// let yellow = document.getElementById("yellow");
// let green = document.getElementById("green");


// red.onclick = () => alert("wybrales czerwony");
// yellow.onclick = () => alert("wybrales zolty");
// green.onclick = () => alert("wybrales zielony");

// const buttons = document.querySelectorAll('button')

// my for loop oldsql

// let showValues = (elem) => {
//     for (let i = 0 ; i < elem.length ; i ++) {
//         console.log(elem[i].value)
//     }
// }
// showValues(buttons);



///for each loop


// buttons.forEach( button => console.log(button.value))

// buttons.forEach( button =>{
//     button.onclick = () => alert(`wybrales ${button.value}`)
// })

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");


const buttons = document.querySelectorAll('button');


// buttons.forEach( button =>{
//     parseInt(button.innerText);
//     button.onclick = () => button.innerText++;
// })


// buttons.forEach( button =>{
//     button.innerText = "0";
//     button.onclick = () =>{
//     parseInt(button.innerText);   // my correct solution
//     button.innerText++;
//     }
// })


// squares.forEach( square =>{           // for each loop
//     square.innerText = "0";           // change square button inner text to string "0" 
//     square.onclick = () =>{           // on click function
//     parseInt(square.innerText);       // had to google this , parseInt changes string to number
//     square.innerText++;               // increment this number by 1 on every click
//     }
// })

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