import Juego from './classJuegos.mjs';


const juegosData = [
  {
    id: uuid4(),
    titulo: 'Assassin\'s Creed Valhalla',
    categoria: 'Aventura',
    precio: 59.99,
    imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png',
    descripcion: 'Descripción del juego...',
    requisitosDelSistema: 'Requisitos del sistema...',
    desarrollador: 'Ubisoft',
    reseñas: ['Gran juego', 'Impresionante']
  },
  {
    id: uuid4(),
    titulo: 'Far Cry 6',
    categoria: 'Shooter',
    precio: 49.99,
    imagen: 'https://image.api.playstation.com/vulcan/img/rnd/202106/1514/fkPaEpz998Uu7QaofSj1VIhr.png',
    descripcion: 'Descripción del juego...',
    requisitosDelSistema: 'Requisitos del sistema...',
    desarrollador: 'Ubisoft',
    reseñas: ['Excelente', 'Adictivo']
  },
];


const almacenarJuegosEnLocalStorage = () => {
  
  const juegos = juegosData.map(juegoData => new Juego(...Object.values(juegoData)));
  const juegosJson = juegos.map(juego => juego.toJson());

  localStorage.setItem('juegos', JSON.stringify(juegosJson));
};

export default almacenarJuegosEnLocalStorage;