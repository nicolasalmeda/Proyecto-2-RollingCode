export default class Juego {
  constructor(id, titulo, categoria, precio, imagen, gif, descripcion, requisitosDelSistema, desarrollador, reseñas) {
    this._id = id;
    this._titulo = titulo;
    this._categoria = categoria;
    this._precio = precio;
    this._imagen = imagen;
    this._gif = gif
    this._descripcion = descripcion;
    this._requisitosDelSistema = requisitosDelSistema;
    this._desarrollador = desarrollador;
    this._reseñas = reseñas;
  }


  get id() {
    return this._id;
  }

  get titulo() {
    return this._titulo;
  }

  get categoria() {
    return this._categoria;
  }

  get precio() {
    return this._precio;
  }

  get imagen() {
    return this._imagen;
  }

  get gif() {
    return this._gif;
  }

  get descripcion() {
    return this._descripcion;
  }

  get requisitosDelSistema() {
    return this._requisitosDelSistema;
  }

  get desarrollador() {
    return this._desarrollador;
  }

  get reseñas() {
    return this._reseñas;
  }

  set id(newId) {
    this._id = newId;
  }

  set titulo(newTitulo) {
    this._titulo = newTitulo;
  }

  set categoria(newCategoria) {
    this._categoria = newCategoria;
  }

  set precio(newPrecio) {
    this._precio = newPrecio;
  }

  set imagen(newImagen) {
    this._imagen = newImagen;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

  set requisitosDelSistema(newRequisitos) {
    this._requisitosDelSistema = newRequisitos;
  }

  set desarrollador(newDesarrollador) {
    this._desarrollador = newDesarrollador;
  }

  set reseñas(newReseñas) {
    this._reseñas = newReseñas;
  }

  toJson() {
    return {
      id: this._id,
      titulo: this._titulo,
      categoria: this._categoria,
      precio: this._precio,
      imagen: this._imagen,
      gif: this._gif,
      descripcion: this._descripcion,
      requisitosDelSistema: this._requisitosDelSistema,
      desarrollador: this._desarrollador,
      reseñas: this._reseñas,
    };
  }
}