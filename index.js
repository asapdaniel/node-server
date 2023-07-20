const readline = require('readline');

const tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTask() {
  rl.question('Indicador de la tarea: ', (indicator) => {
    rl.question('Descripción de la tarea: ', (description) => {
      const task = {
        indicator,
        description,
        completed: false
      };
      tasks.push(task);
      console.log('Tarea añadida con éxito.');
      showMenu();
    });
  });
}

function deleteTask() {
  rl.question('Índice de la tarea a eliminar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('Índice inválido. No se pudo eliminar la tarea.');
    }
    showMenu();
  });
}

function completeTask() {
  rl.question('Índice de la tarea a completar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Tarea completada con éxito.');
    } else {
      console.log('Índice inválido. No se pudo completar la tarea.');
    }
    showMenu();
  });
}

function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${index}. ${task.indicator} - ${task.description} (${status})`);
  });
  showMenu();
}

function showMenu() {
  console.log('--- Menú ---');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  rl.question('Elije una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        showTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida.');
        showMenu();
    }
  });
}

showMenu();
