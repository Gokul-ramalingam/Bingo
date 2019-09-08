let storedCells = [];
// Save references to some individual <td> nodes
let tableElement = document.getElementById("tab");
let count = 1;



let h = document.getElementById('minutes')
let m = document.getElementById('seconds');
let s = document.getElementById('milliSeconds');
let seconds = 0, minutes = 0, hours = 0;
let t;

function add() {
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

h.textContent = hours ? (hours > 9 ? hours : "0" + hours) : "00";
m.textContent = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00";
s.textContent = seconds > 9 ? seconds : "0" + seconds;

timer();
}

function timer() {
t = setTimeout(add, 15);
}







$("#button1").click(function(){
    if(count === 1){
    storedCells.push(tableElement.rows[1].cells[0].innerText);
    storedCells.push(tableElement.rows[1].cells[1].innerText);
    storedCells.push(tableElement.rows[1].cells[2].innerText);
    storedCells.push(tableElement.rows[1].cells[3].innerText);
    storedCells.push(tableElement.rows[1].cells[4].innerText);
    storedCells.push(tableElement.rows[2].cells[0].innerText);
    storedCells.push(tableElement.rows[2].cells[1].innerText);
    storedCells.push(tableElement.rows[2].cells[2].innerText);
    storedCells.push(tableElement.rows[2].cells[3].innerText);
    storedCells.push(tableElement.rows[2].cells[4].innerText);
    storedCells.push(tableElement.rows[3].cells[0].innerText);
    storedCells.push(tableElement.rows[3].cells[1].innerText);
    storedCells.push(tableElement.rows[3].cells[2].innerText);
    storedCells.push(tableElement.rows[3].cells[3].innerText);
    storedCells.push(tableElement.rows[3].cells[4].innerText);
    storedCells.push(tableElement.rows[4].cells[0].innerText);
    storedCells.push(tableElement.rows[4].cells[1].innerText);
    storedCells.push(tableElement.rows[4].cells[2].innerText);
    storedCells.push(tableElement.rows[4].cells[3].innerText);
    storedCells.push(tableElement.rows[4].cells[4].innerText);
    storedCells.push(tableElement.rows[5].cells[0].innerText);
    storedCells.push(tableElement.rows[5].cells[1].innerText);
    storedCells.push(tableElement.rows[5].cells[2].innerText);
    storedCells.push(tableElement.rows[5].cells[3].innerText);
    storedCells.push(tableElement.rows[5].cells[4].innerText);
    console.log(storedCells);
    timer();
    document.getElementById("button1").innerHTML='Bingo';
    count++;
    }
    else if(count === 2){
    document.getElementById("button1").innerHTML='New Game';
    count++;
    clearTimeout(t);
    }
    else
    { 
    storedCells.length = 0;
    h.textContent = "00";
    m.textContent = "00";
    s.textContent = "00";
    seconds = 0; minutes = 0; hours = 0;
    document.getElementById("button1").innerHTML='Start'; 
    count = 1;
    }
    
})
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * storedCells.length)]
}




$("#shootButton").click(function(){
    let randomNumber = storedCells.randomElement()
    if(randomNumber < 10)
    $("#randomNumber").text("0"+randomNumber);
    else
    $("#randomNumber").text(randomNumber);
})












