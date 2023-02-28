// let displayNumber = document.querySelectorAll('.num')
// let interval = 5000;

// displayNumber.forEach((displayNumber) => {
//     let startValue = 0;
//     let endValue = parseInt(displayNumber.getAttribute
//     ("data-val"));
//     let duration = Math.floor (interval / endValue);
//     let counter = setInterval(function () {
//         startValue += 1;
//         displayNumber.textContent = startValue;

//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration)
// });

let loader = document.querySelector('#num')

let load = 0

let int = setInterval(counter, 30)

function counter(){
    load++

    if (load > 399){
        clearInterval(int)
    }
    loader.textContent = load;
}

let loader1 = document.querySelector('#num1')

let load1 = 0

let int1 = setInterval(loading, 30)

function loading(){
    load1++

    if (load1 > 343){
        clearInterval(int1)
    }
    loader1.textContent = load1;
}

let loader2 = document.querySelector('#num2')

let load2 = 0

let int2 = setInterval(counting, 30)

function counting(){
    load2++

    if (load2 > 254){
        clearInterval(int2)
    }
    loader2.textContent = load2;
}

let loader3 = document.querySelector('#num3')

let load3 = 0

let int3 = setInterval(running, 30)

function running(){
    load3++

    if (load3 > 124){
        clearInterval(int3)
    }
    loader3.textContent = load3;
}


let kounter = 1;
setInterval(function(){
    document.getElementById('radio' + kounter).checked = true;
    kounter++;
    if(kounter > 4){
        kounter = 1;
    }
},5000);
