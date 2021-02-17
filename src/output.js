const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
let Table = require("cli-table3");

/**
 * Función que muestra el encabezado del programa
 */
const mostrarEncabezado = async () => {
  // Clear terminal screen
  clear();

  // Show main title
  console.log(chalk.yellow(figlet.textSync("bandas")));
};

/**
 * Función que muestra la lista de bandas en una tabla en la Terminal.
 * @param {Array} bandas Lista de bandas a mostrar
 */
const mostrarBandas = async (bandas) => {
  // Crea y configura la tabla
  var table = new Table({
    head: ["Banda", "Año"],
  });

  // Agrega las bandas a la tabla
  bandas.forEach((banda) => {
    table.push([banda.name, banda.year]);
  });

  // Muestra la tabla
  console.log(table.toString());
};

/**
 * Función que muestra el mensaje de salida del programa
 */
const mostrarMensajeSalida = async () => {
  console.log(
    chalk.magenta(
      figlet.textSync("bye-bye", {
        font: "cybermedium",
      })
    )
  );
};

module.exports.mostrarEncabezado = mostrarEncabezado;
module.exports.mostrarBandas = mostrarBandas;
module.exports.mostrarMensajeSalida = mostrarMensajeSalida;
