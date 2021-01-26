let contador = 3;
function masUno ( ){
  contador = contador + 1;
  document.getElementById("votos").innerHTML = contador + "votos";
}
function menosUno ( ){
  contador = contador - 1;
  document.getElementById("votos").innerHTML = contador + "votos";
}