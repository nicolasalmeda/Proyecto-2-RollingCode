import cargaUsuarios from "../Utils/usuariosIniciales.mjs";
import { verificarContrasena } from "../Utils/hash.mjs";
import almacenarJuegosEnLocalStorage from "../Utils/juegosIniciales.mjs";

const btnLogin = document.querySelector('#loginButton')
const btnShowPassword = document.querySelector('#basic-addon1')
const modalLogin = new bootstrap.Modal(document.querySelector("#loginBtn"))
const useropenEyeG = document.getElementById('openEyeG');
const usercloseEyeG = document.getElementById('closeEye');
const userpassword = document.getElementById('password');
const userMail = document.getElementById('emailG');
const registrarse = document.getElementById('registrarse')
const userAdmin = document.getElementById('userAdmin');
const logNone = document.getElementById('logNoneJS');
const closeSessionNone= document.getElementById('closeSessionNoneJS')
const accountNone = document.getElementById('accountNone');
const adminMobile = document.getElementById('adminNone');
const modalNoneSession = document.getElementById('modalNoneSession')
const juegosDeseados = document.getElementById('juegosDeseados')
const juegosDeseadosModal = document.getElementById('juegosDeseadosModal')



usercloseEyeG.style.display = 'none';

userAdmin.style.display = 'none';
adminMobile.style.display = 'none';
closeSessionNone.style.display= 'none';
modalNoneSession.style.display='none'
juegosDeseados.style.display = 'none'
juegosDeseadosModal.style.display = 'none'

const showPass2 = () => {
    if(userpassword.type === 'password'){
        userpassword.type = 'text';
        useropenEyeG.style.display = 'none';
        usercloseEyeG.style.display = 'inline-block'
    }else{
        userpassword.type = 'password';
        useropenEyeG.style.display = 'inline-block';
        usercloseEyeG.style.display = 'none'
    }
}

const log = () => {
    modalLogin.show();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{8,}$/;

    const enteredUserMail = userMail.value;
    const enteredUserpassword = userpassword.value;

    if (!emailRegex.test(enteredUserMail)) {
        alert('Direccion de correo no valida');
        return;
    }

    if (!passwordRegex.test(enteredUserpassword)) {
        alert(`Contraseña no valida, recuerde que debe ingresar al menos: \n-8 caracteres como minimo `);
        return ;
    }

    const cargarUsuariosYLog = async () => {
        const cargarUsuariosPromise = new Promise((resolve) => {
            const usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios')) || [];
            if (usuariosAlmacenados.length > 0) {
                console.log('Usuarios ya cargados:', usuariosAlmacenados);
                resolve(usuariosAlmacenados);
            } else {
                const usuarioNormal = new Usuario(uuid4(), 'nicolas_almeda@hotmail.com', 'colegioprivado', false, []);
                const usuarioAdmin = new Usuario(uuid4(), 'nico101096@gmail.com', 'colegioprivado', true, []);
                const usuarios = [usuarioNormal, usuarioAdmin];
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                console.log('Usuarios cargados:', usuarios);
                resolve(usuarios);
            }
        });

        
        const cargarUsuariosLogPromise = new Promise((resolve) => {
            const usuariosLog = JSON.parse(localStorage.getItem('logginUser')) || [];
            resolve(usuariosLog);
        });

        const [usuarios, usuariosLog] = await Promise.all([cargarUsuariosPromise, cargarUsuariosLogPromise]);

        
        console.log('Usuarios:', usuarios);
        console.log('Usuarios logueados:', usuariosLog);

        
        const validUser = usuarios.find(user => verificarContrasena(enteredUserpassword, user._contrasena, user._sal) === true && user._correo === enteredUserMail);
        
        if (!validUser) {
            alert('Usuario y/o contraseña incorrectos');
            closeSessionNone.style.display = 'inline-block';
            modalNoneSession.style.display = 'none';
            registrarse.style.display = "inline-block"
            accountNone.style.display = 'inline-block'
            modalNoneSession.style.display = 'none'
        } else {
            alert(`Bienvenido ${validUser._correo}`);
            localStorage.setItem('logginUser', JSON.stringify(validUser));
            logNone.style.display= 'none'
            registrarse.style.display = 'none'
            closeSessionNone.style.display = 'inline-block';
            logNone.style.display = 'none';
            modalNoneSession.style.display = 'inline-block'
            registrarse.style.display = 'none'
            accountNone.style.display = 'none';
            juegosDeseados.style.display = 'inline-block'
            juegosDeseadosModal.style.display = 'inline-block'
            

        if(validUser._admin){
            userAdmin.style.display = 'inline-block'
            adminMobile.style.display = 'inline-block';
            userAdmin.style.display = 'inline-block';
        }else{
           
            adminMobile.style.display = 'none';
            userAdmin.style.display = 'none';
        }

            userMail.value = '';
            userpassword.value = '';
            modalLogin.hide();
        }
    }; 
        modalLogin.hide();
    cargarUsuariosYLog();
    
    
};

const cerrarSesion = () => {
    localStorage.removeItem('logginUser');

    // Mostrar los botones de inicio de sesión y registro
    logNone.style.display = 'inline-block';
    registrarse.style.display = 'inline-block';
    juegosDeseados.style.display = 'none'
    juegosDeseadosModal.style.display = 'none'

    // Ocultar el botón y el div de administración
    userAdmin.style.display = 'none';
    adminMobile.style.display = 'none';

    // Ocultar el botón y el div de cerrar sesión
    closeSessionNone.style.display = 'none';
    modalNoneSession.style.display = 'none';
    accountNone.style.display = 'inline-block';
};

const verificarUsuarioLog = () => {
    const usuariosLog = JSON.parse(localStorage.getItem('logginUser')) || [];
    

    if(usuariosLog._correo) {
        logNone.style.display = 'none';
        registrarse.style.display = 'none';
        closeSessionNone.style.display = 'inline-block';
        modalNoneSession.style.display = 'inline-block';
        juegosDeseados.style.display = 'inline-block'
        juegosDeseadosModal.style.display = 'inline-block'
        accountNone.style.display = 'none';
        if(usuariosLog._admin === true) {
            userAdmin.style.display = 'inline-block';
            adminMobile.style.display = 'inline-block';
        }else{
            userAdmin.style.display = 'none';
            adminMobile.style.display = 'none';
        }
    
    }else{
        logNone.style.display = 'inline-block';
        registrarse.style.display = 'inline-block';
        closeSessionNone.style.display = 'none';
        modalNoneSession.style.display = 'none';
        accountNone.style.display = 'inline-block';
        userAdmin.style.display = 'none';
        adminMobile.style.display = 'none';
        juegosDeseados.style.display = 'none'
        juegosDeseadosModal.style.display = 'none'
    }
}


btnLogin.addEventListener('click', log);
btnShowPassword.addEventListener('click', showPass2);
modalNoneSession.addEventListener('click', cerrarSesion)
closeSessionNone.addEventListener('click',cerrarSesion)




cargaUsuarios()
almacenarJuegosEnLocalStorage()
document.addEventListener('DOMContentLoaded', function () {
    verificarUsuarioLog()
});
