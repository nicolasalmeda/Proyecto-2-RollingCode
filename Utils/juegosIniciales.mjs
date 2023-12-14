import Juego from './classJuegos.mjs';


const juegosData = [
  {
    id:"38e29dd8-9d01-46cf-abbd-6c974fb0de06",
    titulo: 'Assassin Creed Valhalla',
    categoria: 'Aventura',
    precio: 59.99,
    imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png',
    gif:'https://i.pinimg.com/originals/f5/90/91/f590917ea1b36ac067ecb869f7d48031.gif' ,
    descripcion: 'Assassin Creed Valhalla es un videojuego de rol de acción desarrollado por Ubisoft Montreal y publicado por Ubisoft.',
    requisitosDelSistema: 'Tarjeta de video: AMD R9 380 - 4 GB / GeForce GTX 960 4 GB.',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'anabela@gmail.com',resena: 'Excelente'}, {nombre:'franco@gmail.com', resena: 'Adictivo'}]
  },
  {
    id:"52d29dd8-8d01-47cf-abdd-6c974gb0de05",
    titulo: 'Far Cry 6',
    categoria: 'Shooter',
    precio: 49.99,
    imagen: 'https://image.api.playstation.com/vulcan/img/rnd/202106/1514/fkPaEpz998Uu7QaofSj1VIhr.png',
    gif:'https://media.tenor.com/z4wZS-FrorgAAAAC/giancarlo-far-cry.gif' ,
    descripcion: 'Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft.',
    requisitosDelSistema: 'Procesador AMD Ryzen 5 3600X a 3,8 GHz o Intel Core i7-7700 a 3,6 GHz (requiere soporte de AVX, AVX2 y SSE 4.2)',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'valentino@gmail.com',resena: 'Excelente'}, {nombre:'romina@gmail.com', resena: 'Adictivo'}]
  },
  {
    id:"62d29dd8-9d01-47cf-abdd-6c974gb0de10",
    titulo: 'Assasins Creed Mirage',
    categoria: 'Aventura',
    precio: 80.00,
    imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/phwiQjbJddEg979YucUoP3Vr.png',
    gif:'https://media.tenor.com/oUNXiwlm60wAAAAC/ac-mirage-assassins-creed-mirage.gif' ,
    descripcion: 'Assassin Creed Mirage es un videojuego de acción y aventura de mundo abierto y sigilo en tercera persona desarrollado por Ubisoft Bordeaux y publicado por Ubisoft.',
    requisitosDelSistema: '16 gb ram - 2 gb video - 1 tb disco',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'sol@gmail.com',resena: 'Excelente'}, {nombre:'gimenez@gmail.com', resena: 'Adictivo'}]
  },
  {
    id:"90d29dd5-2d01-37cf-abdd-6c973gb0de11",
    titulo: 'Prince of Persia',
    categoria: 'Aventura',
    precio: 100.00,
    imagen: 'https://i.ytimg.com/vi/Bn1nNf-uuy4/maxresdefault.jpg',
    gif:'https://media.tenor.com/1Eorv0sx-doAAAAC/sargon-fight.gif' ,
    descripcion: 'Prince of Persia es una serie de videojuegos de plataformas iniciada en 1989. Su éxito se debe a la notable fluidez de animación lograda en el protagonista, no vista hasta entonces.',
    requisitosDelSistema: 'Desconocidos',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'corazon@gmail.com',resena: 'Excelente'}, {nombre:'tramonta@gmail.com', resena: 'Adictivo'}]
  },
  {
    id:"40s29dd8-5e01-46df-acbd-6c974fb0de55",
    titulo: 'Assassin Creed Origin',
    categoria: 'Aventura',
    precio: 59.99,
    imagen: 'https://image.api.playstation.com/cdn/UP0001/CUSA05855_00/8V1jOJ0Nm8UbF6bsZOGIwFjAmAODJ0pG.png',
    gif:'https://i.pinimg.com/originals/01/69/68/01696860acc4a4671906b9da0cea74c5.gif' ,
    descripcion: 'Assassin Creed Valhalla es un videojuego de rol de acción desarrollado por Ubisoft Montreal y publicado por Ubisoft.',
    requisitosDelSistema: 'Tarjeta de video: AMD R9 380 - 4 GB / GeForce GTX 960 4 GB.',
    desarrollador: 'Ubisoft',
    reseñas: [{nombre:'anabela@gmail.com',resena: 'Excelente'}, {nombre:'franco@gmail.com', resena: 'Adictivo'}]
  },

];


const almacenarJuegosEnLocalStorage = () => {
  
  const juegos = juegosData.map(juegoData => new Juego(...Object.values(juegoData)));
  const juegosJson = juegos.map(juego => juego.toJson());

  localStorage.setItem('juegos', JSON.stringify(juegosJson));
};



export default almacenarJuegosEnLocalStorage;