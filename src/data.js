const fs = require("fs");
const path = require("path");

const datos = {
  bandas: [],
};

// Ruta del archivo de datos (../ = sube un nivel)
const rutaArchivo = path.join(__dirname, "../data/datos.json");

/**
 * Función que carga en memoria las bandas a partir de un archivo Json.
 * @returns {Object} objetos que contiene el arreglo de bandas
 */
const cargarBandas = async () => {
  // Verifica si el archivo de datos existe
  if (fs.existsSync(rutaArchivo)) {
    // Abre el archivo
    let archivo = fs.readFileSync(rutaArchivo);

    // Carga la información del archivo en memoria
    let datosArchivo = JSON.parse(archivo);

    // Retorna los datos cargados
    return datosArchivo;
  } else {
    // Crea el archivo de bandas
    fs.createWriteStream(rutaArchivo);
  }
};

/**
 * Función que agrega una banda al objetos de datos, guarda el objeto en un archivo Json y retorna el objeto de datos
 * @param {Object} datos objeto al cual se le agregará la banda
 * @param {Object} banda banda que será agregada
 */
const agregarBanda = async (datos, banda) => {
  // Convierte el año en un entero
  banda.year = parseInt(banda.year);

  // Agrega la banda al objeto de datos
  datos.bandas.push(banda);

  // Convierte los datos en string
  let contenido = JSON.stringify(datos);

  // Escribe las bandas al archivo
  fs.writeFileSync(rutaArchivo, contenido);

  return datos;
};

/**
 * Función que busca una banda en el objeto de datos, reemplaza los valores de la banda, guarda el objeto de datos en un archivo Json y retorna el objeto de datos.
 * @param {Object} datos objeto al cual se le editará una banda
 * @param {String} nombreAnteriorBanda nombre de la banda a editar
 * @param {Object} nuevaBanda Nuevos datos de la banda
 */
const editarBanda = async (datos, nombreAnteriorBanda, nuevaBanda) => {
  // Obtiene el indice de la banda seleccionada
  const indice = datos.bandas.findIndex(
    (b) => b.name === nombreAnteriorBanda.banda
  );
  // Convierte el año en un entero
  nuevaBanda.year = parseInt(nuevaBanda.year);
  // Modifica el objeto
  datos.bandas[indice] = nuevaBanda;
  // Convierte los datos en string
  let contenido = JSON.stringify(datos);
  // Escribe las bandas al archivo
  fs.writeFileSync(rutaArchivo, contenido);
  // Retorna los datos
  return datos;
};

/**
 * Función que dado el nombre de una banda, elimina la banda del objeto de datos, guarda el objeto en un archivo Json y retorna el objeto de datos.
 * @param {Object} datos objeto de datos al cual se le eliminará una banda
 * @param {String} banda nombre de la banda a eliminar
 */
const eliminarBanda = async (datos, banda) => {
  // Obtiene el indice de la banda seleccionada
  const indice = datos.bandas.findIndex((b) => b.name === banda);

  // Elimina la banda por su indice
  datos.bandas.splice(indice, 1);

  // Convierte los datos en string
  let contenido = JSON.stringify(datos);

  // Escribe las bandas al archivo
  fs.writeFileSync(rutaArchivo, contenido);

  // Retorna los datos
  return datos;
};

module.exports.datos = datos;
module.exports.cargarBandas = cargarBandas;
module.exports.agregarBanda = agregarBanda;
module.exports.editarBanda = editarBanda;
module.exports.eliminarBanda = eliminarBanda;
