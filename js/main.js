const containerCatalogo = document.querySelector("#container-catalogo")


function crearCardsDeProductos(productos){
    productos.forEach(producto =>{
        const nuevoProducto = document.createElement("div")
        nuevoProducto.classList = "tarjeta-producto"
        nuevoProducto.innerHTML = `
            <img src= ${producto.img}>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        `
        containerCatalogo.appendChild(nuevoProducto)
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto))
    });
}

crearCardsDeProductos(catalogo)