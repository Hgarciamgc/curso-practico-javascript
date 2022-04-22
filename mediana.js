function calcularmediana(lista){

    lista1 = lista.sort(function(a,b) {

        if (a == b) {
            return 0
        }
        if (a > b) {
            return 1
        }
            return -1
    })

    console.log(lista1)

const mitadlista1 = parseInt(lista1.length / 2)

function EsPar (numero){

    if (numero % 2 == 0){

        return true

    }
    else {
        return false
    }

}

function CalcularPromedio (lista){


    const SumaLista = lista.reduce (

        function (valorAcumulado = 0, nuevoElemento){

            return valorAcumulado + nuevoElemento;

        }
    )

    const Promedio = SumaLista / lista.length
    return Promedio
}

let mediana;

if (EsPar(lista1.length)) {

    const elemento1 = lista1[mitadlista1];
    const elemento2 = lista1[mitadlista1 - 1]

    const elemento1y2 = CalcularPromedio([elemento1,elemento2])

    mediana = elemento1y2


} else {
    mediana = lista1[mitadlista1]
}

return mediana

}
