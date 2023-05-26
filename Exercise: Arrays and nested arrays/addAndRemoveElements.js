function addAndRemoveElements(arr) {

    let output = []

    const operations = {

        add: (num) => output.push(num),
        remove: (num) => output.pop()
    };

    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];
        operations[command](i + 1);
    }

    let result = output.length == 0 ? "Empty" : output.join("\n") 


    console.log(result)

}
