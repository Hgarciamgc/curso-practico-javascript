const lista = [1,10,20,30,40,50,60,70,80,90,100]

const lista1 = lista.map(function(ValorLista) {
    return 1/ValorLista
})

const SumaLista1 = lista1.reduce(function(ValorA = 0, Valor){
    ValorA += Valor;
    return ValorA;
})

const Armonica = lista.length / SumaLista1