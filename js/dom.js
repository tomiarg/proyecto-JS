
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
function cargarProductos(){
  for(let u=0; u < PRODUCTOS.length; u ++){
      
    subirProductos.innerHTML +=   `
    <div class="card" style="width: 18rem;">
    <img src="${PRODUCTOS[u].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${PRODUCTOS[u].cloth}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${PRODUCTOS[u].compotition}</li>
      <li class="list-group-item">$ ${PRODUCTOS[u].price} por m2</li>
      <li class="list-group-item">COLORES</li>
      <li class="list-group-item">Blanco - Gris - Negro</li>
    </ul>
    <div class="card-body">
      <a href="./pages/productos.html"" class="card-link click${PRODUCTOS[u].order}" id = "prodCanvas">Detalle de Producto</a> </div> <button class="btn btn-primary Btn${PRODUCTOS[u].order}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      detalle de producto
    </button><div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" style="
    width: 100%;
" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel" >Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body bodyCanvas">
      <div id = "canvasId">
  
      </div>
      
    </div>
  </div></div> `    
    
  };
}


//función que crea en HTML espacios para cargar qué tela pretenden
function elegirTela(){
  cargarCortinas.innerHTML += `<div> <select name="select" class="select">
  <option class = "telaNo" value="value0" selected>...</option>
  <option class = "telaBlackout" value="value1">${PRODUCTOS[0].cloth}</option>
  <option class = "telaSunscreen" value="value2">${PRODUCTOS[1].cloth}</option>
  <option class = "telaBanda" value="value3">${PRODUCTOS[2].cloth}</option>
  <input class="btnHecho" type="submit" value= "hecho"></a>
  </select><input class = largo type ="number" placeholder = "ingrese el ancho"></a>
  <input class = ancho type ="number" placeholder = "ingrese el largo"></a>
  <input type="submit" value= "agregar al carrito"></a></div>
  `
  
}

 cargarProductos()

// esta función hace que escuche la cantidad que quiere comprar y crea 1 input por C/cortina
 function nvoCodigo(){  
  const enviarCantidad = document.querySelector(".enviarCantidad")
  enviarCantidad.addEventListener("click", (e) =>{
    e.preventDefault()
    const cortinasCantidad = parseInt(enviarCantidad.value)
    if(cortinasCantidad!= NaN || cortinasCantidad != Null){
      for(let j = 0; j < cortinasCantidad; j++){
        elegirTela()    
        console.log(cortinasCantidad)
      }
    }    
  });
}

//este Evento escucha el click sobre "cotizar" y crea un input para poner cantidad de cortinas
btnCotizar.addEventListener("click" , function addSelect(){
  let add = document.querySelector("#agregarInputs")
  add.innerHTML = add.innerHTML + `<div> <select name="select" class="select">
  <option class = "telaNo" value="value0" selected>...</option>
  <option class = "telaBlackout">${PRODUCTOS[0].cloth}</option>
  <option class = "telaSunscreen">${PRODUCTOS[1].cloth}</option>
  <option class = "telaBanda">${PRODUCTOS[2].cloth}</option>
  <input class="btnHecho" type="submit" value= "hecho"></a>
  </select><input class = largo type ="number" placeholder = "ingrese el ancho"></a>
  <input class = ancho type ="number" placeholder = "ingrese el largo"></a>
  <input class="enviarCantidad" type="submit" value= "agregar al carrito"></a></div>
  <input class="total" type ="number" placeholder=0></a>
  `
  detalleCompra()
})



//función para completar la otra url
//pensar cómo hacer para que al tocar un click, pueda usar la misma función y mostrar diferentes cosas


function detallePagg(){
  const clickDetalleA = document.querySelector(".clickA")
  const clickDetalleB = document.querySelector(".clickB")
  const clickDetalleC = document.querySelector(".clickC")
  clickDetalleA.addEventListener("click", function clickeAr(){   
    clickeA++
    sessionStorage.setItem("detalle", JSON.stringify([clickeA, clickeB, clickeC]))
  })
  clickDetalleB.addEventListener("click", function clickeBr(){  
    
    clickeB++
    sessionStorage.setItem("detalle", JSON.stringify([clickeA, clickeB, clickeC]))
  })
  clickDetalleC.addEventListener("click", function clickeCr(){     
    clickeC++
    sessionStorage.setItem("detalle", JSON.stringify([clickeA, clickeB, clickeC]))
  })
}


//sweet alert.
function sa (){
  Swal.fire('cotización realizada con éxito!')
} 




//funciones para ver en Canvass el detalle del prod que se clickee. 
const btnProda = document.querySelector(".BtnA")

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




function prodCanvas(i){  
  
  let canvasId = document.querySelector("#canvasId")
    canvasId.innerHTML = `  
  <div>
  <div class="row g-0">
  <div class="col-md-4">
    <img src="${PRODUCTOS[i].image}" class="img-fluid rounded-start" alt="...">
  </div>
 <div class="col-md-8">
   <div class="card-body">
      <h5 class="card-title">${PRODUCTOS[i].cloth}</h5>
      <p class="card-text">${PRODUCTOS[i].compotition}.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
     </div>
   </div>
   </div>
   </div>
     </div>
    <div class="dropdown mt-3">
     <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
   </div>`
   
}

function detalleCompra(){  
   const enviarCantidad = document.querySelector(".enviarCantidad")
   enviarCantidad.addEventListener("click", (e) =>{
    e.preventDefault()
    sa ()
    const sumarCompras = document.querySelector("#sumarCompras")
    let telaSelect = document.querySelector("select.select").value
    let mtLargo = document.querySelector("input.largo").value
    let mtancho = document.querySelector("input.ancho").value
    let inputTotal = document.querySelector("input.total").value
    let mtsCuadrados = mtancho * mtLargo
    if(telaSelect == `${PRODUCTOS[0].cloth}`){
      sumarCompras.innerHTML +=  `<h3> tela:  ${PRODUCTOS[0].cloth} Total: $ ${mtsCuadrados * PRODUCTOS[0].price}<span><img src="${PRODUCTOS[0].image}" width = 100px></span></h3>`
      inputTotal.value = inputTotal +(mtsCuadrados * PRODUCTOS[0].price)  
    } else if(telaSelect == `${PRODUCTOS[1].cloth}`){
      sumarCompras.innerHTML +=  `<h3> tela:  ${PRODUCTOS[1].cloth} Total: $ ${mtsCuadrados * PRODUCTOS[1].price}<span><img src="${PRODUCTOS[1].image}" width = 100px></span></h3>`
      inputTotal += mtsCuadrados * PRODUCTOS[1].price
    }else{
      sumarCompras.innerHTML +=  `<h3> tela:  ${PRODUCTOS[2].cloth} Total: $ ${mtsCuadrados * PRODUCTOS[2].price}<span><img src="${PRODUCTOS[2].image}" width = 100px></span></h3>`
      inputTotal += mtsCuadrados * PRODUCTOS[2].price
    }
  });
}
