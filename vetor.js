var notas = [5.6, 7.6, 8.9];
console.log(notas)

console.log(notas[0])
console.log(notas [1])
console.log(notas [2])

//provocar erro de 'out of bounds'
console.log(notas[3]) //undefined

//percorrer o vetor
console.log('laço percorrendo')
var contador;
for(contador = 2; contador > -1; contador--){
    console.log(notas[contador])
}

//percorrendo mais moderno
console.log('laço percorrendo moderno')
notas.forEach(obj => console.log(obj))

