// ========================================
// API REST SIMPLE PARA GESTIONAR PROYECTOS
// ========================================

// 1. IMPORTAR LAS LIBRERÍAS QUE NECESITAMOS
const express = require('express'); // Express: framework para crear APIs
const cors = require('cors');       // CORS: permite que otros sitios web usen nuestra API

// 2. CONFIGURAR NUESTRA APLICACIÓN
const app = express();              // Crear la aplicación Express
const PORT = 3001;                  // Puerto donde va a correr nuestro servidor

// 3. CONFIGURAR MIDDLEWARES (funciones que se ejecutan antes de las rutas)
app.use(cors());                    // Permitir peticiones desde cualquier origen
app.use(express.json());            // Convertir JSON del body de las peticiones a objetos JavaScript

// 4. CREAR NUESTRA "BASE DE DATOS" EN MEMORIA
// ⚠️ IMPORTANTE: Esta base de datos se borra cuando apagamos el servidor
let projects = [
  { id: 1, name: 'CV en Angular', stars: 5 },      // Proyecto 1
  { id: 2, name: 'Juego de Memoria', stars: 4 }    // Proyecto 2
];

// ========================================
// DEFINIR LAS RUTAS DE NUESTRA API
// ========================================

// 5. RUTA GET /projects - OBTENER TODOS LOS PROYECTOS
app.get('/projects', (req, res) => {
  // req = request (petición que llega)
  // res = response (respuesta que enviamos)
  res.json(projects); // Enviar todos los proyectos como JSON
});

// 6. RUTA GET /projects/:id - OBTENER UN PROYECTO ESPECÍFICO POR ID
app.get('/projects/:id', (req, res) => {
  const id = Number(req.params.id);           // Convertir el ID de string a número
  const proyecto = projects.find(p => p.id === id); // Buscar el proyecto con ese ID
  
  // Si no encuentra el proyecto, devolver error 404
  if (!proyecto) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }
  
  res.json(proyecto); // Enviar el proyecto encontrado
});

// 7. RUTA POST /projects - CREAR UN NUEVO PROYECTO
app.post('/projects', (req, res) => {
  const { name, stars } = req.body; // Extraer name y stars del body de la petición
  
  // Validar que el nombre sea obligatorio
  if (!name) {
    return res.status(422).json({ error: 'El campo "name" es obligatorio' });
  }
  
  // Generar un nuevo ID (el más alto + 1)
  const nuevoId = Math.max(0, ...projects.map(p => p.id)) + 1;
  
  // Crear el nuevo proyecto
  const nuevoProyecto = { 
    id: nuevoId, 
    name: name, 
    stars: Number(stars) || 0  // Convertir stars a número, si no existe usar 0
  };
  
  projects.push(nuevoProyecto); // Agregar el proyecto a nuestra "base de datos"
  res.status(201).json(nuevoProyecto); // Devolver el proyecto creado con código 201
});

// 8. RUTA PATCH /projects/:id - ACTUALIZAR PARCIALMENTE UN PROYECTO
app.patch('/projects/:id', (req, res) => {
  const id = Number(req.params.id);           // ID del proyecto a actualizar
  const proyecto = projects.find(p => p.id === id); // Buscar el proyecto
  
  // Si no encuentra el proyecto, devolver error 404
  if (!proyecto) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  const { name, stars } = req.body; // Datos nuevos que queremos actualizar
  
  // Actualizar solo los campos que vienen en la petición
  if (name !== undefined) proyecto.name = name;           // Si viene name, actualizarlo
  if (stars !== undefined) proyecto.stars = Number(stars); // Si viene stars, actualizarlo

  res.json(proyecto); // Devolver el proyecto actualizado
});

// 9. RUTA DELETE /projects/:id - ELIMINAR UN PROYECTO
app.delete('/projects/:id', (req, res) => {
  const id = Number(req.params.id);                    // ID del proyecto a eliminar
  const indice = projects.findIndex(p => p.id === id); // Buscar el índice del proyecto
  
  // Si no encuentra el proyecto, devolver error 404
  if (indice === -1) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }
  
  // Eliminar el proyecto del array y guardarlo en una variable
  const proyectoEliminado = projects.splice(indice, 1)[0];
  res.json(proyectoEliminado); // Devolver el proyecto que se eliminó
});

// 10. MANEJAR RUTAS NO ENCONTRADAS (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// 11. INICIAR EL SERVIDOR
app.listen(PORT, () => {
  console.log(`🚀 API escuchando en http://localhost:${PORT}`);
  console.log('📋 Endpoints disponibles:');
  console.log(`   GET    /projects     - Ver todos los proyectos`);
  console.log(`   GET    /projects/:id - Ver un proyecto específico`);
  console.log(`   POST   /projects     - Crear un nuevo proyecto`);
  console.log(`   PATCH  /projects/:id - Actualizar un proyecto`);
  console.log(`   DELETE /projects/:id - Eliminar un proyecto`);
});