📝 TaskFlow - Gestión de Tareas
TaskFlow es una aplicación web interactiva diseñada para la gestión eficiente de tareas, desarrollada como proyecto final del módulo de Programación Avanzada en JavaScript. La aplicación aplica conceptos de Programación Orientada a Objetos (POO), manipulación del DOM, asincronía y consumo de APIs externas.

🚀 Características
Gestión Completa: Permite crear, listar y eliminar tareas de forma dinámica.

Persistencia: Los datos se mantienen al recargar la página gracias a la integración con localStorage.

Asincronía: Simulación de carga de datos y notificaciones temporales mediante setTimeout.

API Externa: Consumo de datos iniciales desde JSONPlaceholder usando fetch y async/await.

Interfaz Reactiva: Actualización inmediata del DOM ante cambios en el estado de las tareas.

🛠️ Tecnologías Utilizadas
JavaScript ES6+: Clases, Arrow Functions, Destructuring, Spread Operator y Template Literals.

HTML5 & CSS3: Estructura semántica y diseño funcional.

Web APIs: Fetch API, LocalStorage y DOM Events.

📘 Estructura del Código
El proyecto sigue una arquitectura modular:

Tarea: Clase que define el modelo de datos de cada actividad.

GestorTareas: Clase controladora que gestiona la lógica de negocio y el almacenamiento.

renderizarTareas(): Función encargada de sincronizar el estado de los objetos con la interfaz visual.

👨‍💻 Autor
Desarrollado por Pablo Silva Navarro.
