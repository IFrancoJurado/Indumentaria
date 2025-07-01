const containerCatalogo = document.querySelector("#container-catalogo")
const unidadesElement = document.querySelector("#unidades")
const precioElement = document.querySelector("#precio")


function crearCardsDeProductos(productos){
    containerCatalogo.innerHTML = ""
    const productos = JSON.parse(localStorage.getItem(catalogo))
    if(productos &&productos.length > 0){
        productos.forEach(producto =>{
            const nuevoProducto = document.createElement("div")
            nuevoProducto.classList = "tarjeta-producto"
            nuevoProducto.innerHTML = `
            <img src= ${producto.img}>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
                <button>-</button>
                <span class= "cantidad"a>${producto.cantidad}</span>
                <button>+</button>
            </div>
            `
            containerCatalogo.appendChild(nuevoProducto)
            nuevoProducto
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e)=> {
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0]
                cuentaElement.innerHTML = agregarAlCarrito(producto)
                actualizarTotales ()
            })
            nuevoProducto
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e)=> {
                restarAlCarrito(producto)
                crearCardsDeProductos()
                actualizarTotales ()
            })
        });
    }
}
    
crearCardsDeProductos(catalogo)
actualizarTotales ()

function actualizarTotales () {
    const productos = JSON.parse(localStorage.getItem(catalogo))
    let unidades = 0; 
    if(productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad
            precio += producto.precio * producto.cantidad
        })
        unidadesElement.innerText= unidades;
        precioElement.innerText= precio;

    }
}