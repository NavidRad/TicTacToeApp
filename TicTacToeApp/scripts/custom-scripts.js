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
var turn = 0;
var xIsWinner = false;
var oIsWinner = false;

$(document).ready(function () {
    gameClick();
});

//On game table click
var gameClick = function () {
    $('td').on('click', function (event) {
        if (turn == 0 && $(this).text() == "") {
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

var pcTurn = function () {

    //Number of x in the game
    var xCount = 0;
    $(".td").each(function (i, val) {
        if ($(this).html() == 'x') {
            xCount++;
        }
    });

    //PC first move..
    if (xCount == 1) {
        if (cell5 == "") {
            $('#cell5').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell1 == "" && cell2 == "" && cell3 == "" && cell4 == "" && cell6 == "" && cell7 == "" && cell8 == "" && cell9 == "") {
            $('#cell1').text("o");
            turn = 0;
        }
    }

    //Special cases
    if (xCount == 4) {
        if (cell1 == "o" && cell3 == "x" && cell4 == "x" && cell5 == "x" && cell6 == "o" && cell7 == "o" && cell9 == "x" && cell8 == "") {
            $('#cell8').text("o");
            turn = 0;
        }
    }

    //PC aggressive moves
    if (xCount != 1) {
        if (cell1 == "o" && cell2 == "o" && cell3 == "") {
            $('#cell3').text("o");
            turn = 0;
        } else if (cell2 == "o" && cell3 == "o" && cell1 == "") {
            $('#cell1').text("o");
            turn = 0;
        } else if (cell1 == "o" && cell4 == "o" && cell7 == "") {
            $('#cell7').text("o");
            turn = 0;
        } else if (cell4 == "o" && cell7 == "o" && cell1 == "") {
            $('#cell1').text("o");
            turn = 0;
        } else if (cell2 == "o" && cell3 == "o" && cell1 == "") {
            $('#cell1').text("o");
            turn = 0;
        } else if (cell3 == "o" && cell6 == "o" && cell9 == "") {
            $('#cell9').text("o");
            turn = 0;
        } else if (cell6 == "o" && cell9 == "o" && cell3 == "") {
            $('#cell3').text("o");
            turn = 0;
        } else if (cell7 == "o" && cell8 == "o" && cell9 == "") {
            $('#cell9').text("o");
            turn = 0;
        } else if (cell8 == "o" && cell9 == "o" && cell7 == "") {
            $('#cell7').text("o");
            turn = 0;
        } else if (cell1 == "o" && cell3 == "o" && cell2 == "") {
            $('#cell2').text("o");
            turn = 0;
        } else if (cell3 == "o" && cell9 == "o" && cell6 == "") {
            $('#cell6').text("o");
            turn = 0;
        } else if (cell9 == "o" && cell7 == "o" && cell8 == "") {
            $('#cell8').text("o");
            turn = 0;
        } else if (cell1 == "o" && cell7 == "o" && cell4 == "") {
            $('#cell4').text("o");
            turn = 0;
        } else if (cell1 == "o" && cell5 == "o" && cell9 == "") {
            $('#cell9').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell9 == "o" && cell1 == "") {
            $('#cell1').text("o");
            turn = 0;
        } else if (cell1 == "o" && cell9 == "o" && cell5 == "") {
            $('#cell5').text("o");
            turn = 0;
        } else if (cell3 == "o" && cell5 == "o" && cell7 == "") {
            $('#cell7').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell7 == "o" && cell3 == "") {
            $('#cell3').text("o");
            turn = 0;
        } else if (cell3 == "o" && cell7 == "o" && cell5 == "") {
            $('#cell5').text("o");
            turn = 0;
        } else if (cell2 == "o" && cell5 == "o" && cell8 == "") {
            $('#cell8').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell8 == "o" && cell2 == "") {
            $('#cell2').text("o");
            turn = 0;
        } else if (cell2 == "o" && cell8 == "o" && cell5 == "") {
            $('#cell5').text("o");
            turn = 0;
        } else if (cell4 == "o" && cell5 == "o" && cell6 == "") {
            $('#cell6').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell6 == "o" && cell4 == "") {
            $('#cell4').text("o");
            turn = 0;
        } else if (cell4 == "o" && cell6 == "o" && cell5 == "") {
            $('#cell5').text("o");
            turn = 0;
        } else if (cell5 == "x" && cell2 == "x" && cell8 == "") { //PC defensive moves
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
        } else if (cell5 == "o" && cell1 == "x" && cell9 == "x" && cell4 == "") {
            $('#cell4').text("o");
            turn = 0;
        } else if (cell5 == "o" && cell3 == "x" && cell7 == "x" && cell4 == "") {
            $('#cell4').text("o");
            turn = 0;
        } else { //PC random moves
            if (cell1 == "" && xCount != 2 && xCount != 3) {
                $('#cell1').text("o");
                turn = 0;
            } else if (cell2 == "") {
                $('#cell2').text("o");
                turn = 0;
            } else if (cell3 == "" && xCount != 3) {
                $('#cell3').text("o");
                turn = 0;
            } else if (cell4 == "" && xCount != 3) {
                $('#cell4').text("o");
                turn = 0;
            } else if (cell5 == "") {
                $('#cell5').text("o");
                turn = 0;
            } else if (cell6 == "" && xCount != 3) {
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
                $("#tie-message").css("display", "block");
                $("#top-message").css("display", "block").html("IT'S A TIE!");
            }
        }
    }
};

var showWinner = function () {
    if (xIsWinner == true) {
        $("#win-message").css("display", "block");
        $("#top-message").css("display", "block").html("YOU WON!");
    } else {
        if (oIsWinner == true) {
            $("#lost-message").css("display", "block");
            $("#top-message").css("display", "block").html("GAME OVER!");
        }
    }
};

$('#btn-restart').click(function (event) {
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
    $("#win-message").css("display", "none");
    $("#lost-message").css("display", "none");
    $("#tie-message").css("display", "none");
    $("#top-message").css("display", "none");
    gameClick();
    location.reload();
});