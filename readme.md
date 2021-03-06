# NodeJS - Programa de Línea de Comandos

## Descripción

Este programa está desarrollado en Javascript sobre Nodejs.
Los objetivos del programa son:

- Ejecutar programas en Javascript desde Nodejs que permitan mostrar menús interactivos desde la Terminal.
- Cargar y guardar información desde y hacia archivo Json.
- Dividir un programa en Javascript con Nodejs en diferentes archivos.

## Librerías

- [chalk](https://www.npmjs.com/package/chalk) -- Da color a la Terminal
- [clear](https://www.npmjs.com/package/clear) -- Limpia la pantalla de la Terminal
- [cli-table3](https://www.npmjs.com/package/cli-table3) -- Muestra tablas en la Terminal
- [figlet](https://www.npmjs.com/package/figlet) -- Crea arte ASCII desde un texto
- [inquirer](https://www.npmjs.com/package/inquirer) -- Crea interfaz interactiva en la Terminal
- [press-any-key](https://www.npmjs.com/package/press-any-key) - Permite detener la ejecución del programa hasta oprimir una tecla

## Ejecución

1. Clonar el repositorio
2. Instalar las dependencias

```bash
npm install
```

3. Ejecutar el programa

```bash
npm start
```

## Documentación

Instale el paquete [Documentation](https://documentation.js.org/) de forma global ejecutando:

```bash
npm install -g documentation
```

Para generar la documentación del programa ejecute la instrucción:

```bash
documentation build src/** -f html -o docs
```

Esta instrucción genera la documentación de los archivos del folder `src` en formato HTML y los almacena en el folder `docs`
