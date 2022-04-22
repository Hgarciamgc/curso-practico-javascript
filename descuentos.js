var PrecioOriginal = 120;
var Descuento = 18;

function CalcularPrecioConDescuento(Precio, Descuento){

    const PorcentajeDelPrecioConDescuento = 100 - Descuento;
    const PrecioConDescuento = (Precio * PorcentajeDelPrecioConDescuento)/100

    return PrecioConDescuento
}

function OnClickButtomPriceDiscount (){

    const InputPrice = document.getElementById("InputPrice")
    const InputCupon = document.getElementById("Cupon")

    const Numero = InputCupon.value
    console.log(Numero)

    if (Numero == "15%" ) {
          DiscountValue = 15
    }
    else if (Numero == "25%") {
          DiscountValue = 25
    }
    else if (Numero == "40%") {
          DiscountValue = 40
    }

    const PriceValue = Number (InputPrice.value)
    const PrecioConDescuento = CalcularPrecioConDescuento(PriceValue, DiscountValue)
    

    const resultp = document.getElementById("ResultPrice")
    resultp.innerText = "El precio con descuento son $" + PrecioConDescuento 
}