function calcular (){
    const InputLado1 = document.getElementById("Lado1");
    const InputLado2 = document.getElementById("Lado2");
    const InputBase = document.getElementById("Base");

    const Lado1 = Number (InputLado1.value);
    const Lado2 = Number (InputLado2.value);
    const Base  = Number (InputBase.value);

    const altura = Math.sqrt(Lado1**2 - (Base/2)**2)

    if (Lado1 == Lado2) {

        alert ("La altura del triguangulo es " + altura)

    }

    else {

        alert("Tu triangulo no es isosceles, los lados deben ser iguales")
    }

}