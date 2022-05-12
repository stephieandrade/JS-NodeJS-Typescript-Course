'use strict'
//Parametro rest
function listadoFrutas(...frutas){
    console.log("Fruta 1 : ", frutas);
}

 listadoFrutas("Melon", "Manzana");

 //Funciones anonimas
 var pelicula = function(nombre){
     return "La pelucla es " + nombre;
 }

 //Callback
 function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
     var sumar = numero1 + numero2
     sumaYmuestra(sumar)
     sumaPorDos(sumar)

     return sumar
 }

 sumame(5,7, function(dato){
     console.log("La suma es:", dato)
 }, function(dato){console.log("La suma por dos es: " , (dato*2))})

  