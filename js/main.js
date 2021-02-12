/*
Objeto con las propiedades de la calculadora
*/

const propiedades = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    decimales: false,
    resultado: false,

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

    teclado: function() {

        document.addEventListener("keydown", metodos.oprimir);
        
    },

    oprimir: function(tecla){


        if(tecla.keyCode== 48 || tecla.keyCode == 96){
            propiedades.accion = "boton";
            propiedades.digito = 0;
        }
        else if(tecla.keyCode== 49 || tecla.keyCode == 97){
            propiedades.accion = "boton";
            propiedades.digito = 1;
        }
        else if(tecla.keyCode== 50 || tecla.keyCode == 98){
            propiedades.accion = "boton";
            propiedades.digito = 2;
            tecla = 0;
        }
        else if(tecla.keyCode== 51 || tecla.keyCode == 99){
            propiedades.accion = "boton";
            propiedades.digito = 3;
        }
        else if(tecla.keyCode== 52 || tecla.keyCode == 100){
            propiedades.accion = "boton";
            propiedades.digito = 4;
        }
        else if(tecla.keyCode== 53 || tecla.keyCode == 101){
            propiedades.accion = "boton";
            propiedades.digito = 5;
        }
        else if(tecla.keyCode== 54 || tecla.keyCode == 102){
            propiedades.accion = "boton";
            propiedades.digito = 6;
        }
        else if(tecla.keyCode== 55 || tecla.keyCode == 103){
            propiedades.accion = "boton";
            propiedades.digito = 7;
        }
        else if(tecla.keyCode== 56 || tecla.keyCode == 104){
            propiedades.accion = "boton";
            propiedades.digito = 8;
        }
        else if(tecla.keyCode== 57 || tecla.keyCode == 105){
            propiedades.accion = "boton";
            propiedades.digito = 9;
        }

        //simbolos matematicos
        else if(tecla.keyCode== 187 || tecla.keyCode == 107){
            propiedades.accion = "botonOp";
            propiedades.digito = "+";
        }
        else if(tecla.keyCode== 189 || tecla.keyCode == 109){
            propiedades.accion = "botonOp";
            propiedades.digito = "-";
        }
        else if(tecla.keyCode== 88 || tecla.keyCode == 106){
            propiedades.accion = "botonOp";
            propiedades.digito = "*";
        }
        else if(tecla.keyCode == 111){
            propiedades.accion = "botonOp";
            propiedades.digito = "/";
        }
        else if(tecla.keyCode== 190 || tecla.keyCode == 110){
            propiedades.accion = "boton decimal";
            propiedades.digito = ".";
        }
        else if(tecla.keyCode== 13){
            propiedades.accion = "equalBoton";
            propiedades.digito = "=";
        }

        //RESET
        else if(tecla.keyCode== 8  || tecla.keyCode== 27 || tecla.keyCode== 46){
            metodos.borrarCalculadora();
            setTimeout(() => metodos.borrarCalculadora(), 10);
        }

        //botones no autorizados
        else {
            propiedades.accion = "";
            propiedades.digito = "";
        }

        metodos.calculadora(propiedades.accion, propiedades.digito);
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
                if((propiedades.operaciones.innerHTML==0 && propiedades.decimales==false) || (propiedades.resultado===true)) {
                    propiedades.resultado = false;
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
                propiedades.resultado = false;
                propiedades.decimales = false;
            break;
            
            case "boton decimal":
                if(!propiedades.decimales && propiedades.cantidadSignos==0)
                {
                    propiedades.operaciones.innerHTML += digito;
                    propiedades.resultado = false;
                    propiedades.decimales = true;
                }
            break;
            
            case "equalBoton":
                document.querySelector("#operaciones").innerHTML = eval(document.querySelector("#operaciones").innerHTML);

                if(!Number.isInteger((document.querySelector("#operaciones").innerHTML))){
                    propiedades.decimales = true;
                }

                propiedades.resultado = true;
            break;
        }
    },

    borrarCalculadora: function() {
        propiedades.operaciones.innerHTML = 0;
    }
}

metodos.inicio();
metodos.teclado();