var buttonClick = document.getElementsByClassName('buttonCreate'),
    buttonCreate = buttonClick[0];

function buttonCreateKeyup() {
    var ckickInputX = document.getElementById('inputX');
    var ckickInputY = document.getElementById('inputY');
   	document.getElementById('buttonCreate').disabled = ckickInputX.value && ckickInputY.value ? false : "disabled";
}

document.getElementsByClassName('buttonCreate').onclick = buttonCreateKeyup;
buttonCreate.addEventListener('click', buttonCreateKeyup);

function getNumberInput() {
    var x = document.getElementById('inputX').value;
    var y = document.getElementById('inputY').value;

    var tableBoards = document.getElementsByClassName('tableBoard'),
        tableBoard = tableBoards[0];

    var tbodys = tableBoard.getElementsByTagName('tbody'),
        tagTbody = tbodys[0];
    
    if (x >= 1 && x <= 10 && y >= 1 && y <= 10) {

        if (tagTbody) {
            tagTbody.remove();
            var tbody = document.createElement('tbody');
            tableBoard.appendChild(tbody);

            for (var i = 1; i <= y; i++) {
                var tr = document.createElement('tr');
                //создаем в tr td:
                for (var j = 1; j <= x; j++) {

                    var td = document.createElement('td');
                    tr.appendChild(td);
                    document.getElementById('inputY').value = '';
                    document.getElementById('inputX').value = '';
                    buttonCreateKeyup();
                }
                tbody.appendChild(tr);

            }

        }

	} else if (x < 0 || x > 11 && isNaN(x) || y >= 1 && y <= 10) {
        alert('Введите корректное число в поле х от 1 до 10');
        document.getElementById('inputX').value = '';
        buttonCreateKeyup();
    } else if (y < 0 || y > 11 && isNaN(x) || x >= 1 && x <= 10) {
        alert('Введите корректное число в поле у от 1 до 10');
        document.getElementById('inputY').value = '';
        buttonCreateKeyup();
    } else {
        alert('Введите корректное число в поле х от 1 до 10');
        alert('Введите корректное число в поле у от 1 до 10');
        document.getElementById('inputX').value = '';
        document.getElementById('inputY').value = '';
        buttonCreateKeyup();
    }
}

document.getElementsByClassName('buttonCreate').onclick = getNumberInput;
buttonCreate.addEventListener('click', getNumberInput);


var tables = document.getElementsByClassName('table'),
    table = tables[0];

var tbodys = table.getElementsByTagName('tbody'),
    tbody = tbodys[0];

var chessBoards = document.getElementsByClassName('chess_board'),
    chess_board = chessBoards[0];

var chessBoards = document.getElementsByClassName('chessBoard1'),
    chessBoard1 = chessBoards[0];


table.addEventListener('click', tblClick, false);
function tblClick() {
    var target = event.target;
    if (target.tagName != 'TD') {
        alert('click table');
    } else {
        nameFunction(target);
    }
}

function nameFunction() {
    if (table.classList.contains("chessBoard1")) {
        table.classList.add('chess_board');
        table.classList.remove('chessBoard1');
    } else {
        table.classList.remove('chess_board');
        table.classList.add('chessBoard1');
    }
}
