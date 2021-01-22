const amigos =[]
while (true){
  let nombre = prompt("Sonia")
  if (nombre !== "fin"){
    amigos.push(nombre)
  }else{
    break;
  }
}
console.table(amigos);