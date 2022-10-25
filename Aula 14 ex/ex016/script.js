function contagem() {
    var txtini = document.getElementById('txti')
    var i = Number(txtini.value)
    var txtfim = document.getElementById('txtf')
    var f = Number(txtfim.value)
    var txtpa = document.getElementById('txtp')
    var p = Number(txtpa.value)
    var res = document.getElementById('res')
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpa.value.length == 0) {
        window.alert('[ERRO]Confira os dados e tente novamente!!!')
        res.innerHTML = 'Impossivel contar...'
    } else {
        res.innerHTML = 'Contando: '
        if (i<f){
            for (var c=i; c<= f; c = c+p){
                res.innerHTML += `${c}...`
            }

        } else {
            for (var c = i; c>= f; c = c-p){
                res.innerHTML += `${c}...`
            }
            res.innerHTML += 'FIM'
        }
        
    }   
    
}