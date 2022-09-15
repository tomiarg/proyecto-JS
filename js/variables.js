const buy = []
const PRODUCTOS = []
const TOBUY = []
let windows = 0
let tela = 0
let l = 0
let ancho = 0
let totalPrice = 0
let precioPagar = 0
let url = 0
let clickeA = 0
let clickeB = 0
let clickeC = 0

const subirProductos = document.querySelector("#productos")
const tituloAmarillo = document.getElementById("titulo")
const imgSubir = document.querySelector(".card-img-top")
const btnCotizar = document.querySelector("#cotizar")
const cargarCortinas = document.querySelector("#cargarCortinas")
const carritoLleno = document.querySelector(".coche")
const carritoVacio = document.querySelector(".cocheLleno")
const sumarCompras = document.querySelector("#carritoCanvass")
const borrarCarrito = document.querySelector(".borrarCarrito")




class Product{
    constructor(order, cloth, compotition, detail, image, price){
        this.order = order
        this.cloth = cloth
        this.compotition = compotition
        this.detail = detail
        this.image = image
        this.price = price
    }
    
}

function push(){
PRODUCTOS.push(new Product("A", "BLACKOUT", "Patrón: Plane weave x peso: 5,50 +/- 5%(gr/m2)", "Las Cortinas Roller BlackOut ofrecen una solución única para quienes buscan oscurecer totalmente sus ambientes, es la opción más estética y moderna para remplazar la persiana Americana.", "./img/blackout.jpg", 0.20))
PRODUCTOS.push(new Product("B", "SUNSCREEN 5%","Patrón: Tatting", "Las Cortinas Roller SunScreen están hechas con un tejido técnico compuesto por fibras de PVC de alta tenacidad y fibra de vidrio, que lo convierten a una Cortina Roller SunScreen extremadamente durable y resistente a las roturas y deshilachados.", "./img/sunscreen.jpg",  0.27))
PRODUCTOS.push(new Product("C", "BANDAS VERTICALES", "Blackout & Sunscreen 5%", "Las Cortinas Bandas Verticales ofrecen una solución única para quienes buscan cortinas para grandes ventanales y superficies totalmente vidriadas, es la opción más estética y moderna para que tu casa quede como la soñaste.", "./img/bandaVertical.jpg", 0.40))
localStorage.setItem("productos", JSON.stringify(PRODUCTOS))
}
push()

function recuperarLs(){
    if(localStorage.productos){
        const prodLs = JSON.parse(localStorage.getItem("productos"))
        console.table(prodLs)
    }
}

