import cargaUsuarios from "../Utils/usuariosIniciales.mjs";

const nombreInput=document.getElementById("recipient-name");
const apellidoInput=document.getElementById("recipient-apellido");
const emailInput=document.getElementById("emailBM");
const useropenEye = document.getElementById('openEye2');
const usercloseEye = document.getElementById('closeEye2');
const contraseñaInput=document.getElementById("Password");
const form= document.getElementById("miFormulario");
const parrafo=document.getElementById("btnreg");
const mensajeRegistro= document.getElementById('mensajeRegistro');
const basicaddon1 = document.getElementById('basic-addon1');
const formula = document.getElementById('btnreg')
usercloseEye.style.display = 'none';

//efecto visibilidad de contraseña
const showPass = () => {
    if(contraseñaInput.type === 'password'){
      contraseñaInput.type = 'text';
        useropenEye.style.display = 'none';
        usercloseEye.style.display = 'inline-block'
    }else{
      contraseñaInput.type = 'password';
        useropenEye.style.display = 'inline-block';
        usercloseEye.style.display = 'none'
    }
}
//validacion de formulario//
const formulario = (e) =>{ 
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const corre= emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{8,}$/;


    if (nombre.length< 3 || apellido.length<3) {
        alert('El nombre y el apellido deben tener al menos 3 caracteres.');//condicion para que no se pueda agregar un nombre menor a 3 carcateres//
      }
      if(!emailRegex.test(corre)){
        console.log(corre.value);
        alert('Direccion de correo no valida');
    }
    
    if(!passwordRegex.test(contraseñaInput.value)){
        alert('Contraseña no valida, recuerde que debe ingresar al menos:8 caracteres como minimo');

    } 
    const correo=emailInput.value;
    const con=contraseñaInput.value;
    const user=({  _correo: corre,_contrasena: con,})
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica si el correo ya está registrado
    const isUserRegistered = usuariosRegistrados.find(usuario => usuario._correo === correo);
    if (isUserRegistered) {
        alert('El correo ya está registrado');
         form.reset(); // Resetea el formulario;
    }

cargaUsuarios(user)
};

// Función para resetear el formulario
function resetForm() {
    form.reset();
}

basicaddon1.addEventListener('click',showPass)
formula.addEventListener('click',formulario)
