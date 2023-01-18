let carrito = [];
let total = 0;
const contenedorProd = document.querySelector (".contenedor")
const producto = document.querySelector (".card")




fetch("./datos.json")
 .then((res) => res.json())
 .then((stockProductos) => {
     // AGREGO MIS PRODUCTOS AL HTML
    stockProductos.forEach ((prod) => {
      contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-3" src="${prod.img}" alt="Card image cap">
    <div class="card-body text-center">
      <h5 class="card-title">${prod.nombre}</h5>
      <p class="card-text">Precio: $ ${prod.precio}</p>
      <p class="card-text-desc">Descripcion: ${prod.desc}</p>
      <button class="btn-comprar btn-warning" id= "(${prod.id})" type= "button">Comprar Producto</button>
    </div>
  </div>
  `;
  
 
})

//console.log (stockProductos)
 

let agregarBtns = document.querySelectorAll (".btn-comprar")
agregarBtns =  [...agregarBtns]

const modalBody = document.querySelector (".modal-body")



agregarBtns.forEach (btn =>  {
    btn.addEventListener ('click',(e)=> {
        //console.log ('click')


        //BUSCO ID DEL PRODUCTO

        let actualId = (e.target.id)
        console.log (actualId)


        //ENCONTRAR OBJETO ACTUAL 

        
            const item =stockProductos.find((producto) => producto.id === actualId)
            console.log (item)
           
            
            
          
        
        



        // AGREGRAR EL PRODUCTO AL ARREGLO DEL CARRO



    //AGREGO PRODUCTOS AL CARRITO
      
    
    modalBody.innerHTML += `
    <div class="modal-contenedor">
      <div>
      <img class="img-fluid img-carrito" src=""/>
      </div>
      <div>
      <p>Producto: </p>
    <p>Precio: $ </p>
    <p>Cantidad:</p>
    <button class="btn btn-danger"  id= "">Eliminar producto</button>
      </div>
    </div>
    
    `;
          
    
          })
      })

})



