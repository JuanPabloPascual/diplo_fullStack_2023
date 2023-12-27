// Condicionales

// let edad = 16;

// if (edad >=18) {
//    console.log("Sos mayor de edad")
// } 
// else if(edad >= 18){
//    console.log("Eres mayuor de edad pero menos a 21 anios")
// }
// else{
//    console.log("Aun no eres mayor de edad");
// } 

// Switch

// let diaDeLaSemana = "Lunes";

// switch (diaDeLaSemana) {
//     case 'Domingo':
//      console.log('Hoy es domingo');
//       break;

//       case 'Viernes':
//          console.log('Hoy es viernes');
//            break;

//       default:
//           console.log("Es otro dia")



// Operador Ternario

// let edadd = 17;
// let esMayor = (edad >= 18) ? true : false;
// console.log(esMayor)


            // Funciones
//
// function saludar(nombre){
//    console.log("Hola," + nombre + "!")
// }

// saludar("Juan")

// const saludar = nombre =>{
//        console.log(`Hola, ${nombre}`)
// }

// saludar("Juan")

// function suma(num1, num2){
//    return num1 + num2;
//}

// let resultado = suma (5, 3);
//       console.log("La suma total es : + resultado");

// function esMayorDeEdad(edad){
//    return(edad >= 18) ? true : false
// }

// function mostrarMensajeEdad(edad){
//     console.log(esMayorDeEdad (edad) ? "Sos mayor de edad" : "Sos menor de edad")
// }

// mostrarMensajeEdad(12)

                                   // Metodos de Array // 

// let numeros = [1, 2, 3, 4, 5] 

                                         // Map //

// let cuadrados = numeros.map(numero => numero * numero) 
// console.log(cuadrados)

                                       // Filter  //

// let pares = numeros.filter(numero => numero % 2 == 0)
// console.log(pares)
                                       
                                       // Reduce //               Se puede usar para una facturacion por ejemplo. Un sistema para contabilizar facturaciones 

// let sumaTotal = numeros.reduce((total, numero) => total + numero, 0)
// console.log(sumaTotal)                                  
                                
// let frutas = [ "manzana", "banana", "naranja", "uva" ]
// let indice = frutas.lastIndexOf("naranja")
// console.log(indice)

//let num = [1, 2, 3, 4, 5]
                                      // Push y Pop //
// num.push (6)
// console.log(num)
// let ultimoNumero = num.pop();
// console.log (ultimoNumero)
// console.log (num)


// Ejercicio: Escribe una funcion llamada "verificarNumero" que tome un numero como argumento y muestre en la consola si el numero es positivo, negativo o cero //


// function verificarNumero(numero){
//    if(numero > 0){
//        console.log("El numero es positivo")
//    }
//    else if(numero < 0){
//        console.log("El numero es negativo")
//    }
//    else {
//        console.log("El numero es cero")
//    }
// }


// Ejercicio: Escribe una funcion llamda "calcularAreaTriangulo" que tome la base y la altura de un triangulo como argumentos y devuelva el area del triangulo //

// Va con IF por si hay un 0 que rompa la funcion


// function calcularAreaTriangulo(base, altura){
//    if(base <= 0 || altura <= 0){
//        console.log("Error")
//        return;
//    }
//    const area = (base * altura) / 2
//    console.log(area)
// }

// calcularAreaTriangulo(5, 8)