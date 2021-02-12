/*
Objeto con las propiedades de la calculadora
*/

const propiedades = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,

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
        metodos.calculadora(propiedades.accion);
    },

    calculadora: function(accion) {
        
        switch(accion) {
            case "boton":
                //saca el numero
            break;
            
            case "botonOp":
                //saca la operacion
            break;
            
            case "decimal":
                //saca el punto
            break;
            
            case "equalBoton":
                //saca el igual
            break;
        }
    }
}

metodos.inicio();