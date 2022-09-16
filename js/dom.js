
for(let t = 0;  t < TOBUY.length; t++){
    let carr = document.createElement("div");
    carr.innerHTML = `<h3> tela:  ${TOBUY[t].cloth} Total: $ ${TOBUY[t].price}</h3> `;
    document.body.appendChild(carr);
}

//evento que cambia de color el título cuando ponemos el cursor arriba
tituloAmarillo.addEventListener("mousemove", (e) => {
  e.preventDefault()
    tituloAmarillo.className = "colorAmarillo"
})


//evento para poner en negro el nav cuando se scrollee
window.onscroll = (() => {
  const navScroll = document.querySelector("nav")
  if (window.scrollY > 30) {
    navScroll.className = "navbar navbar-dark bg-dark  fixed-top opacity"
  } else {
    navScroll.className = "navbar navbar-dark bg-dark fixed-top"
  }
});

//acá se crean las cards.
function funcionApi(){
  fetch('https://6318e8d4f6b281877c79b8b6.mockapi.io/cortinasApi/productos')
  .then((response) => response.json())
  .then((json) => cargarProductos(json))
  .catch((error)=> console.error("There is something wrong, check: ", error))

}
funcionApi()
function cargarProductos(json){
  for(let u=0; u < json.length; u ++){
      
    subirProductos.innerHTML +=   `
    <div class="card" style="width: 18rem;">
    <img src="${json[u].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${json[u].tela}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${json[u].compotition}</li>
      <li class="list-group-item">$ ${json[u].price} por m2</li>
      <li class="list-group-item">COLORES</li>
      <li class="list-group-item">Blanco - Gris - Negro</li>
    </ul>
    <div class="card-body">
     <button class="btn btn-primary Btn${json[u].order}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      detalle de producto
    </button><div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" style="
    width: 100%;
" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel" >${json[u].tela}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body bodyCanvas">
      <div id = "canvasId">
  
      </div>
      
    </div>
  </div></div> `    
    
  };const btnProda = document.querySelector(".BtnA")
  btnProda.addEventListener("click", (e)=>{  
   e.preventDefault()
      i = 0
      prodCanvas (i)
  })
    const btnProdb = document.querySelector(".BtnB")
    btnProdb.addEventListener("click", (e)=>{
      e.preventDefault()
      i = 1
      prodCanvas (i)
    })
    const btnProdc = document.querySelector(".BtnC")
    btnProdc.addEventListener("click", (e)=>{
      e.preventDefault()
      i = 2
      prodCanvas (i)
  })
  
}


//función que crea en HTML espacios para cargar qué tela pretenden
function elegirTela(){
  cargarCortinas.innerHTML += `<div> <select name="select" class="select">
  <option class = "telaNo" value="value0" selected>...</option>
  <option class = "telaBlackout" value="value1">${PRODUCTOS[0].cloth}</option>
  <option class = "telaSunscreen" value="value2">${PRODUCTOS[1].cloth}</option>
  <option class = "telaBanda" value="value3">${PRODUCTOS[2].cloth}</option>
  </select><input class = largo type ="number" placeholder = "ingrese el ancho"></a>
  <input class = ancho type ="number" placeholder = "ingrese el largo"></a>
  <input type="submit" value= "agregar al carrito"></a></div>
  `
  
}

//este Evento escucha el click sobre "cotizar" y crea un input para poner cantidad de cortinas
btnCotizar.addEventListener("click" , function addSelect(){
  let add = document.querySelector("#agregarInputs")
  btnCotizar.setAttribute('disabled', '')
  add.innerHTML = add.innerHTML + `<div> <select name="select" class="select">
  <option class = "telaNo" selected>...</option>
  <option class = "telaBlackout">${PRODUCTOS[0].cloth}</option>
  <option class = "telaSunscreen">${PRODUCTOS[1].cloth}</option>
  <option class = "telaBanda">${PRODUCTOS[2].cloth}</option>
  </select><input class = largo type ="number" placeholder = "ingrese el ancho" min ="1"></a>
  <input class = ancho type ="number" placeholder = "ingrese el largo" min="1"></a>
  <input class="enviarCantidad" type="submit" value= "agregar al carrito"></a></div>
  `
  detalleCompra()
})

//sweet alert.
function sa (){
  Swal.fire('cotización realizada con éxito!')
  carritoLleno.className = "cocheLleno"
  carritoVacio.className = "coche"

} 




//funciones para ver en Canvass el detalle del prod que se clickee. 
function prodCanvas(i){  
  
  let canvasId = document.querySelector("#canvasId")
    canvasId.innerHTML = `  
  <div>
  <div class="row g-0">
  <div class="col-md-4">
    <img src="${PRODUCTOS[i].image}" class="img-fluid rounded-start" alt="...">
  </div>
 <div class="col-md-8">
   <div class="card-body" style="
   display: flex;
   flex-direction: column;
   margin-top: 35px;
">
      <h5 class="card-title">${PRODUCTOS[i].cloth}</h5>
      <p class="card-text">${PRODUCTOS[i].compotition}.</p>
      <p class="card-text"><small class="text-muted">${PRODUCTOS[i].detail}</small></p>
     </div>
   </div>
   </div>
   </div>
     </div>`
   
}

//constante Para el carrito
const CARRITO = []

class CarritoClass{
  constructor(telaSelect, mtLargo, mtancho, mtsCuadrados, inputTotal){
      this.telaSelect = telaSelect
      this.mtLargo = mtLargo
      this.mtancho = mtancho
      this.mtsCuadrados = mtsCuadrados
      this.inputTotal = inputTotal
  }
}

//función para leer los datos ingresados y devolver el total y demás.
function detalleCompra(){  
   const enviarCantidad = document.querySelector(".enviarCantidad")
   enviarCantidad.addEventListener("click", (e) =>{
    e.preventDefault()
    sa ()
    
    let telaSelect = document.querySelector("select.select").value
    let mtLargo = document.querySelector("input.largo").value
    let mtancho = document.querySelector("input.ancho").value
    let inputTotal = 0
    let mtsCuadrados = mtancho * mtLargo
    if(telaSelect != "..." &&  mtLargo != "" && mtLargo >= 1 &&  mtancho!="" && mtancho >= 1){
      if(telaSelect == `${PRODUCTOS[0].cloth}`){
        inputTotal = inputTotal +(mtsCuadrados * PRODUCTOS[0].price)
        CARRITO.push(new CarritoClass(telaSelect, mtLargo, mtancho, mtsCuadrados, inputTotal.toFixed(2)))  
        sumarCompras.innerHTML +=  `<p> tela:  ${PRODUCTOS[0].cloth} Total: $ ${inputTotal.toFixed(2)}<span><img src="${PRODUCTOS[0].image}" width = 50px></span></p>`
      } else if(telaSelect == `${PRODUCTOS[1].cloth}`){
        inputTotal = mtsCuadrados * PRODUCTOS[1].price
        CARRITO.push(new CarritoClass(telaSelect, mtLargo, mtancho, mtsCuadrados, inputTotal.toFixed(2)))
        sumarCompras.innerHTML +=  `<p> tela:  ${PRODUCTOS[1].cloth} Total: $ ${inputTotal.toFixed(2)}<span><img src="${PRODUCTOS[1].image}" width = 50px></span><p>`

      }else{
        inputTotal = mtsCuadrados * PRODUCTOS[2].price
        CARRITO.push(new CarritoClass(telaSelect, mtLargo, mtancho, mtsCuadrados, inputTotal.toFixed(2)))
        sumarCompras.innerHTML +=  `<p> tela:  ${PRODUCTOS[2].cloth} Total: $ ${inputTotal.toFixed(2)}<span><img src="${PRODUCTOS[2].image}" width = 50px></span></p>`

      }
      console.table(CARRITO)
      localStorage.setItem("carrito", JSON.stringify(CARRITO))
      document.querySelector("select.select").value = "..."
      document.querySelector("input.largo").value = ""
      document.querySelector("input.ancho").value = ""
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'recuerda ingresar todos los datos',
      });
      carritoLleno.className = "coche"
      carritoVacio.className = "cocheLleno"
    }
  });
}

for(let t = 0;  t < CARRITO.length; t++){
  precioPagar = CARRITO[t].price + precioPagar   
}

function recuperarLscarrito(){
  if(localStorage.carrito){
      const CARRITOLS = JSON.parse(localStorage.getItem("carrito"))
      console.table(CARRITOLS)     
  } 
}

borrarCarrito.addEventListener("click", () =>{
  sumarCompras.innerHTML = ""
  localStorage.setItem("carrito", JSON.stringify(""))
})

function sumar(){
  const CARRITOLS = JSON.parse(localStorage.getItem("carrito"))
  let totalPagar = 0
  for(let t = 0;  t < CARRITOLS.length; t++){
    totalPagar = CARRITOLS[t].inputTotal + totalPagar
    console.log(totalPagar)  
  }
  
}
recuperarLscarrito()
