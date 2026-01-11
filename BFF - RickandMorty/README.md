BFF - Rick and Morty API (Backend)

Este es el Backend for Frontend (BFF) construido con ASP.NET Core 8 para la prueba técnica.

Características Técnicas
- Arquitectura de Capas: Separación clara entre Controladores, Servicios, Modelos y Middlewares.
- Principios SOLID: Implementación de Inyección de Dependencias para el consumo de la API externa.
- Manejo Global de Errores: Middleware personalizado para capturar excepciones y retornar respuestas estandarizadas.
- Configuración Dinámica: Uso de `appsettings.json` para evitar el hardcoding de URLs.

Requisitos Previos
- .NET 8 SDK instalado.
- Visual Studio 2026.

Pasos para Iniciar
1. Abrir la solución `BFF - RickandMorty.sln`.
2. Restaurar paquetes NuGet.
3. Presionar F5 o ejecutar `dotnet run`.
4. La API estará disponible en `https://localhost:xxxx/swagger`.