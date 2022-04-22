function CalcularPromedio (lista){

    //let SumaLista = 0;

    //for (let i= 0; i < lista.length; i++) {
    
     //   SumaLista = SumaLista + lista[i];
    
    //}

    const SumaLista = lista.reduce (

        function (valorAcumulado = 0, nuevoElemento){

            return valorAcumulado + nuevoElemento;

        }
    )

    const Promedio = SumaLista / lista.length
    return Promedio
}