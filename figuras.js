//Codigo del cuadrado

//console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function PerimetroCuadrado (lado){ 
    return 4 * lado;
}

//console.log ("El perimetro de mi Cuadrado es: " + PerimetroCuadrado + "cm")

function AreaCuadrado (lado){ 
    return lado * lado;
}

//console.log ("El Area de mi Cuadrado es: " + AreaCuadrado + "cm^2")

//console.groupEnd();


//Codigo del Triangulo
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const BaseDelTriangulo = 4;
const AlturaDelTriangulo = 5.5;*/

function PerimetroTriangulo (lado1, lado2, Base){
     return lado1 + lado2 + Base;
    }
function AreaTriangulo (Base, altura){ 
return ( Base * altura) / 2
}

//console.group("Triangulo");

/*console.log("Los lados del triangulo miden: " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ BaseDelTriangulo 
+ "cm"
);

console.log("La altura del triangulo es: " + AlturaDelTriangulo) + "cm";

console.log("El perimetro del Triangulo es : " + PerimetroTriangulo + "cm");

console.log("El area del Triangulo es: " + AreaTriangulo + "cm^2");

console.groupEnd();*/

//Codigo del Circulo

//console.group("Circulo");

//const radioCirculo = 4; 
//console.log ("El radio del circulo es: " + radioCirculo + "cm");

function diametroCicrulo (radioCirculo){  
return radioCirculo *2;
}
//console.log ("El diametro el circulo es: " + diametroCicrulo + "cm");

const pi =Math.PI;
//console.log ("Pi es igual a " + pi);

function PerimetroCirculo (radioCirculo){
    const diametro = diametroCicrulo (radioCirculo);  
    return diametro * pi;
}
//console.log (" el perimetro del circulo es: " + PerimetroCirculo + "cm")

function AreaCirculo (radioCirculo) { 
   return pi * radioCirculo**2
}
//console.log("El area del Circulo es: " + AreaCirculo + "cm^2");



//console.groupEnd


//Aqui interactuamos con el HTML

 function calcularPerimetroCuadrado(){
    const InputCuadradoP = document.getElementById("InputCuadradoPerimetro");
    const value = InputCuadradoP.value;

    const perimetro = PerimetroCuadrado (value);
    alert("El perimetro de tu cuadrado es: " + perimetro)
 }

 function calcularAreaCuadrado(){
     const InputCuadradoA = document.getElementById("InputCuadradoArea")
     const value = InputCuadradoA.value

     const areac = AreaCuadrado (value);
     alert("El area de tu cuadrado es : " + areac)

 }

 function calcularPerimetroTriangulo(){
     const InputTrianguloL1 = document.getElementById("InputTrianguloPerimetrol1");
     const InputTrianguloL2 = document.getElementById("InputTrianguloPerimetrol2");
     const InputTrianguloL3 = document.getElementById("InputTrianguloPerimetrol3");

     const Tl1 = Number (InputTrianguloL1.value)
     const Tl2 = Number( InputTrianguloL2.value)
     const Tl3 = Number (InputTrianguloL3.value)

     const perimetrot = PerimetroTriangulo(Tl1, Tl2, Tl3)
     alert("El perimetro de tu triangulo es: " + perimetrot)



 }

 function calcularAreaTriangulo(){
     const InputTrianguloBase = document.getElementById("InputBaseTriangulo")
     const InputTrianguloAltura = document.getElementById("InputAlturaTriangulo")

     const TrianguloBase = Number (InputTrianguloBase.value)
     const TrianguloAltura= Number (InputTrianguloAltura.value)

     const area = AreaTriangulo(TrianguloBase, TrianguloAltura)
     alert("El area de tu triangulo es: " + area)
 }

 function CalcularDiametroCirculo(){
     const InputCirculoRadio = document.getElementById("InputRadioCirculo")

     const CirculoRadio = Number (InputCirculoRadio.value)

     const Diametro = diametroCicrulo(CirculoRadio)
     alert("El Diametro del ciruclo es: " + Diametro)
 }

 function CalcularPerimetroCirculo(){
    const InputCirculoRadio = document.getElementById("InputRadioCirculo2")

    const CirculoRadio = Number (InputCirculoRadio.value)

    const Diametro = PerimetroCirculo(CirculoRadio)
    alert("El Diametro del ciruclo es: " + Diametro)
}

function CalcularAreaCirculo(){
    const InputCirculoRadio = document.getElementById("InputRadioCirculo3")

    const CirculoRadio = Number (InputCirculoRadio.value)

    const Area = AreaCirculo(CirculoRadio)
    alert("El Area del ciruclo es: " + Area)
}

 