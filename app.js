let storedCells = [];
// Save references to some individual <td> nodes
let tableElement = $('#tab');
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
        for(let i = 1;i <= 5;i++)
        {
            for(let j = 0;j < 5;j++)
            {
                storedCells.push(tableElement.find('tr:eq('+ i + ')').find('td:eq(' + j + ')').text());
            }
        }

    
    timer();
    $("#button1").html('Bingo');
    count++;
    }
    else if(count === 2){
    $("#randomNumber").text("00");
    $("#button1").html('New Game');
    count++;
    clearTimeout(t);
    }
    else
    { 
    $("#randomNumber").text("00");
    storedCells.length = 0;
    h.textContent = "00";
    m.textContent = "00";
    s.textContent = "00";
    seconds = 0; minutes = 0; hours = 0;
    $("#button1").html('Start'); 
    for(let i = 1;i <= 5;i++)
    {
        for(let j = 0;j < 5;j++)
        {
            if(tableElement.find('tr:eq('+ i + ')').find('td:eq(' + j + ')').text() == randomNumber)
            {
                tableElement.find('tr:eq('+ i + ')').find('td:eq(' + j + ')').css('color', '#000000');
            }
        }
    }
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
     
    let index = storedCells.indexOf(randomNumber);
    storedCells.splice(index,1);
    console.log(storedCells);

    for(let i = 1;i <= 5;i++)
    {
        for(let j = 0;j < 5;j++)
        {
            if(tableElement.find('tr:eq('+ i + ')').find('td:eq(' + j + ')').text() == randomNumber)
            {
                tableElement.find('tr:eq('+ i + ')').find('td:eq(' + j + ')').css('color', '#10A881');
            }
        }
    }
})












