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

class Product{
    constructor(cloth, width, height, totalMts){
        this.cloth = cloth
        this.width = width
        this.height = height
        this.totalMts = totalMts
    }
    price(){
        //debugger
        if(this.cloth == "blackout"){
            let priceBl = this.totalMts * 12
            return priceBl
        }else if (this.cloth == "sunscreen"){
            let priceSun = this.totalMts * 11    
            return priceSun
        }else{
            let priceBoth = this.totalMts * 20
            return priceBoth
        }
    }
}

function carrito(){    
    let cloth = prompt("qué tela desea comprar?: sunscreen, blackout o ambas")
    cloth = cloth.toLocaleLowerCase()
    let width = parseInt(prompt("ingrese el ancho de la cortina en cm"))
    let height = parseInt(prompt("ingrese el alto de la cortina"))
    let totalMts = width * height
        buy.push(new Product(cloth, width, height, totalMts))
        console.table(buy)
}