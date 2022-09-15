const botonComprar = document.querySelector("#botonComprar")

function recuperarLs(){
    if(localStorage.productos){
        let totalPagar = 0
        const productosFinal = document.querySelector("div#finalizarCompra")
        const montoTotal = document.querySelector("#montoTotal")
        const prodLs = JSON.parse(localStorage.getItem("carrito"))
        console.table(prodLs)
        function mostrarCompra(){
            if(prodLs != ""){
                for(let i = 0; i < prodLs.length; i++){
                totalPagar = totalPagar + parseFloat(prodLs[i].inputTotal)
                montoTotal.innerHTML = `<div>total $ ${totalPagar.toFixed(2)}</div>`
                productosFinal.innerHTML += `
                <div class="row">
                    <div class="col">
                    <div>${prodLs[i].telaSelect} </div>
                    </div>
                    <div class="col">
                   <div>$ ${prodLs[i].inputTotal}</div>
                   </div>
                 </div>`
                }
            }else{
                productosFinal.innerHTML = `<div> no hay nada </div>`
                montoTotal.innerHTML = ""
            }
        }
    }mostrarCompra()
}

function terminaste(){
    recuperarLs()
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'compra procesada! tus cortinas llegarán en 7 días',
        showConfirmButton: false,
        timer: 1500
      })
      
}

botonComprar.addEventListener("click", () =>{ localStorage.setItem("carrito", JSON.stringify("")), terminaste()})

recuperarLs()


