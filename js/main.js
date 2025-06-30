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
// let seleccionarCantidad;
// let total = 0
// let cantidad = (cant, precio) => {
//     return cant * precio
// }

// //cuando el usuario se loguee:
// if (usuarioLogueado){
//     let nombreCliente = prompt ("Bienvenido a nuestra tienda indumentaria, ¿Como te llamas?")
//     bandera = true

//     while (bandera) {
//         let productos = Number(prompt(`Hola ${nombreCliente}. ¿Qué estas buscando?: \n 1. Gorros de lana \n 2. Camperones\n 3. Buzos \n 4. Remeras\n 5. Pantalones\n 6. Bermudas\n 0. Cerrar compra`))

//         while(isNaN(productos)){
//             alert("Por favor ingresa un numero válido")
//             productos = Number(prompt(`Hola ${nombreCliente}. ¿Qué estas buscando?: \n 1. Gorros de lana \n 2. Camperones\n 3. Buzos \n 4. Remeras\n 5. Pantalones\n 6. Bermudas\n 0. Cerrar compra`))
//         }

//         switch (productos) {
//             case 1:
//                 seleccionarCantidad = Number(prompt (`Cada gorro cuesta $2000 ¿Cuantos quiere llevar?`))
//                 total += cantidad (seleccionarCantidad, 2000)
//             break;
//             //Ver sañdo del cliente
//             case 2:
//                 seleccionarCantidad = Number(prompt (`Cada camperon cuesta 50000 ¿Cuantos quiere llevar`))
//                 total += cantidad (seleccionarCantidad, 50000)
//             break;
//             case 3:
//                 seleccionarCantidad = Number(prompt (`Cada buzo cuesta 25000 ¿Cuantos quiere llevar?`))
//                 total += cantidad (seleccionarCantidad, 25000)
//                 break;
//             case 4:
//                 seleccionarCantidad = Number(prompt (`Cada remera cuesta $5000 ¿Cuantos quiere llevar?`))
//                 total += cantidad (seleccionarCantidad, 5000)
//             break;
//             case 5:
//                 seleccionarCantidad = Number(prompt (`Cada pantalon cuesta $10000 ¿Cuantos quiere llevar `))
//                 total += cantidad (seleccionarCantidad, 10000)
//             break;
//             case 6:
//                 seleccionarCantidad = Number(prompt (`Cada bermuda cuesta $6000 ¿Cuantos quiere llevar`))
//                 total += cantidad (seleccionarCantidad, 6000)
//             break;
//             //Salir de la tienda
//             case 0:
//                 bandera = false
//             break;
//             default:
//                 alert("Ingresa un numero valido porfavor")
//                 break;
//         }
//     }
//     if(total<30000){
//         let quiereEnvio= confirm("El total de la compra es $" + total + " ¿Desea agregar el servicio de envio por $5000?")
//         if(quiereEnvio){
//             alert ("El total de la compra es $" + (total = total + 5000))
//         } else{
//             alert ("El total de su compra seria " + total)
//         }
//     } else{
//         alert ("El total de su compra seria $" + total)
//     }
// }