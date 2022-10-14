const div = document.getElementById("div")
const carritoFinal = document.getElementById("carrito")
const inputBuscador = document.getElementById("inputBuscador")
const botonBuscador = document.getElementById("botonBuscador")


const productos = [
    {id: 1, nombre: "Camiseta Titular de juego Argentina 2022", precio: 28999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c85b9f3f009418b8759aeca002e4aaf_9366/Camiseta_Titular_Argentina_22_Blanco_HB9215_01_laydown.jpg" },
    {id: 2, nombre: "Camiseta Alternativa de juego Argentina 2022", precio: 28999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86efe3125fa24a04aa32aef900f59392_9366/Camiseta_Alternativa_Argentina_22_Azul_HB9220_01_laydown.jpg"},
    {id: 3, nombre: "Camiseta Titular Argentina 2022", precio: 16999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c85b9f3f009418b8759aeca002e4aaf_9366/Camiseta_Titular_Argentina_22_Blanco_HB9215_01_laydown.jpg"},
    {id: 4, nombre: "Camiseta Alternativa Argentina 2022", precio: 16999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86efe3125fa24a04aa32aef900f59392_9366/Camiseta_Alternativa_Argentina_22_Azul_HB9220_01_laydown.jpg"},
    {id: 5, nombre: "Camiseta Arquero Argentina 2022", precio: 16999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5c2744ee95f4a6085eaaebc00e5958c_9366/Camiseta_Arquero_Argentina_22_Verde_HF1482_01_laydown.jpg"},
    {id: 6, nombre: "Short Titular Argentina 2022", precio: 9999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cb24ac56c884a69a1e7ae85012ddcfa_9366/Short_Titular_Argentina_22_Negro_HB9216_01_laydown.jpg"},
    {id: 7, nombre: "Short Alternativo Argentina 2022", precio: 9999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa0caf9e678141e6a3eeae8801320c4a_9366/Short_Uniforme_Alternativo_Argentina_22_Azul_HF1487_01_laydown.jpg"},
    {id: 8, nombre: "Medias Titular Argentina 2022", precio: 3499, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e25cb3a035e740f3a220aed201047ac1_9366/Medias_Uniforme_Titular_Argentina_22_Blanco_HB9207_03_standard.jpg"},
    {id: 9, nombre: "Medias Alternativa Argentina 2022", precio: 3499, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc90a4d21c294cfea3d0aeb00012a408_9366/Medias_Uniforme_Alternativo_de_Argentina_Azul_HB9208_03_standard.jpg"},
    {id: 10, nombre: "Pelota Al Rihla Pro", precio: 44999, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28530d07245942fc944dae680084fb30_9366/Pelota_Al_Rihla_Pro_Blanco_H57783_01_standard.jpg"},
];



alert ("¡Bienvenido a la Pagina oficial de ARGENTUM!")



productos.forEach(productos => {
    const {id,nombre,precio,imagen} = productos
    let productoRenderizado = document.createElement("div")
    productoRenderizado.innerHTML = `
    <h3>Nombre:${productos.nombre}</h3>
    <span class="precio">precio: $${productos.precio}</span>
    <img class="imagenProducto"src="${productos.imagen}">
    <button id="agregar${productos.id}" class="boton-agregar">Agregar al Carrito</button>
    `
    div.append(productoRenderizado);
    const boton = document.getElementById(`agregar${productos.id}`)
    boton.addEventListener('click', () => { agregarAlCarrito(productos)
    })

})


const agregarAlCarrito = (productos) => {
    console.log(productos.id)
    let productoExiste = carrito.find (item => item.id === productos.id)
        productoExiste === undefined ? carrito.push({...productos, cantidad: 1}) :
        productoExiste.precio = productoExiste.precio + productos.precio
        productoExiste.cantidad++
}

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const buscarProducto = (string) => {
    console.log(string)
    let productoBuscado = productos.find(productos => productos.nombre.includes(string))
    console.log(productoBuscado);
    inputBuscador.value = " "
}

carritoFinal.addEventListener("click", () => localStorage.setItem("carrito" , JSON.stringify(carrito)));

botonBuscador.addEventListener("click", () => buscarProducto(inputBuscador.value));

botonVaciar.addEventListener("click", () => localStorage.clear(carrito))
botonVaciar.addEventListener("click", () => carrito = [] && Swal.fire("Borraste el carrito"))
contenedor.innerHTML = "";