
// // // // var a = 1;
// // // // var b = "gonzalo";

// // // // // alert(b);

// // // // console.log();

// // // // function imprimir(){
// // // //     for( var i = 0; i< 8000; i++ ){
// // // //         console.log("imprimio");
// // // //     } }

// // // //     imprimir();


// // //     function presionoBoton() {
// // //         console.log("se hizo click");
// // //     }       

// // //     // presionoBoton();


// // // var a = 10;
// // // var b = a;

// // // console.log(a);
// // // console.log(b);

// // // a = 20;

// // // console.log(a);
// // // console.log(b);


// // // var c = {
// // //     nombre : "gonzalo"
// // // };

// // // var d = c;

// // // console.log(c);
// // // console.log(d);

// // // c.nombre="lucho";

// // // console.log(c);
// // // console.log(d);


// // // d.nombre = "torres"

// // // console.log(c);
// // // console.log(d);

// // // cuando estmos igualando obj, siempre se pasan por referencia


// // // notacion de puntos y corchete
// // var persona = {
// //     nombre: "gonzalo",
// //     apellido: "torres",
// //     edad: 23,
// //     direccion:{
// //         calle:"charcas 2311",
// //         pais: "argentina"
// //     }  
// // };        
// //     var campo = "direccion"; 

// //     console.log(persona[campo]);

// //     console.log(persona.apellido);


// // // funciones

// // function primeraFuncion() {
// //     // var a = 20;
// //     // console.log(a);
// //     console.log("invocada");
// // }

// // // primeraFuncion();
// // var miFuncion= primeraFuncion;







// // // **** PARAMETROS DE LAS FUNCIONES****
// function imprimir(nombre, apellido) {

//   apellido = apellido || "el apellido qliao";

// if (apellido === undefined) {
//     apellido = "falta el apellido";
//  }
//    console.log(nombre + " " + apellido);
//  };

// // // variable anonima
// // imprimir("gonza", "torres");

// // // variable explicita

// // var nombres = "GOZA"

// // function imprimir1(nombres) {
// //     console.log(nombres);
//     // console.log(persona.nombre1 + " " + persona.apellido);
// }

 // imprimir1({ 

 //     nombre1: "gonza",
 //     apellido: "tores"
 // });


 // var obj = {
 //     nombre: "gonzalito",
 //     apellido: "pari"
 // }

 // imprimir (obj)
 // console.log(obj);


 // function im(params) {
    
 // }


// // retorno de funcion

// function obtenerAleatorio() {
//     return Math.random();
// }

// console.log(obtenerAleatorio());


// function obtenerNombre() {
//     return "gonza";
// }
// // console.log( obtenerNombre()+ " pari");

// var nombre = obtenerNombre();

// console.log(nombre);

// function esMayor05(){
//     if (obtenerAleatorio() < 0.5021561) {
//         return true;    
//     }else {
//         return false;
//     }
// }

// // console.log( esMayor05());

// if (esMayor05()) {
//     console.log("es mayor a 0.5");
// } else {
//     console.log("es menor a 0.5");
// }


// desbloc

// function crearPersona(nombre, apellido) {
//     return{
//         nombre:nombre,
//         apellido:apellido
//     }
// }

// var persona= crearPersona("gonzalo","torres");


// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.apellido);


// function creaFuncion() {
//     return function (nombre) {
//         console.log("me creo " + nombre);
//         return function(){
//             console.log("segunda funcion");
//         }
//     }
// }

// var nuevaFuncion= creaFuncion();
// // nuevaFuncion();
// // nuevaFuncion(persona.nombre)
// // console.log(nuevaFuncion); 
// // console.log(nuevaFuncion());
// var segundaFuncion= nuevaFuncion (persona.apellido);

// segundaFuncion();






// // FUNCIONES DE PRIMERA CLASE ///////////////


//  las funciones son objetos

// function a() {
//     console.log(" funcion a");
// }

// a();

// a.name= "gonzalito"

// console.log(a.name );


// function b(){
//     console.log("esta es otra funcion de prueba");
// }
// b();

// b.apply = "torres"

// console.log(b.apply);


// a las funciones les podemos meter metodos



// a.direccion= {
//     pais: "argentina",
//     provincia: "cordoba",
//     ciudad: "capital",
//     domicilio: {
//         barrio: "pueirredon",
//         calle:"charcas",
//         numeracion: "2311",
//     }
// }


// metodos y el objeto THIS

// var personasx = {
//     nombre: "gonzalete",
//     apellido: "parii",
//     imprimirNombre: function(){
//         // console.log(this);
//         console.log(this.nombre +" "+ this.apellido);
//     },
//     direccion:{
//         pais: "argentina",
//         obtenerPais:function(){
//             // console.log(this);
//             var self = this;
            
//             var nuevaDireccion = function(){
//                 console.log(self);
//                 console.log("la direccion es " + self.pais);
//             }
//             nuevaDireccion()
//         }
//     }
// };

// personasx.nombre = "lucho"

// personasx.imprimirNombre();
// personasx.direccion.obtenerPais();


//  la palabra reservada New ////

// var carlos = new personalbar();

// function Persona(nombre,apellido){
// this.nombre = "gonza";
// this.apellido = "tores";
// this.edad= 22;
// // this.nombreCompleto= function(){
// this.imprimirPersona=function(){
//     return this.nombre + " "+ this.apellido + "("+this.edad+")";
// }
// console.log("paso por aqui");
}

// var juan = new Persona();

// console.log(juan);
// console.log(juan.nombre);
// console.log(juan.nombreCompleto());
// var juan = new Persona("gonza","tores");


// console.log( juan.imprimirPersona());