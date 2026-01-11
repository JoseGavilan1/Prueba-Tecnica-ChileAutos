Rick and Morty Web - Frontend
Esta es una aplicación de alto rendimiento desarrollada en Angular 21 para la exploración interactiva de episodios de la serie Rick and Morty. El proyecto se conecta a un BFF propio para garantizar una carga de datos optimizada.

Valor Añadido y UX
Atendiendo al feedback de la primera revisión técnica, se implementaron las siguientes mejoras de experiencia de usuario:

Detalle Dinámico de Personajes: Se desarrolló un componente que permite visualizar los nombres reales de los personajes participantes en cada episodio mediante un componente de carga asíncrona.

Accesibilidad Visual: Se optimizó el contraste del componente de gestión de errores, utilizando texto oscuro sobre fondo claro para garantizar la legibilidad de los mensajes.

Navegación Intuitiva: Implementación de paginación reactiva y búsqueda en tiempo real mediante el filtrado del BFF.

Arquitectura y Tecnologías
Framework: Angular 21.0.0 (la versión más reciente del ecosistema).

Gestión de Estado: Uso de Signals para una reactividad granular y eficiente, evitando ciclos de detección de cambios innecesarios.

Componentización: Arquitectura basada en Standalone Components, eliminando la necesidad de módulos pesados y mejorando la carga incremental.

Estilos: Diseño 100% personalizado mediante CSS3 Puro, sin dependencias de frameworks externos para demostrar el dominio del diseño web.

Rendimiento: Configurado con SSR (Server-Side Rendering) y Hydration para una carga inicial ultra rápida.

Especificaciones Técnicas
Angular CLI: v21.0.5.
Node.js: v20.17.19 o superior.
Gestor de paquetes: npm 11.6.2.
TypeScript: v5.9.2.

Comunicación con el BFF
El frontend está configurado para consumir los servicios del backend en la siguiente ruta base:

BFF URL: https://localhost:7247/api/episodes.

Instalación y Ejecución
1. Instalar dependencias:
- npm install

2. Iniciar servidor de desarrollo:
- ng serve

3. Acceso: 
- Abrir el navegador en http://localhost:4200.
