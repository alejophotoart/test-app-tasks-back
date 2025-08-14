# test-app-tasks-back

Este proyecto es una API REST para la gestión de tareas.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB (Mongoose)

## Estructura del proyecto

- `app.js`: Archivo principal de la aplicación.
- `controllers/`: Controladores de la lógica de negocio.
- `db/`: Configuración de la base de datos.
- `models/`: Modelos de datos (Mongoose).
- `routes/`: Rutas de la API.

## Requisitos previos

- Node.js instalado
- MongoDB en local o remoto

## Instalación y uso en local

1. Clona el repositorio:
	```powershell
	git clone https://github.com/alejophotoart/test-app-tasks-back.git
	cd test-app-tasks-back
	```
2. Instala las dependencias:
	```powershell
	npm install
	```
3. Configura la conexión a MongoDB en `db/config.db.js` si es necesario.
4. Inicia el servidor:
	```powershell
	nodemon app
	```

## API en servidor de pruebas

La API backend está desplegada en un servidor real de pruebas en [Render.com](https://render.com). Puedes acceder a la API pública para pruebas en la siguiente URL:

```
https://test-app-tasks-back.onrender.com
```

Consulta los endpoints principales para interactuar con la API.

## Endpoints principales

- `GET /tasks`: Listar tareas
- `POST /tasks`: Crear tarea
- `PUT /tasks/:id`: Actualizar tarea
- `DELETE /tasks/:id`: Eliminar tarea

## Autor

alejophotoart
###API backend para app de tareas