function CalcularModa (numeros){
const lista1 = numeros

const lista1Count = {};

lista1.map (
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }
        else{
        lista1Count[elemento] = 1
        }
    }
)

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
       return nuevoValor[1] - valorAcumulado[1]  
    }
);
console.log(lista1Array)
//console.log (lista1Array[0])
const posicion = lista1Array[0]
const moda = posicion[0]

return moda
}