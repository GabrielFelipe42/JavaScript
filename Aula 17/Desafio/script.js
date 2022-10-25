var txtnum = document.getElementById('txtn')
var lista = []
var tab = document.getElementById('sel')
var res = document.getElementById('res')


function adicionar(num) {
    
    var num = Number(txtnum.value)
    if (txtnum.value.length == 0 || num < 1 || num > 100){
        window.alert('[ERRO]Confira os dados e tente novamente')
    } else{
        var item = document.createElement('option')
        item.text = `Valor ${num} Adicionado`
        lista.push(num)
        tab.appendChild(item)
        res.innerHTML = '<p>Analisando...</p>'
    } 
    txtnum.value =''   
    txtnum.focus()
}

function analisar(){
    if (lista.length == 0) {
        window.alert('[ERRO]Verifique os dados...')
    } else {
        var tam = lista.length
        var maior = lista[0]
        var menor = lista[0]
        var soma = 0
        var media = 0
        for (pos in lista){
            soma = soma + lista[pos]
            if (lista[pos] > maior){
                maior = lista[pos]
            }  
            if (lista [pos] < menor){
                menor = lista[pos]
            } 
        }
        media = soma/lista.length
        res.innerHTML = 'Caracteristicas da sua lista: '        
        res.innerHTML += `<p>Ao todo, há ${tam} valor(es)</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é  ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
    
}

