

fetch('https://randomuser.me/api/').then(response => response.json()).then(data => mostrarPersona(data.results))


function mostrarPersona(datos){
  const nombre = datos[0].name.first;
  const titulo = datos[0].name.title; 
  const apellido = datos[0].name.last;
  const imagen = datos[0].picture.large;
  document.querySelector('#persona h1').innerHTML = titulo +" "+ nombre +" "+ apellido;
  document.querySelector("#persona img").src = imagen;
  console.log(datos)
}
