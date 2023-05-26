function magicMatrices(matrix) {

    if(matrix.length == 0)
    {
        return;
    }

    let sumOfFirstRow = matrix[0].reduce((acc, curr) => acc + curr);
    let isMagical = true;


    for (let i = 0; i < matrix.length; i++) {

        let sumOfCurrentRow = 0;
        let sumOfCurrentCol = 0;

        for (let j = 0; j < matrix[i].length; j++) {

            sumOfCurrentRow += matrix[i][j];
            sumOfCurrentCol += matrix[j][i];
        }

        if (sumOfFirstRow !== sumOfCurrentRow || sumOfFirstRow !== sumOfCurrentCol) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}
