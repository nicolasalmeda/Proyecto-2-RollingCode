import Usuario from "./classUsuario.mjs";
import { generarSal, hashearContrasena } from './hash.mjs';

const cargaUsuarios = (user) => {
  const usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios')) || [];

  if(user){
    const salUsuario = generarSal()
    const usuario = new Usuario(uuid4(), user._correo, hashearContrasena(user._contrasena, salUsuario),false,[], salUsuario)
    usuariosAlmacenados.push(usuario)
    localStorage.setItem('usuarios',JSON.stringify(usuariosAlmacenados))
    return alert('Usuario cargado existosamente')
  }

  if (usuariosAlmacenados.length > 1) {
    console.log('Usuarios ya cargados:', usuariosAlmacenados);
    return;
  }else{
    const salUsuarioNormal = generarSal()
    const salUsuarioAdmin = generarSal()
    const usuarioNormal = new Usuario(uuid4(), 'user@gmail.com', hashearContrasena('user12345',salUsuarioNormal), false, [], salUsuarioNormal);
    const usuarioAdmin = new Usuario(uuid4(), 'admin@gmail.com', hashearContrasena('admin12345',salUsuarioAdmin), true, [], salUsuarioAdmin);
    const usuarios = [usuarioNormal, usuarioAdmin];
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log('Usuarios cargados:', usuarios);
  }



}

export default cargaUsuarios;