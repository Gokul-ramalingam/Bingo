var storedCells = [];
// Save references to some individual <td> nodes
let tableElement = document.getElementById("tab");

$("#button1").click(function(){
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
    
})
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * storedCells.length)]
}

$("#shootButton").click(function(){
    console.log(storedCells.randomElement());
})