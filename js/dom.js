
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
      <a href="./pages/productos.html"" class="card-link click${PRODUCTOS[u].order}">Detalle de Producto</a>
  </div>
  </div> `      
  }; detallePagg()
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
  const cuantasCortinas = document.querySelector(".cuantas")
  const enviarCantidad = document.querySelector(".enviarCantidad")
  enviarCantidad.addEventListener("click", (e) =>{
    e.preventDefault()
    const cortinasCantidad = parseInt(cuantasCortinas.value)
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
  add.innerHTML = add.innerHTML + `<input class = "cuantas" type ="number" placeholder = "cuántas cortinas desea comprar?" value = ""></a>
  <input class="enviarCantidad" type="submit" value= "agregar al carrito"></a>`
  nvoCodigo()
})



//función para completar la otra url



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





//detallePaggA()








