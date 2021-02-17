const inquirer = require("inquirer");

module.exports = {
  askBasicData: () => {
    const questions = [
      {
        name: "username",
        type: "input",
        message: "Digite su username: ",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Por favor, digite su username.";
          }
        },
      },
      {
        name: "password",
        type: "password",
        message: "Digite su password:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Por favor, digite su password.";
          }
        },
      },
      {
        name: "sex",
        type: "list",
        message: "Seleccione su sexo",
        choices: ["Femenino", "Masculino", "Otro"],
        default: "Femenino",
      },
      {
        name: "hobbies",
        type: "checkbox",
        message: "Seleccione sus pasatiempos:",
        choices: ["música", "cine", "tv", "lectura"],
        default: ["cine", "tv"],
      },
    ];
    return inquirer.prompt(questions);
  },
};
