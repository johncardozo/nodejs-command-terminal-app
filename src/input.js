const inquirer = require("inquirer");

// Constantes del menú principal
const AGREGAR = 1;
const LISTAR = 2;
const EDITAR = 3;
const ELIMINAR = 4;
const SALIR = 5;

module.exports = {
  pedirOpcion: () => {
    const opciones = [
      {
        name: "opcion",
        type: "list",
        message: "Seleccione su opción",
        choices: [
          { value: AGREGAR, name: "Agregar banda" },
          { value: LISTAR, name: "Listar bandas" },
          { value: EDITAR, name: "Editar banda" },
          { value: ELIMINAR, name: "Eliminar banda" },
          new inquirer.Separator(),
          { value: SALIR, name: "Salir" },
        ],
      },
    ];
    return inquirer.prompt(opciones);
  },
  pedirDatosBanda: () => {
    const datosBanda = [
      {
        name: "name",
        type: "input",
        message: "Digite el nombre de la banda: ",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Por favor, digite el nombre de la banda.";
          }
        },
      },
      {
        name: "year",
        type: "input",
        message: "Digite el año de la banda: ",
        validate: function (value) {
          // Verifica que el valor no sea un número ilegal: Not A Number
          if (!isNaN(value)) {
            return true;
          } else {
            return "Por favor, digite un año válido para la banda.";
          }
        },
      },
    ];
    return inquirer.prompt(datosBanda);
  },
  seleccionarBanda: (bandas) => {
    // Transforma la lista de objetos en una lista de strings
    const opciones = bandas.map(function (item) {
      return item["name"];
    });
    // Crea el menú de bandas
    const opcionesBandas = [
      {
        name: "banda",
        type: "list",
        choices: opciones,
      },
    ];
    return inquirer.prompt(opcionesBandas);
  },
  confirmarEliminarBanda: () => {
    const opciones = [
      {
        name: "eliminar",
        type: "confirm",
        message: "Está seguro que desea eliminar la banda?",
        default: ["Y"],
      },
    ];
    return inquirer.prompt(opciones);
  },
};

module.exports.AGREGAR = AGREGAR;
module.exports.LISTAR = LISTAR;
module.exports.EDITAR = EDITAR;
module.exports.ELIMINAR = ELIMINAR;
module.exports.SALIR = SALIR;
