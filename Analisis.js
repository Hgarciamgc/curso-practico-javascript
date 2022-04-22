const salariosC = colombia.map (function (personita) {
    return personita.salary
})

const SalarioOrdenado = salariosC.sort(function(SalarioA, SalarioB) {
     return SalarioA - SalarioB
})

function EsPar(numero) {
    return (numero % 2 == 0)
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

function CalcularMediana(lista){
    const mitad = parseInt(lista.length /2)

    if (EsPar(lista.length)){
        const personitamitad = lista[mitad]
        const personitamitad2 = lista[mitad-1]

         const mediana = CalcularPromedio([personitamitad, personitamitad2]);
        return mediana
    } 
    else {
        const personitamitad = lista[mitad]
        return personitamitad
    }
}

const MedianaGeneralDeCol = CalcularMediana(SalarioOrdenado)

//Mediana del Top 10%
const spliceStar = (SalarioOrdenado.length * 90)/100;
const spliceEnd = SalarioOrdenado.length - spliceStar;

const SalariosColTop10 = SalarioOrdenado.splice(spliceStar, spliceEnd)

const MedianaTop10Col = CalcularMediana(SalariosColTop10)

console.log({
    MedianaGeneralDeCol,
    MedianaTop10Col
})