// ========================================
// 🚀 API REST — HABILIDADES DEL CV
// ========================================

// 1. IMPORTAR LIBRERÍAS
const express = require('express');
const cors = require('cors');

// 2. CONFIGURACIÓN INICIAL
const app = express();
const PORT = 3000;

// 3. MIDDLEWARES
app.use(cors());            // Permitir peticiones desde cualquier origen
app.use(express.json());    // Interpretar cuerpos JSON en las peticiones

// 4. RUTA BASE DE PRUEBA
app.get('/', (req, res) => {
  res.send('🚀 API de Habilidades funcionando correctamente');
});

// 5. "BASE DE DATOS" EN MEMORIA
let skills = [
  { id: 1, name: 'HTML', level: 'Avanzado' },
  { id: 2, name: 'CSS', level: 'Avanzado' },
  { id: 3, name: 'JavaScript', level: 'Intermedio' },
  { id: 4, name: 'Angular', level: 'Intermedio' },
  { id: 5, name: 'Python', level: 'Avanzado' }
];

// ========================================
// 🔹 CRUD COMPLETO PARA /skills
// ========================================

// GET /skills — obtener todas las habilidades
app.get('/skills', (req, res) => {
  res.json(skills);
});

// GET /skills/:id — obtener una habilidad por ID
app.get('/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const skill = skills.find(s => s.id === id);

  if (!skill) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  res.json(skill);
});

// POST /skills — crear nueva habilidad
app.post('/skills', (req, res) => {
  const { name, level } = req.body;

  // Validación de campos requeridos
  if (!name || !level) {
    return res.status(422).json({ error: 'Campos "name" y "level" son obligatorios' });
  }

  // Crear nuevo objeto habilidad
  const newSkill = {
    id: Math.max(0, ...skills.map(s => s.id)) + 1,
    name,
    level
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
});

// PATCH /skills/:id — actualizar parcialmente una habilidad
app.patch('/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const skill = skills.find(s => s.id === id);

  if (!skill) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  const { name, level } = req.body;
  if (name !== undefined) skill.name = name;
  if (level !== undefined) skill.level = level;

  res.json(skill);
});

// DELETE /skills/:id — eliminar una habilidad
app.delete('/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = skills.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  const deletedSkill = skills.splice(index, 1)[0];
  res.json(deletedSkill);
});

// ========================================
// 🔸 MANEJO DE RUTAS NO ENCONTRADAS
// ========================================
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// ========================================
// 🔹 INICIAR SERVIDOR
// ========================================
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
  console.log('📋 Endpoints disponibles:');
  console.log('   GET    /skills         → Ver todas las habilidades');
  console.log('   GET    /skills/:id     → Ver una habilidad específica');
  console.log('   POST   /skills         → Crear nueva habilidad');
  console.log('   PATCH  /skills/:id     → Actualizar parcialmente');
  console.log('   DELETE /skills/:id     → Eliminar una habilidad');
});