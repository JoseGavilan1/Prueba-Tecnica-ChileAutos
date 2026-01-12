Prueba Técnica - Ingeniero de Software

Este repositorio contiene la solución a la prueba técnica para el cargo de Ingeniero de Software. La aplicación consiste en un visualizador de episodios de Rick and Morty, implementando una arquitectura de Backend for Frontend (BFF).

Estructura del Proyecto

El proyecto está dividido en dos partes principales para asegurar la separación de responsabilidades:

- /BFF - RickandMorty: API desarrollada en .NET 8 que actúa como BFF, procesando y filtrando los datos de la API oficial de Rick and Morty.
- /RickAndMorty: Aplicación web desarrollada en Angular 21 con las últimas funcionalidades de rendimiento y reactividad.

Tecnologías y Requisitos

Backend
- ASP.NET Core 8.0 (Target Framework: `net8.0`).
- Patrones:BFF, Inyección de Dependencias, Middleware de Errores.
- Documentación: Swashbuckle / Swagger v6.6.2.

El Backend está configurado para ejecutarse en el puerto 7247. Una vez iniciado el proyecto, puedes acceder a:

Documentación Interactiva (Swagger): https://localhost:7247/swagger/index.html (https://localhost:7247/swagger/index.html)  

Ideal para probar los endpoints y ver la estructura de las respuestas.


Endpoint Principal (JSON): https://localhost:7247/api/episodes (https://localhost:7247/api/episodes)  

Retorna la lista paginada de episodios consumida por el Frontend.

---------------------------------------------------------------------------------------------

Frontend
- Framework: Angular 21.0.0
- Estado: Signals para manejo de datos reactivos.
- Rendimiento: Hidratación incremental y Standalone Components.
- Estilos: CSS3 Puro.

Instrucciones de Instalación y Ejecución

Para probar la solución completa, sigue estos pasos en orden:

1. Iniciar el Backend
a. Dirígete a la carpeta `BFF - RickandMorty/`.
b. Ejecuta `dotnet restore` para instalar dependencias.
c. Ejecuta `dotnet run` para iniciar la API.
d. Verifica que la API responda en el puerto indicado (ej. `https://localhost:7247/api/episodes`).

1. Iniciar el Frontend
a. Dirígete a la carpeta `RickAndMorty/`.
b. Ejecuta `npm install` para descargar los paquetes.
c. Ejecuta `ng serve` para iniciar el servidor de desarrollo.
d. Abre tu navegador en `http://localhost:4200`.
