/*
Objeto con las propiedades de la calculadora
*/

const propiedades = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,


}


/* 
Objeto con los metodos de la calculadora
*/

const metodos = {
    inicio: function() {

        for(let i=0; i<propiedades.teclas.length; i++) {
            propiedades.teclas[i].addEventListener("click", metodos.teclaPulsada);
        }
    },

    teclaPulsada: function(event) {

        propiedades.accion = event.target.getAttribute("class");
        propiedades.digito = event.target.innerHTML;
        metodos.calculadora(propiedades.accion, propiedades.digito);
    },

    calculadora: function(accion, digito) {
        
        switch(accion) {
            case "boton":
                propiedades.cantidadSignos = 0;
                if(propiedades.operaciones.innerHTML==0) {
                    propiedades.operaciones.innerHTML = digito;
                }
                else {
                    propiedades.operaciones.innerHTML += digito;
                }
            break;
            
            case "botonOp":
                if(propiedades.cantidadSignos==0 && propiedades.operaciones.innerHTML!=0){
                    propiedades.operaciones.innerHTML += digito;
                }
                propiedades.cantidadSignos++;
            break;
            
            case "decimal":
                //saca el punto
            break;
            
            case "equalBoton":
                propiedades.cantidadSignos = 0;
                //saca el igual
            break;
        }
    },

    borrarCalculadora: function() {
        propiedades.operaciones.innerHTML = 0;
    }
}

metodos.inicio();