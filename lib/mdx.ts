import Matter from "gray-matter";
import * as fs from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { serialize } from "next-mdx-remote/serialize";
import { getFiles } from "./files";
import { pathNotesByMatter, newPath } from "./path";
import { FormatMatter, deleteExtension, getExtension } from "../utils/index";
import { themes } from "../configs/index";

type FileByRoute = {
  source: MDXRemoteSerializeResult;
  frontmatter: Object;
};

/** Full-featured object that is controlled or used by the markdown or markdownReact files. */
class MarkdownJSX {
  constructor() {}

  /**
   * Get the content of the file and defrag it on the metadata and content.
   * @param {string} fileName File name to read.
   * @param {string} matter Name of the subject or category to which it belongs.
   * @returns {Matter.GrayMatterFile<Buffer>} Returns the object with the properties of the content
   */
  GetContentFile(fileName: string, matter: string) {
    // Get the full path of the file to read and with the library (fs) read the content of the selected file.
    // After getting the content of the file, it stops at the library ( gray-matter ) with its function ( Matter ) to separate its content from the metadata.
    const pathFile = newPath(pathNotesByMatter(matter), fileName);
    const file = fs.readFileSync(pathFile);
    return Matter(file);
  }

  /**
   * Serializes the content so that it can be used later.
   * @param content File content.
   * @returns serialized content.
   */
  async SerializeContent(content: string) {
    return await serialize(content);
  }

  /**
   * Get the metadata of a file and its serialized content.
   * @param {string} fileName File name to read.
   * @param {string} matter Name of the subject or category to which it belongs.
   * @returns {Promise<FileByRoute>} Returns an object with the serialized content and metadata.
   * @example
   * {
   *    source,
   *    frontmatter
   * }
   */
  async GetFileByRoute(fileName: string, matter: string): Promise<FileByRoute> {
    let { data, content } = this.GetContentFile(fileName, matter);
    let source = await this.SerializeContent(content);

    return {
      source,
      frontmatter: { ...data },
    };
  }

  /**
   * Get all metadata of all files.
   * @param {string} matter Name of the matter that indicates the subfolder of the notes.
   * @returns {Object[]} Returns an array with all data as objects.
   * @example
   * [
   *  {
   *    ..data,
   *    route,
   *    matter,
   *    name_file
   *  },
   *  ... AllNotes
   * ]
   */
  GetAllFilesMetadata(matter: string) {
    // Get the files from the subfolder, Loop through each file in the subfolders and extract the indicated data and return it in a new array with all the data
    const files = getFiles(matter);
    const data = files.reduce((allNotes: object[], postRoute: string) => {
      let { data } = this.GetContentFile(postRoute, matter);
      return [
        {
          ...data,
          route: postRoute,
          matter: matter,
          name_file: deleteExtension(postRoute),
        },
        ...allNotes,
      ];
    }, []);

    return data;
  }

  /**
   * Get all files in each named subfolder, a counter of all files.
   * @returns Returns an object with two lists.
   * * data: Which is an array containing the data objects.
   * * numberFilesByTheme: Which is an array with objects number of files and their subject.
   */
  GetAllFiles() {
    // Initialize the variables we will need
    const data: Object[] = [];
    const numberFilesByTheme: Object[] = [];
    let countFile: number;

    // It goes through all the themes that are in the configuration.
    themes.map((theme) => {
      // Get all the files in a folder and loop through them.
      // Each time a new file is traversed, it adds the value to the counter and adds the indicated properties to the array that will contain the information.
      const files = getFiles(theme.matter);
      countFile = 0;

      // The data that was added is:
      // - Folder: What is the directory where the notes are located.
      // - File: It is the complete file name.
      // - name_file: It is the file name without the extension.
      // - extension: It is the file extension.
      files.map((file) => {
        countFile += 1;
        data.push({
          folder: FormatMatter(theme.matter),
          file,
          name_file: deleteExtension(file),
          extension: getExtension(file),
        });
      });

      // At the end, add the number of files found and their folder or matter to which they belong.
      // - matter: Matter or subfolder to which the files belong.
      // - numberFiles: Number of files found in that subfolder.
      numberFilesByTheme.push({
        matter: FormatMatter(theme.matter),
        numberFiles: countFile,
      });
    });

    return {
      data,
      numberFilesByTheme,
    };
  }

  /**
   * Get the metadata of all the files there are.
   * @returns {Object[]} Returns an array of objects with all metadata separated by subject.
   */
  GetAllFilesMetadataOfAllFolders() {
    const allMetadataOfFiles: Object[] = [];

    themes.map((theme) => {
      let meta = this.GetAllFilesMetadata(theme.matter);
      allMetadataOfFiles.push(meta);
    });

    return allMetadataOfFiles;
  }
}

export { MarkdownJSX };
