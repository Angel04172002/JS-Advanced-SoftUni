function extract(content) {

    let contentElement = document.getElementById(content);

    let pattern = /\(([^(]+)\)/g;
    let matches = contentElement.textContent.matchAll(pattern);

    let matchesArr = Array.from(matches);
    let arr = [];


    matchesArr.forEach(x => {
        arr.push(x[1]);
    });

    return arr.join("; ");
}
