var intervalId;
var celdasOcupadas = [];

//Generación de la tabla
function generateTable() {
    //Obtención de los datos del formulario
    var cellX = document.getElementById("cellX").value;
    var cellY = document.getElementById("cellY").value;
    var time = document.getElementById("time").value;

    //Limpiar intervalos
    clearInterval(intervalId);
    //Generación del Array
    celdasOcupadas = [];

    //Creación de la tabla
    var tableHTML = '<table class="table table-bordered border-primary align-middle">';
    //Recorrer filas
    for (var i = 0; i < cellX; i++) {
        tableHTML += '<tr class="align-middle">';
        //Recorrer columnas
        for (var j = 0; j < cellY; j++) {
            tableHTML += '<td class="align-middle" id="cell_' + i + '_' + j + '"></td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    document.getElementById("result").innerHTML = tableHTML;
    //Ejecución cada cirto tiempo
    intervalId = setInterval(paintX, time * 1000);
}

//Pintar X
function paintX() {
    var cellX = document.getElementById("cellX").value;
    var cellY = document.getElementById("cellY").value;

    //Posición alazar
    var randomRow = Math.floor(Math.random() * cellX);
    var randomCol = Math.floor(Math.random() * cellY);

    var cellId = 'cell_' + randomRow + '_' + randomCol;
    var cell = document.getElementById(cellId);

    if (cell && celdasOcupadas.indexOf(cellId) === -1) {
        cell.textContent = 'X';
        celdasOcupadas.push(cellId);
    }
}