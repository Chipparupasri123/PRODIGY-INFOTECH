let [milliseconds, seconds, minutes, hours]=[0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", ()=>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click",()=>{
        clearInterval(int);
    });

    document.getElementById("reset-timer").addEventListener("click",()=>{
        clearInterval(int);
        [milliseconds,seconds,minutes,hours]=[0,0,0,0];
        timeRef.innerHTML=`
        <span class="circle">00</span>:
        <span class="circle">00</span>:
        <span class="circle">00</span> :
        <span class="circle">000</span>
        `;
    });

    function displayTimer(){
        milliseconds += 10;
        if(milliseconds == 1000){
            milliseconds = 0;
            seconds++;
            if(seconds == 60){
                seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes=0;
                hours++;
            }
        }
        }
    
    let h = hours < 10 ? "0"+ hours : hours;
    let m = minutes < 10 ? "0"+ minutes : minutes;
    let s = seconds < 10 ? "0"+ seconds : seconds;
    let ms=
    milliseconds < 10
    ? "00" + milliseconds
    :milliseconds < 100
    ? "0" + milliseconds
    :milliseconds;

    timeRef.innerHTML =`
     <span class="circle">${h}</span> :
    <span class="circle">${m}</span> :
    <span class="circle">${s}</span>  :
    <span class="circle">${ms}</span> 
    `;
      }
