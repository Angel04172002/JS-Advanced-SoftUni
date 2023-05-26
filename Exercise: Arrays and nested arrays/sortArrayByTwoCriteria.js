function sortArrayByTwoCriteria(arr)
{
    arr.sort((a, b) => {

        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);

        return firstCriteria || secondCriteria;
    });

    let result = arr.join('\n');

    console.log(result);
}
