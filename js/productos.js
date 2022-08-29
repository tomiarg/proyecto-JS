window.addEventListener('load', () => {
    
    const prodJSON = JSON.parse(localStorage.getItem("productos"))
    console.log(prodJSON)  
    llenarDetalle()  
 }) 

 function recuperarSession(){
    if(sessionStorage.detalle){
        const prodSession = JSON.parse(sessionStorage.getItem("detalle"))
        console.table(prodSession)
    }
}
recuperarSession()

function llenarDetalle(){
    const detalleJson = JSON.parse(sessionStorage.getItem("detalle"))
    console.table(detalleJson)
    const pageDetalle = document.querySelector("#detalleProducto")
    debugger
    for(let i = 0; i < detalleJson.length; i++)
    if (detalleJson[i].Value === 1){
      pageDetalle.innerHTML += pageDetalle + `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
       <div class="col-md-4">
         <img src=".${prodJSON[i].image}" class="img-fluid rounded-start" alt="...">
       </div>
      <div class="col-md-8">
        <div class="card-body">
           <h5 class="card-title">${prodJSON[i].cloth}</h5>
           <p class="card-text">${prodJSON[i].compotition}.</p>
           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        </div>
        </div>
  
        </div>`
    }
   }
  