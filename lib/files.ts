import * as fs from "fs";
import { settings } from "../configs/index";
import { FormatMatter } from "../utils/index";
import { pathNotesByMatter } from "./path";

/** Extension list */
const extensions = settings.extensionsFiles;

/**
 * Get the files from the subfolder
 * * Modify the subfolder name if necessary.
 * * Get the files from the notes directory, beyond its subfolder.
 * * Once the files are obtained, filter only the files with the extension specified in the configuration json file and return the filtered files.
 * @param matter Subfolder name
 * @returns List of leaked files
 */
export const getFiles = (matter: string): string[] => {
  const newMatter = FormatMatter(matter);
  const files = fs.readdirSync(pathNotesByMatter(newMatter));
  const leakedFiles = files.filter((file) => {
    let i;
    for (i of extensions) {
      if (file.includes(i)) return true;
    }
  });

  return leakedFiles;
};
