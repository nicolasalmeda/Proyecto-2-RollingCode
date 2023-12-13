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

      <div class="card__index">
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
             
                  <a href="./Pages/juegoDetail.html" id='${idBoton}' class="btn-customized">Ver Detalles</a>
              </div>
          </div>
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
