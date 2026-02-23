// 1. Clases POO y ES6+
const Tarea = class {
    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        this.estado = 'pendiente';
        this.fechaCreacion = new Date().toLocaleString();
    }
    completar = () => {
        this.estado = this.estado === 'pendiente' ? 'completada' : 'pendiente';
    };
};

class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    // Métodos de almacenamiento
    guardarEnStorage = () => {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
    };

    cargarDeStorage = () => {
        const datos = localStorage.getItem('tareas');
        if (datos) {
            this.tareas = JSON.parse(datos);
            renderizarTareas();
        }
    };

    agregarTarea = (descripcion) => {
        const nuevaTarea = new Tarea(Date.now(), descripcion);
        this.tareas = [...this.tareas, nuevaTarea]; 
        this.guardarEnStorage(); // Guardar después de agregar 
        return nuevaTarea;
    };

    eliminarTarea = (id) => {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.guardarEnStorage(); // Guardar después de eliminar 
    };
}

const miGestor = new GestorTareas();

// 2. Selección de elementos DOM 
const formulario = document.querySelector('#formulario-tarea');
const input = document.querySelector('#input-tarea');
const listaUI = document.querySelector('#contenedor-tareas');
const alerta = document.querySelector('#notificacion');

// 3. Renderización y Eventos
const renderizarTareas = () => {
    listaUI.innerHTML = ''; 
    miGestor.tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarea.descripcion}</span>
            <button onclick="eliminar(${tarea.id})">Eliminar</button>
        `;
        listaUI.appendChild(li);
    });
};

// Evento Submit Asincrónico 
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const descripcion = input.value.trim();
    if (descripcion) {
        setTimeout(() => {
            miGestor.agregarTarea(descripcion);
            renderizarTareas();
            alerta.style.display = 'block';
            setTimeout(() => { alerta.style.display = 'none'; }, 2000);
        }, 500); 
        input.value = '';
    }
});

window.eliminar = (id) => {
    miGestor.eliminarTarea(id);
    renderizarTareas();
};

// 4. Consumo de API y Carga Inicial
const obtenerTareasExternas = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
        if (!respuesta.ok) throw new Error('Error al conectar con la API');
        const datosApi = await respuesta.json();
        datosApi.forEach(item => miGestor.agregarTarea(item.title));
        renderizarTareas();
    } catch (error) {
        console.error("Hubo un problema:", error.message);
    }
};

// EJECUCIÓN INICIAL: Cargar datos guardados o de la API
miGestor.cargarDeStorage();
if (miGestor.tareas.length === 0) {
    obtenerTareasExternas();
}