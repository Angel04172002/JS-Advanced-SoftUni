function wordsUppercase(words) 
{
    let pattern = /\w+/g
    let match = words.match(pattern).map(w => w.toUpperCase())

    console.log(match.join(", "))
}
