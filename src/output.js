const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
let Table = require("cli-table3");

const mostrarEncabezado = async () => {
  // Clear terminal screen
  clear();

  // Show main title
  console.log(chalk.yellow(figlet.textSync("bandas")));
};

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
