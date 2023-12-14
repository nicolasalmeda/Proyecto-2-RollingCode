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
  <section class="my-5 ">
  <div class="row ">
      <div class="col-md-12 col-lg-6 mb-5 border-end">
         <h2 class="text-center degrade fs-1">${juego.titulo}</h2>
         <h3 class="mt-4 text-center">Descripcion</h3>
         <p class="fs-4 text-md-center text-sm-center">
         ${juego.descripcion}
         </p>
         <h3 class="text-center">Precio</h3>
         <p class="price fs-3 text-center text-white">${juego.precio} <span>$${ (juego.precio + (juego.precio * 0.20)).toFixed(2)  }</span></p>
         <h3 class="text-center mt-3">Categoria</h3>
         <p class="fs-3 text-center h6 colorLetras text-white">${juego.categoria}</p>
         <h3 class="text-center mt-3">Desarrollador</h3>
         <p class="fs-3 text-center h6 colorLetras text-white">${juego.desarrollador}</p>
         <p class="colorLetras mb-lg-5 h2 text-center"> <i class="bi bi-microsoft"></i></i></p>
        
         
      </div>
      <div class="col-md-12 col-lg-6   contenedor-superposicion ">

       <section class="container">
         <article class="row  rounded degradebotones pb-4 ">
           <div class="col-12">
             <img src="${juego.imagen}" class="img-fluid-custom w-100 h-75  mt-4" alt="Imagen del juego">
           </div>
           <div class="col-12">
             <img src="${juego.gif}" class="img-fluid-custom w-100 h-75 " alt="Imagen del juego">
           </div>
           
         </article>
       </section>
         
         
      </div>
  </div>
  </section>
  `;

  // Iterar sobre las reseñas y agregarlas al contenedor de reseñas
  resenas.innerHTML = ''
  juego.reseñas.forEach(e => {
    resenas.innerHTML += ` <div class="card text-light colorGris my-4 text-roboto p-2">
    <div class="card-header">
      <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
    </div>
    <div class="card-body text-center">
      <div class="card-text">
        ${e.resena}
      </div>
    </div>
    <div class="card-footer">
      <i class="bi bi-hand-thumbs-up-fill h2 text-success bg-light"></i> <i class="bi bi-hand-thumbs-down-fill h2 text-danger bg-light"></i>
     <p class="text-end text-dark  h6 colorLetras">Escrito por: ${e.nombre}</p>
    </div>
  </div>
    `;
  });
};

const enviarResena = (e) => {
  e.preventDefault();
  const userLog = JSON.parse(localStorage.getItem('logginUser'));
  

  if (!userLog || !userLog._correo) {
    return alert('Debe iniciar sesión para dejar una reseña');
  }
  
  const juegoJson = JSON.parse(localStorage.getItem('juegoDetail')) || {};

  // Verificar si hay juego en el localStorage
  if (!juegoJson) {
    console.error('No hay juego almacenado.');
    return;
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
    // Actualizar solo las reseñas del juego específico
    juegos[index].reseñas = juegoJson.reseñas;
    localStorage.setItem('juegos', JSON.stringify(juegos));
  } else {
    console.error('No se encontró el juego en el array de juegos.');
    return;
  }
 alert("Reseña añadida exitosamente")
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

  if (userLog._lista.find(juego => juego.id === juegoJson.id)) {
    return alert('El juego ya se encuentra en su lista de deseados');
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