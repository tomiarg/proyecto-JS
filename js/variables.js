const buy = []
const PRODUCTOS = []
const TOBUY = []
let windows = 0
let tela = 0
let l = 0
let ancho = 0
let totalPrice = 0

const subirProductos = document.querySelector("#productos")
const tituloAmarillo = document.getElementById("titulo")



class Product{
    constructor(order, cloth, price){
        this.order = order
        this.cloth = cloth
        this.price = price
    }
}


PRODUCTOS.push(new Product("A", "BLACKOUT PREMIUM", 20))
PRODUCTOS.push(new Product("B", "BLACKOUT media", 12))
PRODUCTOS.push(new Product("C", "BLACKOUT arg", 9))
PRODUCTOS.push(new Product("D", "SUNSCREEN EUROP", 27))
PRODUCTOS.push(new Product("E", "SUNSCREEN EEUU", 22))
PRODUCTOS.push(new Product("F", "SUNSCREEN ARG", 15))
console.table(PRODUCTOS)

