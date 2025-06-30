function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("ropa"))
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("Ropa", JSON.stringify([nuevoProducto]))
    } else{
        let indiceProducto = memoria.findIndex(ropa => ropa.id === producto.id)
        const nuevaMemoria = memoria;
    } if(indiceProducto === -1){
        nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
    } else{
        nuevaMemoria[indiceProducto].cantidad ++
    }
    localStorage.setItem("Ropa", JSON.stringify(nuevaMemoria))
}

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto
    nuevoProducto.cantidad = 1
    return nuevoProducto
}