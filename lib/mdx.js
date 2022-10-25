import { getFiles } from "./paths";
import { pathNotesByMatter, newPath } from "./params";
import { FormatMatter, deleteExtension, getExtension } from "../utils/index";
import { themes as THEMES } from "../configs/index";
import Matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
const fs = require("fs");

const themes = THEMES.themes;

// Obtener el archivo de acuerdo a la ruta
export const getFilesByRoute = async (fileName, matter) => {
  const pathFile = newPath(pathNotesByMatter(matter), fileName); // Obtener la ruta del archivo
  const file = fs.readFileSync(pathFile); // Abrir el archivo que se marco antes
  const { data, content } = Matter(file); // Leer el archivo, desestructurar por sus datos y contenido
  const source = await serialize(content, {}); // Formatea el contenido del archivo md

  // Retorna el contenido formateado y sus datos como metadata
  return {
    source, // Contenido
    frontmatter: { ...data }, // Metadatos
  };
};

// Obtener la meta data de todos los archivos md
export const getAllFilesMetadata = (tecnology) => {
  const materia_name = FormatMatter(tecnology); // Corregir el nombre de la materia si es necesario
  const files = getFiles(materia_name); // Obtener todos lo archivos de la subcarpeta especificada

  // Recorre los archivos (archivos mdx, o md) y retorna el metadata de todos los archivos
  return files.reduce((allPosts, postRoute) => {
    const pathFile = newPath(pathNotesByMatter(tecnology), postRoute); // Obtener la ruta del archivo
    const file = fs.readFileSync(pathFile, "utf-8"); // Leer el arhivo en formato utf-8
    const { data } = Matter(file); // Extraer los metadatos

    // Retorna el metadata y el nombre del archivo
    return [
      {
        ...data, // Metadatos
        route: postRoute, // Ruta
        materia: tecnology, // Materia
      },
      ...allPosts, // Todas las notas
    ];
  }, []);
};

// Obtener todos los archivos
export const getAllFiles = () => {
  // Variables y constantes
  const data = []; // Contenedor de la informacion
  const numberFilesByTheme = []; // Contenedor de los numeros de archivo totales
  let countFiles = 0; // Variable para contar el numero de archivos por carpeta

  // Recorre todos los temas en el archivo de configuracion
  themes.map((theme) => {
    try {
      const matter = FormatMatter(theme.materia); // Obten el valor de la materia formateado si se solicita
      const files = getFiles(matter); // Obtener todos los archivos pasando la subcarpeta
      countFiles = 0; // Verifica que el contador sea igual a 0 al iniciar

      // Recorre la lista de archivos de la subcarpeta
      files.map((file) => {
        countFiles += 1; // Suma al contador
        // Agrega al contenedor de informacion
        data.push({
          folder: matter, // Materia
          file, // Nombre de archivo
          name_file: deleteExtension(file), // Nombre de archivo sin extension
          extension: getExtension(file), // Obtener la extension de archivo
        });
      });

      // Una vex termine de obtener los datos de la carpeta, agreaga los datos contados en el contenedor de numero de arhivos
      numberFilesByTheme.push({
        theme: matter, // Materia
        numberFiles: countFiles, // Numero de archivos
      });
    } catch (err) {
      console.log(err); // Imprime el error
    }
  });

  // Importa los datos finales
  return {
    data, // Los meta datos y notas
    numberFilesByTheme, // Los numeros de archivos
  };
};

export const getAllFilesMetadataOfAllFolders = () => {
  const allMetadataOfFiles = []; // Contenedor de todos los metadatos

  // Recorrer todos los temas de la configuracion
  themes.map((materia) => {
    // Valida que no haya errores
    try {
      const matter = FormatMatter(materia.materia); // Corrige el nombre de la materia
      const meta = getAllFilesMetadata(matter); // Obtener los metadatos de cada subcarpeta
      allMetadataOfFiles.push(meta); // Agrega todos los meta tados al contenedor
    } catch (err) {
      console.log(err);
    }
  });

  return allMetadataOfFiles; // Retorna todos los metadatos
};
