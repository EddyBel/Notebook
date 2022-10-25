import { params } from "../configs/index";
const path = require("path");

const platform = process.platform; // Plataforma de entorno
const root = process.cwd(); // Ruta base del proyecto
const pathNotes = path.join(root, params.folderNotes); // Carpeta donde se encuentran las notas
const pathNotesByMatter = (matter) => path.join(pathNotes, matter); // Ruta de archivos por cada materia
const newPath = (base, contact) => path.join(base, contact); // Crear una nueva ruta

export { platform, root, pathNotes, pathNotesByMatter, newPath };
