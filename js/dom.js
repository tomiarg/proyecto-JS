


for(let t = 0;  t < TOBUY.length; t++){
    let carr = document.createElement("div");
    carr.innerHTML = `<h3> tela:  ${TOBUY[t].cloth} Total: $ ${TOBUY[t].price}</h3> `;
    document.body.appendChild(carr);
}



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
  </div> ` 
      
  }
}
function cargarMedidas(){
  cargarCortinas.innerHTML += `<input class = largo type ="number" placeholder = "ingrese el ancho"></a>
  <input class = ancho type ="number" placeholder = "ingrese el largo"></a>
  <input type="submit" value= "agregar al carrito"></a>`
}



tituloAmarillo.addEventListener("mousemove", () => {
    tituloAmarillo.className = "colorAmarillo"
})

window.onscroll = (() => {
  const navScroll = document.querySelector("nav")
  if (window.scrollY > 30) {
    navScroll.className = "navbar navbar-dark bg-dark  fixed-top opacity"
  } else {
    navScroll.className = "navbar navbar-dark bg-dark fixed-top"
  }
});

 cargarProductos()



btnCotizar.addEventListener("click" , function addSelect(){
  let add = document.querySelector("#agregarInputs")
  add.innerHTML = add.innerHTML + `<input class = "cuantas" type ="number" placeholder = "cuántas cortinas desea comprar?" value = ""></a>
  <input class="enviarCantidad" type="submit" value= "agregar al carrito"></a>`

})

//HACER UN BOOLEAN PARA VER SI EL CLICK ES TRUE QUE PASE TODO:
function nvoCodigo(){
  cuantasCortinas = document.querySelector(".cuantas")
  cortinasCantidad = parseInt(cuantasCortinas.value) 
  if(cortinasCantidad != NaN || cortinasCantidad != Null){
    for(let j = 0; j < cortinasCantidad; j++){
      cargarMedidas() 
      enviarCantidad = document.querySelector("enviarCantidad")    
    }
  }  

}
nvoCodigo()








