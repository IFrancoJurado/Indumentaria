let saldoCliente;
let unidades;
let carrito;
let carritoCompras = []
let sigueComprando;
let cierreDeCompra;

function bienvenida(){
    let cliente = prompt("Hola, ¿Cual es tu nombre?")
    console.log(cliente)
    if(cliente != ""){
        let quiereVerCatalogo = confirm(`¿Como estas ${cliente}? ¿Deseas ver nuestro catalogo?`)
        if(quiereVerCatalogo){
            mostrarCatalogo()
        } else{
            alert("Okay, hasta luego")
        }
    }else{
        alert("Okay, hasta luego")
    }
    
}
function mostrarCatalogo(){
    let menu = Number(prompt(`Bienvenidos a JRD Indumentaria, ¿Que desea comprar?\n 1. Gorros\n 2. Camperones\n 3. Buzos\n 4. Remeras\n 5. Pantalones\n 6. Medias\n 7. Ver carrito\n 8. Salir\nIngrese un numero para seguir con la operacion`))
        switch (menu) {
        case 1:
            unidades = prompt("Cuestan $2500 c/u. ¿Cuantos vas a llevar?")
            sigueComprando = confirm(`Las ${unidades} unidades serian $${carrito = unidades * 2500}. ¿Desea llevar algo mas?`)
            carritoCompras.push(`${unidades} gorros: $${carrito}`)
            if(sigueComprando){
                llevaAlgoMas()
            } else{
                alert(`Okay, serian $${carrito}, abone en caja. Que tenga buen dia`)
            }
        break;
        case 2:
            unidades = prompt("Cuestan $50000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando= confirm(`Las ${unidades} unidades serian $${carrito = unidades * 50000}. ¿Desea llevar algo mas?`)
            carritoCompras.push(`${unidades} Camperones: $${carrito}`)
            if(sigueComprando){
                llevaAlgoMas()
            } else{
        alert(`Okay, serian $${carrito}, abone en caja. Que tenga buen dia`)
            }
        break;
        case 3:
            unidades = prompt("Cuestan $15000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando= confirm(`Las ${unidades} unidades serian $${carrito = unidades * 15000}. ¿Desea llevar algo mas?`)
            carritoCompras.push(`${unidades} Buzos: $${carrito}`)
            if(sigueComprando){
                llevaAlgoMas()
            } else{
                alert(`Okay, serian $${carrito}, abone en caja. Que tenga buen dia`)
            }
        break;
        case 4:
            unidades = prompt("Cuestan $5000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando= confirm(`Las ${unidades} unidades serian $${carrito = unidades * 5000}. ¿Desea llevar algo mas?`)
            carritoCompras.push(`${unidades} Remeras: $${carrito}`)
            if(sigueComprando){
                llevaAlgoMas()
            } else{
                alert(`Okay, serian $${carrito}, abone en caja. Que tenga buen dia`)
            }
        break;
        case 5:
            unidades = prompt("Cuestan $10000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando= confirm(`Las ${unidades} unidades serian $${carrito = unidades * 10000}. ¿Desea llevar algo mas?`)
            carritoCompras.push(`${unidades} Pantalones: $${carrito}`)
            if(sigueComprando){
                llevaAlgoMas()
            } else{
        alert(`Okay, serian $${carrito}, abone en caja. Que tenga buen dia`)
            }
        break;
        case 6:
            unidades = prompt("El par cuesta $1000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando= confirm(`Los ${unidades} pares serian $${carrito = unidades * 1000}. ¿Desea llevar algo mas?`)
            carritoCompras.push(`${unidades} Medias: $${carrito}`)
            if(sigueComprando){
                llevaAlgoMas()
        } else{
        alert(`Okay, serian $${carrito}, abone en caja. Que tenga buen dia`)
        }
        break;
        case 7:
            verCarrito()
        break;
        case 8:
            cierreDeCompra = alert(`Okay, el total de su compra seria $${carrito}`)
        break;
        default:
            alert("No tenemos esa opcion, la proxima ingrese un numero valido")
        break;
        }
}
function llevaAlgoMas(){
    let menu = Number(prompt(`Bienvenidos a JRD Indumentaria, ¿Que desea comprar?\n 1. Gorros\n 2. Camperones\n 3. Buzos\n 4. Remeras\n 5. Pantalones\n 6. Medias\n 7. Ver carrito\n 8. Salir\nIngrese un numero para seguir con la operacion`))
    switch (menu) {
        case 1:
            unidades = prompt("Cuestan $2500 c/u. ¿Cuantos vas a llevar?")
            sigueComprando = confirm(`Las ${unidades} unidades serian $${saldoCliente = unidades * 2500}.`)
            carritoCompras.push(`${unidades} Gorros: $${saldoCliente}`)
            alert("Este es el ticket, pase por caja y abone: $"+ (carrito + saldoCliente))
        break;
        case 2:
            unidades = prompt("Cuestan $50000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando = confirm(`Las ${unidades} unidades serian $${saldoCliente = unidades * 50000}.`)
            carritoCompras.push(`${unidades} camperones: $${saldoCliente}`)
            alert("Este es el ticket, pase por caja y abone: $"+ (carrito + saldoCliente))
        break;
        case 3:
            unidades = prompt("Cuestan $15000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando = confirm(`Las ${unidades} unidades serian $${saldoCliente = unidades * 15000}.`)
            carritoCompras.push(`${unidades} Buzos: $${saldoCliente}`)
            alert("Este es el ticket, pase por caja y abone: $"+ (carrito + saldoCliente))
        break;
        case 4:
            unidades = prompt("Cuestan $5000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando = confirm(`Las ${unidades} unidades serian $${saldoCliente = unidades * 5000}.`)
            carritoCompras.push(`${unidades} Remeras: $${saldoCliente}`)
            alert("Este es el ticket, pase por caja y abone: $"+ (carrito + saldoCliente))
        break;
        case 5:
            unidades = prompt("Cuestan $10000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando = confirm(`Las ${unidades} unidades serian $${saldoCliente = unidades * 10000}.`)
            carritoCompras.push(`${unidades} Pantalones: $${saldoCliente}`)
            alert("Este es el ticket, pase por caja y abone: $"+ (carrito + saldoCliente))
        break;
        case 6:
            unidades = prompt("El par cuesta $1000 c/u. ¿Cuantos vas a llevar?")
            sigueComprando = confirm(`Los ${unidades} pares serian $${saldoCliente = unidades * 1000}.`)
            carritoCompras.push(`${unidades} Medias: $${saldoCliente}`)
            alert("Este es el ticket, pase por caja y abone: $"+ (carrito + saldoCliente))
        break;
        case 7:
           verCarrito()
        break;
        case 8:
            cierreDeCompra = alert(`Okay, el total de su compra seria $${carrito}`)
        break;
        default:
            alert("No tenemos esa opcion, ingrese un numero valido")
        break;
        }
}
function verCarrito(){
    if(carritoCompras == ""){
        let quiereVerCatalogo = confirm("Su carrito esta vacio. ¿Desea ver al catalogo?")
        if(quiereVerCatalogo){
            mostrarCatalogo()
        } else{
            alert("Okay, hasta luego")
        }
    }else{
        let quiereVerCatalogo = confirm(`${carritoCompras} ¿Desea volver al catalogo?`)
        if(quiereVerCatalogo){
            llevaAlgoMas()
        } else{
            alert(`Okay, el total de su compra seria $${carrito}`)
        }
    }
}

bienvenida()

