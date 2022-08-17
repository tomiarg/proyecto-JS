/*let titulo = document.getElementById("titulo")

console.log(titulo.innerText)

titulo.innerText = "Hola Wacho"

console.log (titulo.innerText)

let container = document.getElementById("contenedor")

container.innerHTML = '<ul><li><a href="index.html" class="dropdown-item" type="button">inicio</a></li><li><a href="quienes.html" class="dropdown-item" type="button">quiénes somos</a></li><li><a href="productos.html" class="dropdown-item" type="button">produtos</a></li><li><a href="contacto.html"class="dropdown-item" type="button">contacto</a></li><li class="dropdown">'*/


for(let t = 0;  t < TOBUY.length; t++){
    let carr = document.createElement("div");
    carr.innerHTML = `<h3> tela:  ${TOBUY[t].cloth} Total: $ ${TOBUY[t].price}</h3> `;
    document.body.appendChild(carr);
}

function cargarProductos(){
  for(let u=0; u < PRODUCTOS.length; u ++){
    subirProductos.innerHTML +=   `<li>${PRODUCTOS[u].cloth}</li> ` 
      
  }
}


tituloAmarillo.addEventListener("mousemove", () => {
    tituloAmarillo.className = "colorAmarillo"
})

window.onscroll = (() => {
  debugger
  const navScroll = document.querySelector("nav")
  if (window.scrollY > 30) {
    navScroll.className = "opacity"
  } else {
    navScroll.className = ""
  }
});

cargarProductos()

