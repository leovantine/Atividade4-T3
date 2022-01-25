//1 - crie uma função que exiba uma mensagem no console

function oi() {
    console.log("Hello!")
}
oi()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function mostrarNome(name) {
    console.log(`Olá, meu ${name}!`)
}
mostrarNome("Leonardo")

//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function profile(name, number, typeOfMusic) {
    console.log(`My name is ${name}, ${number}, my favorite type of music is ${typeOfMusic}!`)
}
profile("Leonardo", "16", "PopHits")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function movieSong(movie, song) {
    console.log(`${movie}, ${song}.`)
}
movieSong("Harry Potter", "Eyes on Fire")

//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function triple(num) {
    return num*3
}
console.log(triple(10))