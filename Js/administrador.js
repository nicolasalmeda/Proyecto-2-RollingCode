const contenedorJuegosAdmin = document.querySelector('#contenedor-juegos-admin');
const modalJuegosAdmin = new bootstrap.Modal(document.querySelector("#gameModal"));
const contendorFormEdit = document.querySelector('#gameModalEdit');
const form = document.querySelector('#gameForm');
const crearJuego = document.querySelector('#crearJuego');
const btnCloseModal = document.querySelector('#cerrarModal');
const modalTitle = document.querySelector('#modalTitle');
const btnSubmitForm = document.querySelector('#btnSubmitForm');

function abrirModal() {
  modalJuegosAdmin.show();
  modalTitle.innerHTML = 'Crear Juego';
  btnSubmitForm.innerHTML = 'Crear Juego';
}

function cerrarModal() {
  modalJuegosAdmin.hide();
}

const traerJuegos = () => {
  const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
  return juegos;
}

const ModalEditarJuego = (id) => {
  
  abrirModal(); 
  modalTitle.innerHTML = 'Editar Juego';
  btnSubmitForm.innerHTML = 'Editar Juego';
  const juegos = traerJuegos();
  const juegoIndex = juegos.findIndex(juego => juego.id === id);
  console.log(juegoIndex);
  if (juegoIndex !== -1) {
    const juego = juegos[juegoIndex];
    const form = document.querySelector('#gameForm');
    
    form.title.value = juego.titulo;
    form.price.value = juego.precio;
    form.image.value = juego.imagen;
    form.gif.value = juego.gif;
    form.description.value = juego.descripcion;
    form.systemRequirements.value = juego.requisitosDelSistema;
    form.developer.value = juego.desarrollador;
    form.category.value = juego.categoria;

    document.getElementById('gameForm').setAttribute('data-edit-id', id);

    juegos[juegoIndex] = juego;

    localStorage.setItem('juegos', JSON.stringify(juegos));
  }else{
    console.log('no se encontro el juego');
  }
  
}

function eliminarJuego(index) {
  const juegos = traerJuegos();
  juegos.splice(index, 1);
  localStorage.setItem('juegos', JSON.stringify(juegos));
  alert('Juego eliminado correctamente');
  cargarJuegosAdmin();
}

const editarCrearJuego = (e) => {
  e.preventDefault();
  const editId = form.getAttribute('data-edit-id');
  const juegos = traerJuegos();
  if (editId) {
    // Si hay un id de edición, entonces estamos editando un juego
    
    
    const id = document.getElementById('gameForm').getAttribute('data-edit-id');
    const juegoIndex = juegos.findIndex(juego => juego.id === id);
    const juego = juegos[juegoIndex];
    const form = document.querySelector('#gameForm');
  
    juego.titulo = form.title.value;
    juego.precio = form.price.value;
    juego.imagen = form.image.value;
    juego.gif = form.gif.value;
    juego.descripcion = form.description.value;
    juego.requisitosDelSistema = form.systemRequirements.value;
    juego.desarrollador = form.developer.value;
    juego.categoria = form.category.value;
    juego.id = id;
  
    juegos[juegoIndex] = juego;
  
    localStorage.setItem('juegos', JSON.stringify(juegos));

    alert('Juego editado correctamente');
    form.title.value = ''
    form.price.value = ''
    form.image.value = ''
    form.gif.value = ''
    form.description.value = ''
    form.systemRequirements.value = ''
    form.developer.value = ''
    form.category.value = ''
  } else {
    // Si no hay id de edición, entonces estamos creando un juego
    const id = uuid4();
    const titulo = form.title.value;
    const precio = form.price.value;
    const imagen = form.image.value;
    const gif = form.gif.value;
    const descripcion = form.description.value;
    const requisitosDelSistema = form.systemRequirements.value;
    const desarrollador = form.developer.value;
    const categoria = form.category.value;

    if (!titulo || !precio || !imagen || !gif || !descripcion || !requisitosDelSistema || !desarrollador || !categoria) {
      return alert('Todos los campos son obligatorios');
    }

    if (isNaN(precio)) {
      return alert('El precio debe ser un número');
    }

    if (precio <= 0) {
      return alert('El precio debe ser mayor a 0');
    }

    if (requisitosDelSistema.length < 10) {
      return alert('Los requisitos del sistema deben tener al menos 10 caracteres');
    }

    if (descripcion.length < 10) {
      return alert('La descripción debe tener al menos 10 caracteres');
    }

    if (desarrollador.length < 3) {
      return alert('El desarrollador debe tener al menos 3 caracteres');
    }

    if (categoria.length < 3) {
      return alert('La categoria debe tener al menos 3 caracteres');
    }

    if (/\d/.test(categoria)) {
      return alert('La categoría no deben contener números');
    }
    

    const juego = {
      id,
      titulo,
      precio,
      imagen,
      gif,
      descripcion,
      requisitosDelSistema,
      desarrollador,
      categoria
    };


    juegos.push(juego);
    localStorage.setItem('juegos', JSON.stringify(juegos));
    alert('Juego creado correctamente');
    cerrarModal();
    form.title.value = ''
    form.price.value = ''
    form.image.value = ''
    form.gif.value = ''
    form.description.value = ''
    form.systemRequirements.value = ''
    form.developer.value = ''
    form.category.value = ''
  }
  
  cargarJuegosAdmin();
}



const cargarJuegosAdmin = () => {
  const juegos = traerJuegos();
  let html = '';

  juegos.forEach((juego, index) => {
    console.log(index);

    html += `<div class="d-flex w-100 flex-wrap mb-3">
    <div class="col-lg-2 col-md-4 col-12 d-flex justify-content-center align-items-center pt-4 px-3">
      <img class="admin-img img-fluid" src=${juego.imagen} alt="Imagen del juego">
    </div>
    <div class="col-lg-6 col-md-4 col-12 d-flex justify-content-center text-center align-items-center pt-4 px-3">
      <h3>${juego.titulo}</h3>
    </div>
    <div class="buttons d-flex col-lg-4 col-md-4 col-12 justify-content-evenly align-items-center pt-4 px-3">
      <button class="delete-button btn btn-danger" onclick='eliminarJuego(${index})' id='${index}'>Eliminar</button>
      <button class="edit-button btn btn-warning" onclick='ModalEditarJuego(id)'  id='${juego.id}'>Editar</button>
    </div>
  </div>`;
    contenedorJuegosAdmin.innerHTML = html;

  });  
}






crearJuego.addEventListener('click', abrirModal);
btnCloseModal.addEventListener('click', cerrarModal);
btnSubmitForm.addEventListener('click', editarCrearJuego);

document.addEventListener('DOMContentLoaded', function () {
  cargarJuegosAdmin();
});
