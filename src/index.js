const data = require("./data");
const input = require("./input");
const logic = require("./logic");
const output = require("./output");

// Obtiene el objeto de datos
let datos = data.datos;

/**
 * Función principal del programa
 */
const iniciarPrograma = async () => {
  // Carga los datos iniciales
  datos = await data.cargarBandas();

  let opcion = 0;
  while (opcion !== input.SALIR) {
    // Muestra el encabezado de la aplicación
    await output.mostrarEncabezado();

    // Muestra el menú principal y retorna la opción seleccionada
    const menu = await input.pedirOpcion();

    // Verifica la selección del usuario
    switch (menu.opcion) {
      case input.AGREGAR:
        // Pide los datos de la banda y los guarda
        datos = await logic.opcionAgregar(datos);
        break;
      case input.LISTAR:
        // Muestra la lista de bandas
        await logic.opcionListar(datos);
        break;
      case input.EDITAR:
        // Selecciona la banda, pide nuevos datos y los guarda
        datos = await logic.opcionEditar(datos);
        break;
      case input.ELIMINAR:
        // Selecciona la banda, confirma y elimina la banda
        datos = await logic.opcionEliminar(datos);
        break;
      case input.SALIR:
        opcion = input.SALIR;
        // Muestra el mensaje de salida
        await logic.opcionSalir();
        break;
    }
  }
};

// Ejecuta el programa principal
iniciarPrograma();
