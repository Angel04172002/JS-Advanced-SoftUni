function sortArray(arr, arg) {

    const CRITERIAS = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };

    return arr.sort(CRITERIAS[arg]);
}
