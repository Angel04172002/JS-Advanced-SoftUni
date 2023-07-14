function solve(array, startIndex, endIndex) {

    if(!Array.isArray(array)) {
        return NaN;
    };

    let start = Math.max(0, startIndex);
    let end = Math.min(array.length - 1, endIndex);

    return array
            .slice(start, end + 1)
            .map(x => Number(x))
            .reduce((acc, curr) => acc + curr, 0);
}
