const express = require('express')
const app = express()

const tareas = [
  { id: 1, descripcion: 'Comprar leche', completado: false },
  { id: 2, descripcion: 'Hacer ejercicio', completado: true },
  { id: 3, descripcion: 'Estudiar para el examen', completado: false }
]

app.get('/tareas', (req, res) => {
  res.json(tareas)
})

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000')
})


function eliminarTarea(idTarea) {
  return new Promise((resolve, reject) => {
    // Lógica para eliminar la tarea
    // ...

    if (idTarea) {
      resolve('Tarea eliminada exitosamente');
    } else {
      reject('Error al eliminar la tarea');
    }
  });
}

function completarTarea(idTarea) {
  return new Promise((resolve, reject) => {
    // Lógica para completar la tarea
    // ...

    if (idTarea) {
      resolve('Tarea completada exitosamente');
    } else {
      reject('Error al completar la tarea');
    }
  });
}

