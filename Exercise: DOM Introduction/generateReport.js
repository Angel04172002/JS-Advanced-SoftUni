function generateReport() {

    let headers = Array.from(document.querySelectorAll('thead tr th'));
    let tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let outputElement = document.getElementById('output');
    let headersText = headers.map(h => h.textContent);

    let output = [];
    let obj = {};


    let headersWithCheckboxCheckedIndexes = headers.map(h => {

        let input = h.children[0];

        if (input.checked) {
            return headers.indexOf(h);
        };

        return -1;
    });


    tableRows.forEach((row) => {

        let rowTextContent = row.textContent.trim().split('\n').map(x => x.trim());

        for (let index of headersWithCheckboxCheckedIndexes) {

            let data = rowTextContent[index];
            let header = headersText[index];

            if (header) {

                header = header.trim().toLowerCase();
                obj[header] = data;
            };
        };

        output.push(obj);
        obj = {};
    });


    let outputAsJson = JSON.stringify(output);
    outputElement.value = outputAsJson;

}
