function extractIncreasingSubsetFromArray(arr) {

    let maxElement = Number.MIN_SAFE_INTEGER;

    let result = arr.reduce((acc, curr) => {

        if (curr >= maxElement) {
            maxElement = curr;
            let temp = acc;
            temp.push(curr);
            return temp;
        }

        return acc;
    }, []);

    return result;
}


