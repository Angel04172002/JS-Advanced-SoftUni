function magicMatrices(matrix) {

    let sumOfFirstRow = matrix[0].reduce((acc, curr) => acc + curr, 0);

    for (let i = 0; i < matrix.length; i++) {

        let sumOfCurrentRow = 0;
        let sumOfCurrentCol = 0;

        for (let j = 0; j < matrix.length; j++) {

            sumOfCurrentRow += matrix[i][j];
            sumOfCurrentCol += matrix[j][i];
        }

        if (sumOfFirstRow !== sumOfCurrentRow || sumOfFirstRow !== sumOfCurrentCol) {
            
            return false;
        }
    }

    return true;
}
