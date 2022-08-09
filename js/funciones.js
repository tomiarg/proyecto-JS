/*let queres = confirm("querés comprar cortinas?")
if(queres){
    let tela = prompt("qué tela estás buscando: blackout, sunscreen ó ambas?")
    tela = tela.toLocaleLowerCase()
    if (tela == "blackout" || tela == "sunscreen" || tela =="ambas") {
        let cantidad = parseInt(prompt("cuántas cortinas pretende comprar?"))
        if (cantidad != NaN){
            for(let i = 0; i < cantidad; i++) {
                let ancho = parseInt(prompt( "de la"+" "+ (i + 1)+ "°, " + "ingrese el ancho en cm"))
                let largo = parseInt(prompt("de la"+" "+ (i + 1)+ "°, " + "ingrese el ancho en cm"))
                function total(width, long) {
                    const longitud = width * long 
                    let precio = longitud * 350
                    alert("el precio de la "+ (i+1) + "°, " + "es: $ " + " " + precio)                             
                }
                total(ancho, largo)
            } 
        }else {
            alert("debe ingresar un número")
        }        
    }else{
        alert("ha ingresado un valor incorrecto!")
    }
}else{
    alert("te invitamos a vistar la página")
}

*/

class Carro{
    constructor(cloth, width, height, totalMts, price){
        this.cloth = cloth
        this.width = width
        this.height = height
        this.totalMts = totalMts
        this.price = price
    }
}
debugger
let cotizar = confirm("está buscando cotizar cortinas?")
if (cotizar){
    windows = parseInt(prompt("por favor, ingrese cuántas ventanas desea acortinar"))
    if(windows != NaN){
        for(let j = 0; j < windows; j++){
            carrito()      
        }
    }
}         

function carrito(){    
    let which = parseInt(prompt(`elija un producto:\n 1) ${PRODUCTOS[0].cloth}\n 2) ${PRODUCTOS[1].cloth}\n 3) ${PRODUCTOS[2].cloth}\n 4) ${PRODUCTOS[3].cloth}\n 5) ${PRODUCTOS[4].cloth}\n 6) ${PRODUCTOS[5].cloth}\n` ))
    l = which - 1
    let cloth = PRODUCTOS[l].cloth
    let width = parseInt(prompt("ingrese el ancho de la cortina en cm"))
    let height = parseInt(prompt("ingrese el alto de la cortina"))
    let totalMts = width * height
    let precioTotal = PRODUCTOS[l].price * totalMts
       TOBUY.push(new Carro(cloth, width, height, totalMts, precioTotal))
       console.table(TOBUY)
}

for(let t = 0;  t < TOBUY.length; t++){
    totalPrice = TOBUY[t].price + totalPrice
}
alert("deberas abonar $: " + totalPrice)
