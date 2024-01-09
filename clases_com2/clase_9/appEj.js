// var vector = [22,25,60,98,11,78, 4, 33, 85, 10];

// var mayor, posicionMayor;
// var menor, posicionMenor;

// mayor = vector  [0];
// posicionMayor = 0;

// menor = vector  [0];
// posicionMenor = 0;

// for(let i = 0; i < 10; i++) {
//    if (mayor < vector [i]) {
//        mayor = vector [i];
//        posicionMayor = i;
//    }

//    if (menor > vector [i]) {
//        menor = vector [i];
//        posicionMenor = i;
//    }
//}

// console.log("El mayor es " + mayor + " y se encuentra en la posicion " + posicionMayor)
// console.log("El menor es " + menor + " y se encuentra en la posicion " + posicionMenor)


var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log("Meses con 31 días:");
for (var i = 0; i < meses.length; i++) {
    if (diasDelMes[i] === 31) {
        console.log(meses[i]);
    }
}

console.log("Meses con 30 días:");
for (var i = 0; i < meses.length; i++) {
    if (diasDelMes[i] === 30) {
        console.log(meses[i]);
    }
}