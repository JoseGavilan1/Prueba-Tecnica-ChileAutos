Rick and Morty Web (Frontend)

Aplicación desarrollada en Angular 19 para visualizar episodios de Rick and Morty, consumiendo un BFF propio.

Funcionalidades Implementadas
- Signals: Gestión de estado reactivo para la lista de episodios, carga y errores.
- Standalone Components: Arquitectura moderna sin módulos.
- Filtros Avanzados: Búsqueda reactiva por nombre de episodio.
- Paginación Dinámica: Navegación entre los resultados de la API.
- Diseño UI/UX: Interfaz atractiva construida con CSS Puro, sin frameworks externos.
- Hidratación Incremental: Configurado con SSR/Hydration para rendimiento óptimo.

Requisitos Previos
- Node.js (v20+).
- Angular CLI v19.

Pasos para Iniciar
1. Navegar a la carpeta del proyecto: `cd RickAndMorty-Web`.
2. Instalar dependencias: `npm install`.
3. Iniciar el servidor de desarrollo: `ng serve`.
4. Abrir en el navegador: `http://localhost:4200`.

Consideraciones de Desarrollo
- Se utilizó "Tipado Estricto" en todas las variables, evitando el uso de `any`.
- Se incluyó un componente especializado para el manejo visual de errores.
