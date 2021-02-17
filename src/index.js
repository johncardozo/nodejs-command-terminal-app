const pressAnyKey = require("press-any-key");

const input = require("./input");
let data = require("./data");
let output = require("./output");

// Obtiene el objeto de datos
let datos = data.datos;

const pausa = async () => {
  // Detiene la ejecución hasta oprimir una tecla
  await pressAnyKey("Presione cualquier tecla para continuar...");
};

const run = async () => {
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
        // Pide los datos de la banda
        const banda = await input.pedirDatosBanda();

        // Guarda los datos
        datos = await data.agregarBanda(datos, banda);

        break;
      case input.LISTAR:
        // Muestra la lista de bandas
        await output.mostrarBandas(datos.bandas);

        // Detiene la ejecución hasta oprimir una tecla
        await pausa();

        break;
      case input.EDITAR:
        // Muestra el menú de bandas
        const seleccionEditar = await input.seleccionarBanda(datos.bandas);

        // Pide los nuevos datos de la banda
        const nuevaBanda = await input.pedirDatosBanda();

        // Reemplaza y guarda los datos de la banda
        datos = await data.editarBanda(datos, seleccionEditar, nuevaBanda);

        break;
      case input.ELIMINAR:
        // Muestra el menú de bandas
        const seleccionEliminar = await input.seleccionarBanda(datos.bandas);
        // Muestra el mensaje de confirmación
        const confirmacion = await input.confirmarEliminarBanda();

        // Verifica si se ha confirmado la eliminación
        if (confirmacion.eliminar) {
          // Elimina la banda y guarda la información
          datos = await data.eliminarBanda(datos, seleccionEliminar.banda);
        }

        break;
      case input.SALIR:
        opcion = input.SALIR;
        // Muestra el mensaje de salida
        await output.mostrarMensajeSalida();

        break;
    }
  }
};

run();
