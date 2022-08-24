const buy = []
const PRODUCTOS = []
const TOBUY = []
let windows = 0
let tela = 0
let l = 0
let ancho = 0
let totalPrice = 0
let url = 0

const subirProductos = document.querySelector("#productos")
const tituloAmarillo = document.getElementById("titulo")
const imgSubir = document.querySelector(".card-img-top")
const btnCotizar = document.querySelector("#cotizar")
const cargarCortinas = document.querySelector("#cargarCortinas")
let cuantasCortinas = 0 
let cortinasCantidad = 0
let enviarCantidad = 0




class Product{
    constructor(order, cloth, compotition, image, price){
        this.order = order
        this.cloth = cloth
        this.compotition = compotition
        this.image = image
        this.price = price
    }
}


PRODUCTOS.push(new Product("A", "BLACKOUT", "Patrón: Plane weave x peso: 5,50 +/- 5%(gr/m2)", "./img/blackout.jpg", 20))
PRODUCTOS.push(new Product("D", "SUNSCREEN 5%","Patrón: Tatting", "./img/sunscreen.jpg",  27))
PRODUCTOS.push(new Product("E", "BANDAS VERTICALES", "Blackout & Sunscreen 5%", "./img/bandaVertical.jpg", 40))
console.table(PRODUCTOS)

