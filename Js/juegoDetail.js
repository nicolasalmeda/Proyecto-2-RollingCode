const contenedor = document.getElementById('contenedor__detail');
const resenas = document.getElementById('resenas');
const btnresenas = document.getElementById('enviarResena')
const btnDeseados = document.getElementById('btnDeseados')

const cargarDetailJuego = () => {
  // Obtener juegos del localStorage
  const juegoJson = localStorage.getItem('juegoDetail');

  // Verificar si hay juegos en el localStorage
  if (!juegoJson) {
    console.error('No hay Juego almacenado.');
    return;
  }

  // Convertir juegos JSON a objetos
  const juego = JSON.parse(juegoJson);

  // Limpiar el contenido existente en el contenedor
  contenedor.innerHTML = '';

  // Agregar nuevo contenido al contenedor
  contenedor.innerHTML = `
    <div class="d-flex flex-column">
      <img src="${juego.imagen}" class="card-img-top" alt="${juego.titulo}">
      <img src="${juego.gif}" class="card-img-top" alt="${juego.titulo}">
      <h2>${juego.titulo}</h2>
      <p>${juego.descripcion}</p>
      <p>Precio: ${juego.precio}</p>
      <p>Requisitos del sistema: ${juego.requisitosDelSistema}</p>
      <p>Desarrollador: ${juego.desarrollador}</p>
    </div>
  `;

  // Iterar sobre las reseñas y agregarlas al contenedor de reseñas
  juego.reseñas.forEach(e => {
    resenas.innerHTML += `
      <p>Nombre: ${e.nombre}</p>
      <p>${e.resena}</p>
    `;
  });
};

const enviarResena = (e) => {
  e.preventDefault();

  const juegoJson = JSON.parse(localStorage.getItem('juegoDetail')) || {};

  // Verificar si hay juego en el localStorage
  if (!juegoJson) {
    console.error('No hay juego almacenado.');
    return;
  }

  const userLog = JSON.parse(localStorage.getItem('logginUser'));
  console.log(userLog._correo);

  if (!userLog || !userLog._correo) {
    return alert('Debe iniciar sesión para dejar una reseña');
  }

  // Obtener valores del formulario
  const nombre = userLog._correo;
  const resenia = document.getElementById('resenia').value;

  // Validar que se haya ingresado la reseña
  if (!nombre || !resenia) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (resenia.length < 3) {
    return alert('Su reseña es muy corta');
  }

  if (resenia.length > 20) {
    return alert('Su reseña es muy extensa');
  }

  const res = { nombre: nombre, resena: resenia };

  // Asegúrate de que las reseñas existan en el objeto juegoJson
  juegoJson.reseñas = juegoJson.reseñas || [];
  juegoJson.reseñas.push(res);

  localStorage.setItem('juegoDetail', JSON.stringify(juegoJson));

  // Actualizar la reseña en el array de juegos
  const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
  const index = juegos.findIndex(juego => juego.id === juegoJson.id);

  if (index !== -1) {
    juegos[index] = juegoJson;
  } else {
    console.error('No se encontró el juego en el array de juegos.');
    return;
  }

  // Actualiza el array de objetos en el localStorage
  localStorage.setItem('juegos', JSON.stringify(juegos));

  // Limpiar el formulario
  document.getElementById('resenia').value = '';
  cargarDetailJuego();
};



const agregarDeseados = () => {
  const juegoJson = JSON.parse(localStorage.getItem('juegoDetail'));
  if (!juegoJson) {
    alert('No hay juego almacenado.');
    return;
  }

  const userLog = JSON.parse(localStorage.getItem('logginUser'));
  if (!userLog || !userLog._correo) {
    return alert('Debe iniciar sesión para guardarlo en su lista de juegos deseados');
  }


  if (!Array.isArray(userLog._lista)) {
    userLog._lista = [];
  }

  userLog._lista.push(juegoJson);

  // Actualiza el objeto de usuario en el localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const index = usuarios.findIndex(usuario => usuario._id === userLog._id);

  if (index !== -1) {
    usuarios[index] = userLog;
  } else {
    alert('No se encontró el usuario en el array de usuarios.');
    return;
  }

  // Actualiza el array de usuarios en el localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem('logginUser', JSON.stringify(userLog));

  alert('Se guardó el juego en su lista de deseados');
};

btnresenas.addEventListener('click', enviarResena)
btnDeseados.addEventListener('click', agregarDeseados)


cargarDetailJuego();
document.addEventListener('DOMContentLoaded', function () {
  cargarDetailJuego();
});