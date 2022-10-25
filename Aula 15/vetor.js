var a = [5,3,2]
a.push(6) // é o ''append'' do python 
a.length // para saber o comprimento
a.sort() // por em ordem

console.log(a)
console.log(a.length)
console.log(a[2])

for (var pos=0; pos<a.length;pos++){
    console.log(a[pos])
}

for (var pos in a){
    console.log(a[pos])
}

console.log(a.indexOf(3))//para buscar valores dentro de uma lista(vetor)