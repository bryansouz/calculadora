var visor = document.getElementById('resultado')
var numero = Number(visor.value.length)


function inserir(numero){
    visor.innerHTML += numero
}
function clean(){
    visor.innerHTML = ""
}
function apagar(){
   let resultado = visor.innerHTML;
   visor.innerHTML = resultado.substring(0, resultado.length -1);
  
}
function result(){
    var resultado = visor.innerHTML
    
     visor.innerHTML = eval(resultado)
}    