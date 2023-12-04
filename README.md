# Proyecto JavaScrip Team 1 - RollingCode
En este proyecto los alumnos en forma grupal se dividirán las tareas necesarias para diseñar un sitio que
ofrezca un catálogo de juegos para la venta.
El alcance de este proyecto se centra en realizar todos los pasos del CRUD y mostrará los juegos en forma
de un catálogo, también deberá realizarse el login del proyecto, se considera que solo el usuario
administrador trabajar agregar, editar y borrar juegos, mientras que los usuarios visitantes solo podrán ver
las publicaciones. Además hay requerimientos optativos como el registro de usuarios y poder armar una
lista de productos deseados por un usuario.
## Requerimientos  
### ESTRUCTURA GENERAL DEL SITIO:
El diseño del sitio será decidido por cada grupo, pero deberá ser completamente
responsive. Consideramos que al menos deben desarrollar la siguientes páginas:
<br>
● Página Principal: Esta página mostrará el catálogo de juegos previamente cargados desde la página
de administración. Además debe contener un filtro que nos permita buscar un jeugo por su
nombre.
● Página de administración: En la página de administración se debe mostrar una tabla con los
juegos cargados, además de las opciones necesarias para agregar, leer, borrar y editar los
mismos. (solo los usuarios administradores deben poder ver esta página)
● Página de detalle: al seleccionar un juego, veremos una página con más detalles del mismo.
<br>
El jeugo debe tener como mínimo las siguientes propiedades:
○ Código único.
○ Nombre
○ precio
○ Categoría (sandbox, simulación, fabricación, construcción, aventura etc.)
○ Imagen (álbum o alguna imagen decorativa del juego) cargada con url
○ descripción
○ requisitos del sistema
○ Desarrollador
○ Reseñas: positivas o negativas (esta propiedad se debe calcular considerando la cantidad de reseñas
positivas y negativas votadas por los usuarios)
○ NOTA: Pueden agregar más propiedades si lo consideran necesario.
● Página acerca de nosotros: Esta página contendrá información del equipo que desarrolló esta
web, alguna frase que hable del equipo y debajo una galería donde se visualice una foto o avatar
de cada miembro del equipo, seguido por el nombre de cada uno.
● Página error 404: Diseñar una web con el error 404, esta página deberá ser llamada desde todos
los botones o link de nuestro sitio que no tengan una funcionalidad establecida.
● Login: diseñar una página o ventana modal desde donde un usuario administrador deberá poder
ingresar sesión. (Este mismo login servirá para usuarios registrados en caso de realizar el
requerimiento optativo)
REQUERIMIENTOS OPTATIVOS
Agregar las siguientes páginas o funcionalidades a nuestro sitio:
<br>

REGISTRO
Página de registro o ventana modal, donde se solicitarán por lo menos los siguientes campos: Nombre,
correo electrónico (el cual servirá para ingresar al sitio) y contraseña. Pueden agregar más campos si lo
consideran necesarios. Si se desarrolla el registro, también se debe agregar en la página de administración
una tabla donde se pueda ver los usuarios registrados en el sitio y un botón para eliminar un usuario.
Nota: Tener en cuenta que este sitio contará con dos perfiles de usuario, un usuario será el administrador
y ya puede estar cargado en el sistema, el resto de los usuarios registrados usando la página o formulario
de registro serán considerados usuarios invitados o con rol normal (No administradores).
<br>

AGREGAR RESEÑA DE JUEGO
Una vez que nos logueamos en la web como un usuario invitado, podemos seleccionar un producto y
cargar una reseña sobre el mismo, la reseña será una descripción y un voto positivo o negativo sobre el
juego. Solo se debe poder cargar una reseña por juego.
LISTA DE JUEGOS DESEADOS
Una vez que nos logueamos en la web como un usuario invitado, podemos seleccionar los juegos que nos
gusten e ir armando una lista propia de cada usuario, esta lista debe ser visible en cualquier momento por
el usuario, el cual además podría eliminar un producto seleccionado..
##Evaluación
En este proyecto se evaluará el uso de las siguientes herramientas y conceptos:
● Panel de trello grupal (elegir un scrum master por equipo y seleccionar un nombre de
equipo), la organización del proyecto se debe plasmar en el panel de trello.
● Sitio completamente responsive.
● Estructura del proyecto y código limpio.
● Conceptos de JavaScript, validación de formularios con html y Javascript, uso de localstorage,
objetos, clases etc.
● Archivo readme con la descripción del proyecto.
● Uso de Github para trabajar en forma colaborativa con el grupo.
● Subir el sitio a un servidor ej: netlify o githubPages

## Página guía: 
ubisoftconnect.com

## Miembros 
Ignacio Gabriel	Sanchez
Mariano	Arias
Nicolás Ariel	Lagoria Almeda
Solana Rosales	Malagoli
Tiago Bautista	Diaz
Valentino	Villalba
