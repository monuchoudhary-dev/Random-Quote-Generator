//

setInterval(()=> {

    
const result = document.getElementById('result');

const currentTime = Date.now();



const olympicTime = new Date(2028,6,14).getTime();
console.log(olympicTime);

let timer = olympicTime - currentTime;


// milisecond
const day = Math.floor ((timer)/(1000*60*60*24));
timer%=(1000*60*60*24);


const hour = Math.floor((timer)/(1000*60*60));
timer%=(1000*60*60);



const minute = Math.floor((timer)/(1000*60));
timer%=(1000*60);


const second = Math.floor((timer)/(1000));
timer%=(1000);




result.textContent = ` ${day}:days ${hour}:hours ${minute}:minute ${second}:second`


},1000);

































































































