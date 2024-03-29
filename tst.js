var words = "hello hai how are you? welcome to play area"

a = (b) => {
    return b[0].toUpperCase() + b.slice(1)
}

let word = words.split(" ")

for(let i=0;i<word.length;i++){
    word[i] = a(word[i])
}
console.log(word.join(" "));

