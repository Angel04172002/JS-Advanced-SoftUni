function ticTacToe(input) {

    function printBoard(board) {
        for (let i = 0; i < board.length; i++) {
            console.log(board[i].join("\t"));
        }
    }

    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let player = "X"
    let turns = 0;

    for (let command of input) {
        let [x, y] = command.split(" ").map(n => Number(n));

        if (board[x][y] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        board[x][y] = player;
        turns++;

        for (let i = 0; i < 3; i++) {

            if ((board[0][i] === player &&
                board[1][i] === player &&
                board[2][i] === player) ||
                (board[i][0] === player &&
                    board[i][1] === player &&
                    board[i][2] === player)) {
                console.log(`Player ${player} wins!`);
                printBoard(board);
                return;
            }
        }


        if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
            (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
            console.log(`Player ${player} wins!`);
            printBoard(board);
            return;
        }


        if (turns === 9) {
            console.log("The game ended! Nobody wins :(");
            printBoard(board);
            return;
        }

        player = player === "X" ? "O" : "X"
    }


}
