//variables for buttons

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn= document.querySelector('#resetBtn')

//variables for time values
let seconds =0;
let minutes = 0
let hours = 0;


//variable for leadinh zeroes

let leadingSecond=0;
let leadingMinute=0;
let leadingHour=0;

//Variables for set Interval && Time status
let timerInterval=null;
let timerStatus='stopped'





//stop watch function

function stopWatch(){
    seconds++;

    if(seconds/60 ==1){
        seconds=0;
        minutes++;
        if(minutes/60 == 1){
            minutes=0;
            hours++;
        }
    }
    
    if(seconds<10){
        leadingSecond="0"+seconds.toString()
    }else{
        leadingSecond=seconds;
    }

    if(minutes<10){
        leadingMinute="0"+minutes.toString()
    }else{
        leadingMinute=minutes;
    }

    if(hours<10){
        leadingHour="0"+hours.toString()
    }else{
        leadingHour=hours;
    }
    let displayTimer= document.getElementById('timer').innerText= leadingHour+ ":"+ leadingMinute+ " :"+ leadingSecond;
}

//window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click', function(){
    if(timerStatus === 'stopped'){
        timerInterval= window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML=`<i
        class="fa fa-pause" aria-hidden="true" id="pause"></i>`;
        timerStatus='started'
    }else{
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML=`<i
        class="fa fa-play" aria-hidden="true" id="play"></i>`
        timerStatus='stopped'
    }
})

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval)
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('timer').innerHTML='00:00:00'
})