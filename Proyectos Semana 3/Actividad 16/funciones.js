function Usuario (nombre, correo, edad, comentario){
  this.nombre = nombre;
  this.correo = correo;
  this.edad = edad;
  this.comentario = comentario;
}

const usuario1 = new Usuario("Anahid","anahid.correo.com",30,"diseñadora");
const usuario2 = new Usuario("Roman","roman.correo.com",22,"Desarrollador en Progreso");
const usuario3 = new Usuario("Alan","alan.correo.com",29,"Encargado de Region");

const datos = [usuario1,usuario2,usuario3]

console.table(datos)

datos.forEach(dato=>{
        console.log(`********** Datos de Usuario ${dato.nombre} **********`)
        for(propiedad in dato){
             console.log(dato[propiedad])
        }
   })