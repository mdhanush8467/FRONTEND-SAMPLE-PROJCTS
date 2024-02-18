// let timerDisplay = document.querySelector('.timerDisplay');
// let stopBtn = document.getElementById('stopBtn');
// let startBtn = document.getElementById('startBtn');
// let resetBtn = document.getElementById('resetBtn');

// let msec = 00;
// let secs = 00;
// let mins = 00;

// let timerId = null;

// startBtn.addEventListener('click', function(){
//     if(timerId !== null){
//         clearInterval(timerId);
//     }
//     timerId = setInterval(startTimer, 10);
// });

// stopBtn.addEventListener('click', function(){
//     clearInterval(timerId);
// });

// resetBtn.addEventListener('click', function(){
//     clearInterval(timerId);
//     timerDisplay.innerHTML = 00:00:00;
//     msec = secs = mins = 00;
// });

// function startTimer(){
//     msec++;
//     if(msec == 100){
//         msec = 0;
//         secs++;
//         if(secs == 60){
//             secs = 0;
// mins++;
//         }
//     }

//     let msecString = msec < 10 ? 0${msec}:msec;
//     let secsString = secs < 10 ? 0${secs}:secs;
//     let minsString = mins < 10 ? 0${mins}:mins;
    

//     timerDisplay.innerHTML = ${minsString} : ${secsString} : ${msecString};

// }
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = '00:00:00'; // Added single quotes around the timer display value
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec; // Fixed template literal syntax and added condition for msec
    let secsString = secs < 10 ? `0${secs}` : secs; // Fixed template literal syntax and added condition for secs
    let minsString = mins < 10 ? `0${mins}` : mins; // Fixed template literal syntax and added condition for mins

    timerDisplay.innerHTML = `${minsString}:${secsString}:${msecString}`; // Corrected template literal syntax and concatenated values
}
