const pressAnyKey = require("press-any-key");
const data = require("./data");
const input = require("./input");
const output = require("./output");

const pausa = async () => {
  // Detiene la ejecución hasta oprimir una tecla
  await pressAnyKey("Presione cualquier tecla para continuar...");
};

const opcionAgregar = async (datos) => {
  // Pide los datos de la banda
  const banda = await input.pedirDatosBanda();

  // Guarda los datos
  datos = await data.agregarBanda(datos, banda);

  // Retorna los datos
  return datos;
};

const opcionListar = async (datos) => {
  // Muestra la lista de bandas
  await output.mostrarBandas(datos.bandas);

  // Detiene la ejecución hasta oprimir una tecla
  await pausa();
};
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
const opcionSalir = async (datos) => {
  // Muestra el mensaje de salida
  await output.mostrarMensajeSalida();
};

module.exports.opcionAgregar = opcionAgregar;
module.exports.opcionListar = opcionListar;
module.exports.opcionEditar = opcionEditar;
module.exports.opcionEliminar = opcionEliminar;
module.exports.opcionSalir = opcionSalir;
