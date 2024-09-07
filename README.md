# Proyecto Fullstack con Next.js

Este repositorio contiene dos proyectos dentro de uno, utilizando **Next.js** la razon de incluir dos proyectos en uno es para facilitar la revision de la prueba:
1. **API Backend**: Un conjunto de endpoints RESTful que interactúan con una base de datos MySQL para manejar operaciones CRUD.
2. **Frontend**: Una aplicación web que consume datos de una API externa (https://jsonplaceholder.typicode.com/users) para mostrar y filtrar una lista de usuarios de diferentes maneras.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
- **app/api**: Aquí están definidos los endpoints del API RESTful. Este API interactúa con una base de datos MySQL para gestionar datos de usuarios.
- **app/usuarios**: Aquí se encuentran las páginas del frontend que consumen datos de una API externa y los muestran en la interfaz de usuario.

## Características del Proyecto

### 1. API Backend
- Implementado en **Next.js** usando la carpeta **app/api** para manejar solicitudes HTTP.
- Se conecta a una base de datos **MySQL** mediante el uso de **mysql2** para realizar operaciones CRUD sobre una tabla de usuarios.
- Endpoints principales:
  - `GET /api/usuarios`: Obtener todos los usuarios desde la base de datos.
  - `POST /api/usuarios`: Crear un nuevo usuario.
  - `GET /api/usuarios/{id}`: Obtener un usuario por su ID.
  - `PUT /api/usuarios/{id}`: Actualizar los datos de un usuario.
  - `DELETE /api/usuarios/{id}`: Eliminar un usuario por su ID.

### 2. Frontend
- Consumo de la API externa [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) para obtener una lista de usuarios.
- Las páginas muestran los usuarios en diferentes formatos:
  - Una tabla con opción de filtrado por nombre, email o ciudad.
  - Un formato de tarjetas (grid) para visualización alternativa.
- Implementado en **Next.js**, siguiendo buenas y sencillas prácticas de diseño responsivo.

## Requisitos previos

Antes de desplegar el proyecto, asegúrate de tener lo siguiente instalado:
- **Node.js** (versión 16 o superior)
- **MySQL** (o cualquier otra base de datos compatible con MySQL)
- **Git** (para clonar el repositorio)

## Instalación y configuración

Sigue los pasos a continuación para desplegar el proyecto en tu entorno local:

### 1. Clona el repositorio

```bash
git clone https://github.com/JEstebanH28/my-project.git
cd my-project; 

### 2. Instala las dependencias
npm install

### 3. Configura la base de datos
Crea una base de datos MySQL llamada prueba_tecnica o la que desees.

Ejecuta los scripts SQL (ubicados en la carpeta scripts) para crear las tablas y cargar datos de prueba.

### 4. Configura las variables de entorno
Cambia las variables de conexión a la base de datos MySQL en la sigiente ruta app/lib/db.js

### 5. Inicia el servidor de desarrollo
npm run dev
Esto iniciará el servidor de desarrollo en http://localhost:3000

### 6. 6. Acceso al API
Puedes acceder a los endpoints de la API en las siguientes rutas:

GET http://localhost:3000/api/usuarios
POST http://localhost:3000/api/usuarios
GET http://localhost:3000/api/usuarios/{id}
PUT http://localhost:3000/api/usuarios/{id}
DELETE http://localhost:3000/api/usuarios/{id}

Ejemplo DELETE http://localhost:3000/api/usuarios/5

***Una buena Herramienta para probar el API podria ser postman o como en mi caso una extencion de visual studio code llamada thunder client***

### 7. Acceso al frontend
Accede al frontend a través de las siguientes rutas:
http://localhost:3000 Inicio
http://localhost:3000/usuarios: Ver usuarios en formato de tabla.
http://localhost:3000/usuarios/grid: Ver usuarios en formato grid.