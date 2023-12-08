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
    <div class="card mb-3" style="width: 100%;">
        <img src="${juego.imagen}" class="card-img-top img-fluid w-50" alt="${juego.titulo}">
        <div class="card-body">
          <h5 class="card-title">${juego.titulo}</h5>
        </div>
      </div>`
  })
}

document.addEventListener('DOMContentLoaded', function () {
  cargarJuegosDeseados()
});