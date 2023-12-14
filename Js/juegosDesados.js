const contenedor = document.getElementById('contenedor')
const nombre = document.getElementById('nombreLD')

const cargarJuegosDeseados = () => {
  const lista = JSON.parse(localStorage.getItem('logginUser')) || []

  if(lista._correo){
    console.log('se cargo correctamente')
  }else{
    return  alert('Usted debe loguear para ver su lista de deseados')
  }

  nombre.innerHTML = `${lista._correo}`

  contenedor.innerHTML = ''
  lista._lista.map(juego => {
    contenedor.innerHTML += `
    <div class="col-md-6 col-lg-3 mb-4">
    <div class="card text-center bg-black py-3 h-100 card-top-red">
        <div class="img-container-product">
            <div class="icons-container">
                <span><i class="fa-solid fa-heart " aria-hidden="true"></i></span>
                <span><i class="fa-solid fa-cart-shopping " aria-hidden="true"></i></span>
            </div>
            <img src="${juego.imagen}" class="card-img-top" alt="imagen de juego">
        </div>
        <div class="info-container-product">
        
            <h3 class="card-title text-light tituloJuego">${juego.titulo}</h3>
          <p class="card-text colorLetras h4 tamañoPalabras">${juego.descripcion}</p>
          <div class="mb-md-5 mb-lg-5">
            <p class="colorLetras h6">Categoria: ${juego.categoria}</p>
            <p class="colorLetras h6">Desarrolador: ${juego.desarrollador}</p>
            <p class="colorLetras mb-lg-5 h6"> <i class="bi bi-microsoft"></i></i></p>
          </div>
            <p class="price fs-3">$${juego.precio} <span>$${ (juego.precio-(juego.precio * 0.20)).toFixed(2)  }</span></p>
            <div class="mt-2">
                <a href="../Pages/error404.html" class="btn-customized">Ver más</a>
            </div>
        </div>
    </div>
</div>
    `
  })
}

document.addEventListener('DOMContentLoaded', function () {
  cargarJuegosDeseados()
});