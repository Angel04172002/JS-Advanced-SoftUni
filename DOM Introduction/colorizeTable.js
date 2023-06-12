function colorize() {
    
    let tableRowElements = document.querySelectorAll('table tr');
    let arrayRowElements = Array.from(tableRowElements);

    arrayRowElements.forEach((x, i) => {
        if(i % 2 === 1) {
            x.style.backgroundColor = "Teal";
        };
    });
}
