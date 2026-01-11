BFF - Rick and Morty API (Backend)

Este es un Backend for Frontend (BFF) robusto construido con ASP.NET Core 8. Su función principal es actuar como un orquestador que consume la API de Rick and Morty, optimizando las respuestas para el cliente Angular.

Arquitectura de Software y Patrones
El proyecto implementa una arquitectura de capas diseñada para el mantenimiento y la escalabilidad:

- Capa de Controladores (Controllers/): Gestiona las peticiones HTTP entrantes. El EpisodesController expone los endpoints para listar y filtrar episodios.

- Capa de Servicios (Services/): Contiene la lógica de negocio y el cliente HTTP para el consumo de la API externa. Implementa Inyección de Dependencias para un acoplamiento débil.

- Capa de Modelos (Models/): Define los DTOs (Data Transfer Objects) para una comunicación estricta con el Frontend, incluyendo la estructura necesaria para el detalle de personajes.

- Capa de Middleware: Incluye el ErrorHandlingMiddleware.cs, el cual centraliza el manejo de excepciones para retornar respuestas estandarizadas y seguras al cliente.


Especificaciones Técnicas
Framework: .NET 8.0 (Target Framework: net8.0).

Documentación: Swagger / OpenAPI mediante Swashbuckle v6.6.2.

Configuración: Gestión dinámica de variables de entorno mediante appsettings.json.

Puerto Local: Configurado por defecto en el puerto 7247 (HTTPS).


Endpoints Disponibles
Documentación Interactiva: https://localhost:7247/swagger/index.html.

Obtener Episodios: GET /api/episodes (Soporta paginación automática).

Filtrar por Nombre: GET /api/episodes?name={valor}.


Requisitos e Instalación
Requisitos Previos: .NET 8 SDK y Visual Studio 2022 o 2026.

Instalación:
1. Clonar el repositorio.

2. Ejecutar dotnet restore en la carpeta BFF - RickandMorty/.

Ejecución:

1. Presionar F5 en Visual Studio o ejecutar dotnet run desde la terminal.