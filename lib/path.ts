import * as path from "path";
import { settings } from "../configs/index";

/**
 * Execution platform
 * @type {NodeJS.Platform}
 *
 */

const platform = process.platform;
/**
 * Basepath
 * @type {string}
 */
const root = process.cwd();

/**
 * Path where the notes are located.
 * @type {string}
 */
const pathNotes = path.join(root, settings.folderNotes);

/**
 * Get the path for each subfolder.
 * @type {Function}
 * @param {string} matter Sub folder
 * @returns {string} Path of each subfolder
 */
const pathNotesByMatter = (matter: string): string =>
  path.join(pathNotes, matter);

/**
 * Create a new route with the specified parameters.
 * @param {string} base Basepath
 * @param {string} contact Concat path
 * @returns {string} New path
 */
const newPath = (base: string, contact: string): string =>
  path.join(base, contact); // Crear una nueva ruta

export { platform, root, pathNotes, pathNotesByMatter, newPath };
