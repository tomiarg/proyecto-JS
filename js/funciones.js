//debugger
let queres = confirm("querés comprar cortinas?")
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


