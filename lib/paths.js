import { params } from "../configs/index";
const { pathNotesByMatter } = require("./params");
const fs = require("fs");

const extensions = params.extensionsFiles;

// Obtener los archivos de la ruta, pasando una subcarpeta como parametro ( la materia )
export const getFiles = (matter) => {
  const files = fs.readdirSync(pathNotesByMatter(matter)); // Obtener los archivos y guardar el arreglo resultante
  const leakedFiles = files.filter((file) =>
    file.includes(extensions[0]) || file.includes(extensions[1]) ? true : false
  ); // Filtrar solo los archivos que incluyan la extension señalada en la configuracion
  return leakedFiles; // Retorna los archivos ya filtrados
};
