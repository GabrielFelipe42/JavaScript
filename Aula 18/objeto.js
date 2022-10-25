var amigo = {nome:'josé', 
sexo: 'M', 
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}} // dicionario do py

amigo.engordar(2)
console.log(amigo)