//cell1 to cell9 values
var cell1;
var cell2;
var cell3;
var cell4;
var cell5;
var cell6;
var cell7;
var cell8;
var cell9;

var playerOne = 'x';
var pc = 'o';
var pcTurn;
var turn = 0;
var xIsWinner = false;
var oIsWinner = false;

//Checking the values from cell1 to cell9
var gameStatus;

//Checking game status if there is a win
var isWin;

//Show the winner
var showWinner;

var gameClick;
var gameClear;

//On game table click
var gameClick = function () {
    $('td').on('click', function (event) {
        if (turn == 0) {
            $(this).text(playerOne);
            gameStatus();
            isWin();
            turn == 1;
            pcTurn();
            gameStatus();
            isWin();
        }
    });
};

$(document).ready(function () {
    gameClick();
});

var pcTurn = function () {

    var xCount = 0;
    $(".td").each(function (i, val) {
        if ($(this).html() == 'x') {
            xCount++;
        }
    });

    if (xCount == 1) {
        if (cell5 == "") {
            $('#cell5').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell1 == "" && cell2 == "" && cell3 == "" && cell4 == "" && cell6 == "" && cell7 == "" && cell8 == "" && cell9 == "") {
            $('#cell1').text("o");
            turn = 0;
        }
    }

    if (xCount == 2 || xCount == 3 || xCount == 4 || xCount == 5 || xCount == 6) {
        if (cell5 == "x" && cell2 == "x" && cell8 == "") {
            $('#cell8').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell3 == "x" && cell7 == "") {
            $('#cell7').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell4 == "x" && cell6 == "") {
            $('#cell6').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell6 == "x" && cell4 == "") {
            $('#cell4').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell7 == "x" && cell3 == "") {
            $('#cell3').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell8 == "x" && cell2 == "") {
            $('#cell2').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell9 == "x" && cell7 == "") {
            $('#cell7').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell9 == "x" && cell3 == "x") {
            $('#cell6').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell7 == "x" && cell9 == "x") {
            $('#cell8').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell1 == "x" && cell9 == "x" && cell4 == "") { //If cell 5 is "o"
            $('#cell4').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell3 == "x" && cell7 == "x" && cell4 == "") {
            $('#cell4').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell1 == "x" && cell2 == "x" && cell3 == "") {
            $('#cell3').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell2 == "x" && cell3 == "x" && cell1 == "") {
            $('#cell1').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell1 == "x" && cell4 == "x" && cell7 == "") {
            $('#cell7').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell4 == "x" && cell7 == "x" && cell1 == "") {
            $('#cell1').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell3 == "x" && cell6 == "x" && cell9 == "") {
            $('#cell9').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell6 == "x" && cell9 == "x" && cell3 == "") {
            $('#cell3').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell7 == "x" && cell8 == "x" && cell9 == "") {
            $('#cell9').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell8 == "x" && cell9 == "x" && cell7 == "") {
            $('#cell7').text("o");
            turn = 0;
        } else if (cell2 == "x" && cell5 == "x" && cell7 == "x" && cell9 == "x" && cell6 == "") {
            $('#cell6').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell1 == "x" && cell3 == "x" && cell2 == "" && cell9 != "x") {
            $('#cell2').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell1 == "x" && cell7 == "x" && cell4 == "") {
            $('#cell4').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell3 == "x" && cell9 == "x" && cell6 == "") {
            $('#cell6').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell7 == "x" && cell9 == "x" && cell8 == "") {
            $('#cell8').text("o");
            turn = 0;
        } else {
            if (cell1 == "") {
                $('#cell1').text("o");
                turn = 0;
            } else if (cell2 == "") {
                $('#cell2').text("o");
                turn = 0;
            } else if (cell3 == "") {
                $('#cell3').text("o");
                turn = 0;
            } else if (cell4 == "") {
                $('#cell4').text("o");
                turn = 0;
            } else if (cell5 == "") {
                $('#cell5').text("o");
                turn = 0;
            } else if (cell6 == "") {
                $('#cell6').text("o");
                turn = 0;
            } else if (cell7 == "") {
                $('#cell7').text("o");
                turn = 0;
            } else if (cell8 == "") {
                $('#cell8').text("o");
                turn = 0;
            } else if (cell9 == "") {
                $('#cell9').text("o");
                turn = 0;
            }
        }
    }

    if (xCount == 4) {
        
    }

    if (xCount == 3) {
        if (cell1 == "x" && cell5 == "o" && cell3 == "x" && cell9 == "x" && cell6 == "") {
            $('#cell6').text("o");
            turn = 0;
        }
    }
}

gameStatus = function () {
    cell1 = $('#cell1').html();
    cell2 = $('#cell2').html();
    cell3 = $('#cell3').html();
    cell4 = $('#cell4').html();
    cell5 = $('#cell5').html();
    cell6 = $('#cell6').html();
    cell7 = $('#cell7').html();
    cell8 = $('#cell8').html();
    cell9 = $('#cell9').html();
};

isWin = function () {
    if ((cell1 == cell2 && cell1 == cell3 && (cell1 == "x")) ||
        (cell4 == cell5 && cell4 == cell6 && (cell4 == "x")) ||
        (cell7 == cell8 && cell7 == cell9 && (cell7 == "x")) ||
        (cell1 == cell4 && cell1 == cell7 && (cell1 == "x")) ||
        (cell2 == cell5 && cell2 == cell8 && (cell2 == "x")) ||
        (cell3 == cell6 && cell3 == cell9 && (cell3 == "x")) ||
        (cell1 == cell5 && cell1 == cell9 && (cell1 == "x")) ||
        (cell3 == cell5 && cell3 == cell7 && (cell3 == "x"))
    ) {
        xIsWinner = true;
        showWinner();
    } else {
        if ((cell1 == cell2 && cell1 == cell3 && (cell1 == "o")) ||
        (cell4 == cell5 && cell4 == cell6 && (cell4 == "o")) ||
        (cell7 == cell8 && cell7 == cell9 && (cell7 == "o")) ||
        (cell1 == cell4 && cell1 == cell7 && (cell1 == "o")) ||
        (cell2 == cell5 && cell2 == cell8 && (cell2 == "o")) ||
        (cell3 == cell6 && cell3 == cell9 && (cell3 == "o")) ||
        (cell1 == cell5 && cell1 == cell9 && (cell1 == "o")) ||
        (cell3 == cell5 && cell3 == cell7 && (cell3 == "o"))
        ) {
            oIsWinner = true;
            showWinner();
        } else {
            if (((cell1 == "x") || (cell1 == "o")) && ((cell4 == "x") || (cell4 == "o")) && ((cell7 == "x") || (cell7 == "o")) && ((cell2 == "x") || (cell2 == "o")) && ((cell5 == "x") || (cell5 == "o")) && ((cell8 == "x") || (cell8 == "o")) && ((cell3 == "x") || (cell3 == "o")) && ((cell6 == "x") || (cell6 == "o")) && ((cell9 == "x") || (cell9 == "o"))) {
                alert("It's a tie!");
            }
        }
    }
};

var showWinner = function () {
    if (xIsWinner == true) {
        alert("You won!");
        gameClear();
    } else {
        if (oIsWinner == true) {
            alert("Sorry, you lose!");
            gameClear();
        }
    }
};

var gameClear = $('#btn-restart').click(function (event) {
    cell1 = $('#cell1').text("");
    cell4 = $('#cell4').text("");
    cell7 = $('#cell7').text("");
    cell2 = $('#cell2').text("");
    cell5 = $('#cell5').text("");
    cell8 = $('#cell8').text("");
    cell3 = $('#cell3').text("");
    cell6 = $('#cell6').text("");
    cell9 = $('#cell9').text("");
    xIsWinner = false;
    oIsWinner = false;
    gameClick();
    location.reload();
});