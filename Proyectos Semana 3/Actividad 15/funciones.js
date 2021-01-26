const productos = [
  "laptop","teléfono","televisor","tablet","pantalla"
]
//Arreglo en MAYUSCULAS
const prodMayusculas = productos.map(producto=>producto.toUpperCase())
//Arreglo con elemetos que inician con T
const prodConT = productos.filter(producto => producto[0]=== "t")
//Cantidad total de letras dentro del arreglo
const totalLetras = productos.reduce((total,producto)=> total + producto.length,0)
console.table(prodMayusculas)
console.table(prodConT)
console.log(totalLetras)