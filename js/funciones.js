
class Carro{
    constructor(cloth, width, height, totalMts, price){
        this.cloth = cloth
        this.width = width
        this.height = height
        this.totalMts = totalMts
        this.price = price
    }
}
//debugger
let cotizar = confirm("está buscando cotizar cortinas?")
if (cotizar){
    windows = parseInt(prompt("por favor, ingrese cuántas ventanas desea acortinar"))
    if(windows != NaN){
        for(let j = 0; j < windows; j++){
            carrito()      
        }
    }
}         
function elija(){
    
    let cual = 0
    do{
    cual = parseInt(prompt(`elija un producto:\n 1) ${PRODUCTOS[0].cloth}\n 2) ${PRODUCTOS[1].cloth}\n 3) ${PRODUCTOS[2].cloth}\n 4) ${PRODUCTOS[3].cloth}\n 5) ${PRODUCTOS[4].cloth}\n 6) ${PRODUCTOS[5].cloth}\n` )); } while( cual != 1 && cual != 2 && cual != 3 && cual != 4 && cual != 5 && cual != 6);
    return cual;
    
}
function elijaAncho(){
   
    let ancho = 0
    do{
       ancho = parseInt(prompt("ingrese el ancho de la cortina en cm"));
    }while( isNaN(ancho));
    return ancho;
}
function elijaAlto (){
    //debugger
    let alto = 0
    do{
        alto = parseInt(prompt("ingrese el alto de la cortina"));

    }while(isNaN(alto));
    return alto;

}

function carrito(){    
    let which = elija()
    l = which - 1
    let cloth = PRODUCTOS[l].cloth
    let width = elijaAncho()
    let height = elijaAlto()
    let totalMts = width * height
    let precioTotal = PRODUCTOS[l].price * totalMts
       TOBUY.push(new Carro(cloth, width, height, totalMts, precioTotal))
       console.table(TOBUY)
}

for(let t = 0;  t < TOBUY.length; t++){
    totalPrice = TOBUY[t].price + totalPrice    
}
alert("deberas abonar $: " + totalPrice)



