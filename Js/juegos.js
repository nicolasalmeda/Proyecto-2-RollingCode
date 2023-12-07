const contenedor = document.getElementById('contenedorJuegos')

const renderizarJuegosEnHTML = () => {
  return new Promise((resolve, reject) => {
    // Obtener juegos del localStorage
    const juegosJson = localStorage.getItem('juegos');
    // Verificar si hay juegos en el localStorage
    if (!juegosJson) {
      reject('No hay juegos almacenados en el localStorage.');
      return;
    }

    try {
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

      resolve('Juegos renderizados correctamente.');
    } catch (error) {
      reject('Error al procesar los juegos del localStorage.');
    }
  });
};

function mostrarDetallesDelJuego(id) {
  const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
  

  // Buscar el juego correspondiente por ID
  const juegoDetalle = juegos.find(juego => juego.id === id);

  if (juegoDetalle) {
    // Guardar el juego detalle en el almacenamiento local
    localStorage.setItem('juegoDetail', JSON.stringify(juegoDetalle));

    // Redireccionar a la página de detalles del juego
    // window.location.href = 'aqui va la ruta a la pagina detail';
  } else {
    console.error('Juego no encontrado');
  }
}

renderizarJuegosEnHTML()
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));
