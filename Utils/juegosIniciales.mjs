import Juego from './classJuegos.mjs';


const juegosData = [
  {
    id:"38e29dd8-9d01-46cf-abbd-6c974fb0de06",
    titulo: 'Assassin\'s Creed Valhalla',
    categoria: 'Aventura',
    precio: 59.99,
    imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png',
    gif:'https://i.pinimg.com/originals/f5/90/91/f590917ea1b36ac067ecb869f7d48031.gif' ,
    descripcion: 'Descripción del juego...',
    requisitosDelSistema: 'Requisitos del sistema...',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'user1',resena: 'Excelente'}, {nombre:'user2', resena: 'Adictivo'}]
  },
  {
    id:"52d29dd8-8d01-47cf-abdd-6c974gb0de05",
    titulo: 'Far Cry 6',
    categoria: 'Shooter',
    precio: 49.99,
    imagen: 'https://image.api.playstation.com/vulcan/img/rnd/202106/1514/fkPaEpz998Uu7QaofSj1VIhr.png',
    gif:'https://media.tenor.com/z4wZS-FrorgAAAAC/giancarlo-far-cry.gif' ,
    descripcion: 'Descripción del juego...',
    requisitosDelSistema: 'Requisitos del sistema...',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'user1',resena: 'Excelente'}, {nombre:'user2', resena: 'Adictivo'}]
  },
  {
    id:"62d29dd8-9d01-47cf-abdd-6c974gb0de10",
    titulo: 'Assasins Creed Mirage',
    categoria: 'Aventura',
    precio: 80.00,
    imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/phwiQjbJddEg979YucUoP3Vr.png',
    gif:'https://media.tenor.com/oUNXiwlm60wAAAAC/ac-mirage-assassins-creed-mirage.gif' ,
    descripcion: 'Descripción del juego...',
    requisitosDelSistema: 'Requisitos del sistema...',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'user1',resena: 'Excelente'}, {nombre:'user2', resena: 'Adictivo'}]
  },
  {
    id:"90d29dd5-2d01-37cf-abdd-6c973gb0de11",
    titulo: 'Prince of Persia',
    categoria: 'Aventura',
    precio: 100.00,
    imagen: 'https://i.ytimg.com/vi/Bn1nNf-uuy4/maxresdefault.jpg',
    gif:'https://media.tenor.com/1Eorv0sx-doAAAAC/sargon-fight.gif' ,
    descripcion: 'Descripción del juego...',
    requisitosDelSistema: 'Requisitos del sistema...',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'user1',resena: 'Excelente'}, {nombre:'user2', resena: 'Adictivo'}]
  },

];


const almacenarJuegosEnLocalStorage = () => {
  
  const juegos = juegosData.map(juegoData => new Juego(...Object.values(juegoData)));
  const juegosJson = juegos.map(juego => juego.toJson());

  localStorage.setItem('juegos', JSON.stringify(juegosJson));
};



export default almacenarJuegosEnLocalStorage;