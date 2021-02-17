const pressAnyKey = require("press-any-key");
const data = require("./data");
const input = require("./input");
const output = require("./output");

/**
 * Función que permite hacer una pausa en el programa hasta que se oprima alguna tecla.
 */
const pausa = async () => {
  // Detiene la ejecución hasta oprimir una tecla
  await pressAnyKey("Presione cualquier tecla para continuar...");
};

/**
 * Función que pide los datos de una nueva banda la usuario y guarda la banda en un archivo Json.
 * @param {Object} datos Objeto de datos al cual se le agregará una banda
 */
const opcionAgregar = async (datos) => {
  // Pide los datos de la banda
  const banda = await input.pedirDatosBanda();

  // Guarda los datos
  datos = await data.agregarBanda(datos, banda);

  // Retorna los datos
  return datos;
};

/**
 * Función que lista las bandas.
 * @param {Object} datos Objeto de datos que tiene la lista de bandas
 */
const opcionListar = async (datos) => {
  // Muestra la lista de bandas
  await output.mostrarBandas(datos.bandas);

  // Detiene la ejecución hasta oprimir una tecla
  await pausa();
};

/**
 * Función que permite seleccionar la banda a editar, pide los nuevos datos de la banda, modifica la banda y guarda los datos en un archivo Json.
 * @param {Object} datos Objeto de datos al cual se le editará una banda
 */
const opcionEditar = async (datos) => {
  // Muestra el menú de bandas
  const seleccionEditar = await input.seleccionarBanda(datos.bandas);

  // Pide los nuevos datos de la banda
  const nuevaBanda = await input.pedirDatosBanda();

  // Reemplaza y guarda los datos de la banda
  datos = await data.editarBanda(datos, seleccionEditar, nuevaBanda);

  // Retorna los datos
  return datos;
};

/**
 * Función que permite seleccionar la banda a eliminar, confirma la eliminación, elimina la banda y guarda los datos en un archivo Json.
 * @param {Object} datos Objeto de datos al cual se le eliminará una banda
 */
const opcionEliminar = async (datos) => {
  // Muestra el menú de bandas
  const seleccionEliminar = await input.seleccionarBanda(datos.bandas);

  // Muestra el mensaje de confirmación
  const confirmacion = await input.confirmarEliminarBanda();

  // Verifica si se ha confirmado la eliminación
  if (confirmacion.eliminar) {
    // Elimina la banda y guarda la información
    datos = await data.eliminarBanda(datos, seleccionEliminar.banda);
  }

  // Retorna los datos
  return datos;
};

/**
 * Función que muestra el mensaje de salida
 */
const opcionSalir = async () => {
  // Muestra el mensaje de salida
  await output.mostrarMensajeSalida();
};

module.exports.opcionAgregar = opcionAgregar;
module.exports.opcionListar = opcionListar;
module.exports.opcionEditar = opcionEditar;
module.exports.opcionEliminar = opcionEliminar;
module.exports.opcionSalir = opcionSalir;
