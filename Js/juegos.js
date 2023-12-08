const contenedor = document.getElementById('contenedorJuegos')
const searchbar = document.getElementById('searchbar')
const searchbtn = document.getElementById('searchbtn')
const cancelsearchbtn = document.getElementById('cancelsearchbtn')
const searchbar2 = document.getElementById('searchbar2')
const searchbtn2 = document.getElementById('searchbtn2')
const cancelsearchbtn2 = document.getElementById('cancelsearchbtn2')


cancelsearchbtn.style.display = 'none'
cancelsearchbtn2.style.display = 'none'

const renderizarJuegosEnHTML = () => {
  // Obtener juegos del localStorage
  const juegosJson = localStorage.getItem('juegos');

  // Verificar si hay juegos en el localStorage
  if (!juegosJson) {
    console.error('No hay juegos almacenados en el localStorage.');
    return;
  }

  // Convertir juegos JSON a objetos
  const juegos = JSON.parse(juegosJson);

  // Limpiar el contenido existente en el contenedor
  contenedor.innerHTML = '';

  // Renderizar cada juego en el HTML
  juegos.forEach(juego => {
    const idBoton = `verDetalles-${juego.id}`;
    const nuevoElementoJuego = document.createElement('div');
    nuevoElementoJuego.innerHTML = `
      <div class="card mb-3" style="width: 100%;">
        <img src="${juego.imagen}" class="card-img-top" alt="${juego.titulo}">
        <div class="card-body">
          <h5 class="card-title">${juego.titulo}</h5>
          <a href="#" id='${idBoton}' class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    `;

    // Agregar evento click al botón
    const botonVerDetalles = nuevoElementoJuego.querySelector(`#${idBoton}`);
    botonVerDetalles.addEventListener('click', () => {
      mostrarDetallesDelJuego(juego.id);
    });

    // Agregar el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElementoJuego);
  });

  console.log('Juegos renderizados correctamente.');
};

function mostrarDetallesDelJuego(id) {
  const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
  

  // Buscar el juego correspondiente por ID
  const juegoDetalle = juegos.find(juego => juego.id === id);

  if (juegoDetalle) {
    // Guardar el juego detalle en el almacenamiento local
    localStorage.setItem('juegoDetail', JSON.stringify(juegoDetalle));

    // Redireccionar a la página de detalles del juego
    window.location.href = '../Pages/juegoDetail.html';
  } else {
    console.error('Juego no encontrado');
  }
}

const mostrarSearch = () => {
  const nombre = searchbar.value.toLowerCase()
  const nombre2 = searchbar2.value.toLowerCase()

  const juegos = JSON.parse(localStorage.getItem('juegos')) || []
  let resultados = ''
  if(nombre != ''){
    resultados = juegos.filter(juego => juego.titulo.toLowerCase().includes(nombre)); 
  }else if(nombre2){
    resultados = juegos.filter(juego => juego.titulo.toLowerCase().includes(nombre2)); 
  }else{
    return alert('Debe ingresar el nombre del juego')
  }

  contenedor.innerHTML = '';

  // Renderizar cada juego en el HTML
  resultados.forEach(juego => {
    const idBoton = `verDetalles-${juego.id}`;
    const nuevoElementoJuego = document.createElement('div');
    nuevoElementoJuego.innerHTML = `
      <div class="card mb-3" style="width: 100%;">
        <img src="${juego.imagen}" class="card-img-top" alt="${juego.titulo}">
        <div class="card-body">
          <h5 class="card-title">${juego.titulo}</h5>
          <a href="#" id='${idBoton}' class="btn btn-primary">Ver Detalles</a>
        </div>
      </div>
    `;

    // Agregar evento click al botón
    const botonVerDetalles = nuevoElementoJuego.querySelector(`#${idBoton}`);
    botonVerDetalles.addEventListener('click', () => {
      mostrarDetallesDelJuego(juego.id);
    });

    // Agregar el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElementoJuego);
  });
  searchbtn.style.display = 'none'
  searchbtn2.style.display = 'none'
  cancelsearchbtn.style.display ='inline-block'
  cancelsearchbtn2.style.display ='inline-block'

}

const cancelarBusqueda = () => {
  searchbar.value = ''

  renderizarJuegosEnHTML()

  searchbtn.style.display = 'inline-block'
  searchbtn2.style.display = 'inline-block'
  cancelsearchbtn.style.display ='none'
  cancelsearchbtn2.style.display ='none'

}

searchbtn.addEventListener('click', mostrarSearch)
searchbtn2.addEventListener('click', mostrarSearch)
cancelsearchbtn.addEventListener('click', cancelarBusqueda)
cancelsearchbtn2.addEventListener('click', cancelarBusqueda)


document.addEventListener('DOMContentLoaded', function () {
  renderizarJuegosEnHTML();
});
