Prueba Técnica - Ingeniero de Software

Este repositorio contiene la solución a la prueba técnica para el cargo de Ingeniero de Software. La aplicación consiste en un visualizador de episodios de Rick and Morty, implementando una arquitectura de Backend for Frontend (BFF).

Estructura del Proyecto

El proyecto está dividido en dos partes principales para asegurar la separación de responsabilidades:

- /backend: API desarrollada en .NET 8 que actúa como BFF, procesando y filtrando los datos de la API oficial de Rick and Morty.
- /frontend: Aplicación web desarrollada en Angular 19 con las últimas funcionalidades de rendimiento y reactividad.

Tecnologías y Requisitos

Backend
- Framework: .NET 8.0
- Patrones:BFF, Inyección de Dependencias, Middleware de Errores.
- Documentación: Swagger UI.

Frontend
- Framework: Angular 19
- Estado: Signals para manejo de datos reactivos.
- Rendimiento: Hidratación incremental y Standalone Components.
- Estilos: CSS3 Puro.

Instrucciones de Instalación y Ejecución

Para probar la solución completa, sigue estos pasos en orden:

1. Iniciar el Backend
a. Dirígete a la carpeta `backend/`.
b. Ejecuta `dotnet restore` para instalar dependencias.
c. Ejecuta `dotnet run` para iniciar la API.
d. Verifica que la API responda en el puerto indicado (ej. `https://localhost:7xxx/api/episodes`).

2. Iniciar el Frontend
a. Dirígete a la carpeta `frontend/`.
b. Ejecuta `npm install` para descargar los paquetes.
c. Ejecuta `ng serve` para iniciar el servidor de desarrollo.
d. Abre tu navegador en `http://localhost:4200`.
