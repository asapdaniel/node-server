function crearTarea(tarea) {
  return new Promise((resolve, reject) => {
    // Lógica para crear la tarea
    // ...

    if (tarea) {
      resolve('Tarea creada exitosamente');
    } else {
      reject('Error al crear la tarea');
    }
  });
}

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

