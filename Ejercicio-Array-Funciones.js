'use strict'

/*
1. Pedir 6 numeros por pantalla y meterlos en un array
2. Mostrar el array entero en el cuerpo de la pagina y la consola
3. Ordenarlo y mostrarlo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

let elementos = []

function ingresarElementos(mostrarElementos, ordenar, buscar) {
    //1. Pedir 6 numeros por pantalla y meterlos en un array
    for (let index = 0; index <= 5; index++) {
        let element = parseInt(prompt("Ingresa 6 numeros"))
        elementos.push(element)
    }
    document.write("<h2>Listado de elementos</h2>")
    mostrarElementos(elementos);
    document.write("<h2>Listado ordenado/invertido de elementos</h2>")
    ordenar(elementos);
    buscar(elementos)

    
// 5. Mostrar cuantos elementos tiene el array
    document.write("<h2>Longitud de array : </h2>"+elementos.length())
}

function mostrarElementos(elementos){
    //2. Mostrar el array entero en el cuerpo de la pagina y la consola
    elementos.forEach(element=> {
        document.write("<div>"+element+"</div>")
    });
    
    console.log(elementos)
}

function ordenarOInvertir(elementos){
//     3. Ordenarlo y mostrarlo
// 4. Invertir el orden y mostrarlo
    let eleccion = prompt("Quiere ordenar los elementos (opcion 1) o invertir su orden (opcion 2)")
    if(eleccion == "1"){
        elementos.sort((a, b) => a - b)
        elementos.forEach(element=> {
            document.write("<div>"+element+"</div>")
        });
    }else if(eleccion == "2"){
        elementos.sort((a, b) => b - a)
        elementos.forEach(element=> {
            document.write("<div>"+element+"</div>")
    })}
}

function buscar(elementos){
    // Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
    let nuevoElemento = parseInt(prompt("Ingrese un elemento para encontrar"))
    let elementFound = elementos.find((o) => o === nuevoElemento)
    if(elementFound != null){
        document.write("<div>El elemento fue encontrado en el index "+elementos.indexOf(elementFound)+"</div>")
    }else{        
        document.write("<div>El elemento no fue encontrado</div>")
    }
    
}

ingresarElementos(mostrarElementos, ordenarOInvertir, buscar)

