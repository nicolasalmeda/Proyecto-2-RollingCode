export default class Usuario {
  constructor(id, correo, contrasena, admin = false, lista,sal) {
    this._id = id;
    this._correo = correo;
    this._contrasena = contrasena;
    this._admin = admin;
    this._lista = lista;
    this._sal = sal
  }

  get id() {
    return this._id;
  }

  get correo() {
    return this._correo;
  }
  set correo(nuevoCorreo) {
    this._correo = nuevoCorreo;
  }

  get contrasena() {
    return this._contrasena;
  }
  set contrasena(nuevaContrasena) {
    this._contrasena = nuevaContrasena;
  }

  get admin() {
    return this._admin;
  }
  set admin(nuevoRol) {
    this._admin = nuevoRol;
  }

  get lista() {
    return this._lista;
  }
  set lista(nuevaLista) {
    this._lista = nuevaLista;
  }

  get sal() {
    return this._lista;
  }
  set sal(nuevaSal) {
    this._lista = nuevaSal;
  }

  toJson() {
    return {
      id: this._id,
      correo: this._correo,
      contrasena: this._contrasena,
      admin: this._admin,
      lista: this._lista,
      sal: this._sal,
    };
  }
}