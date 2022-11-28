/**
 * Modify the value of the title if necessary
 * @param {string} matter Title
 * @returns {string} New title
 */
export const FormatMatter = (matter: string): string => {
  switch (matter) {
    case "Inteligencia Artificial":
      return "IA";
    case "C#":
      return "CS";
    default:
      return matter;
  }
};

/**
 * Remove the file extension ( md, mdx )
 * @param {string} file Name file
 * @returns {string} new name file
 */
export const deleteExtension = (file: string): string => {
  if (file.includes(".mdx")) {
    return file.replace(".mdx", "");
  } else if (file.includes(".md")) {
    return file.replace(".md", "");
  } else {
    return "Extencion desconocida";
  }
};

/**
 * Get the file extension
 * @param {string} file Name file
 * @returns {string} extension
 */
export const getExtension = (file: string): string => {
  if (file.includes(".mdx")) {
    return ".mdx";
  } else if (file.includes(".md")) {
    return ".md";
  } else {
    return "Extencion desconocida";
  }
};

/**
 * Modify the id name if necessary
 * @param {string} id Element ID
 * @returns {string} new ID
 */
export const SetID = (id: string): string => {
  switch (id) {
    case "C++":
      return "CPP";

    default:
      return id;
  }
};

/**
 * Modify the name if necessary
 * @param {string} name Element name
 * @returns {string} new name
 */
export const SetName = (name: string): string => {
  switch (name) {
    case "CS":
      return "C#";
    default:
      return name;
  }
};

/**
 * Reorder the notes array
 * @param {Object[][]} notes List containing the list of notes
 * @example [[{note1}, {note2}, ... ], [{note3}, {note4}, ... ] ...]
 * @returns {Object[]} Returns the new list of notes
 * @example [{note1}, {note2}, {note3}, {note4} ...]
 */
export const reorderTheNotes = (notes: Object[][]): Object[] => {
  let newNotes: Object[] = []; // Container for the new reordered notes

  // Loop through the main array, then each subarray and each object it finds add it to the new array
  notes.map((matter) => {
    matter.map((note) => {
      newNotes.push(note);
    });
  });

  return newNotes;
};

/**
 * Validate as propertys of note.
 * @param {Object} note Object note.
 * @returns {Object} Return object as propertys validates
 * @example
 * const {
 *    title: string,
 *    date: string,
 *    mater: string,
 *    route: string,
 *    tags: string,
 *    fonts: string,
 *    front: string,
 *    important: string | boolean
 * } = validationValues(note:Object);
 */
export const validationValues = (note: any) => {
  let title: string = !note.title
    ? !note.Nombre
      ? note.name_file
      : note.Nombre
    : note.title;

  let date: string = !note.date
    ? !note.Fecha
      ? "Pending ...."
      : note.Fecha
    : note.date;

  let matter: string = !note.matter
    ? !note.Materia
      ? "Documento"
      : note.Materia
    : note.matter;

  let route: string = !note.route
    ? !note.path
      ? "Not-direction"
      : note.path
    : note.route;

  let tags: string = !note.tags
    ? !note.Etiquetas
      ? matter
      : note.Etiquetas
    : note.tags;

  let level: string = !note.level
    ? !note.Dificultad
      ? ""
      : note.Dificultad
    : note.level;

  let fonts: string = !note.fonts
    ? !note.Fuentes
      ? "none"
      : note.Fuentes
    : note.fonts;

  let front: string = !note.front
    ? !note.Caratula
      ? !note.Background
        ? "none-background"
        : note.Background
      : note.Caratula
    : note.front;

  let important: string | boolean = !note.important
    ? !note.Importante
      ? false
      : note.Importante
    : note.important;

  return { title, date, matter, route, tags, level, fonts, front, important };
};

/**
 * Valid if in each string of the array there is the fragment of the string passed by parameter.
 * @param {string[]} array Array of strings
 * @param {string} param String to compare
 * @returns {boolean}True if it exists. False if it doesn't
 */
export const fragmentStringInArray = (
  array: string[],
  param: string
): boolean => {
  let i: string;
  for (i of array) {
    if (i.includes(param)) {
      return true;
    }
  }

  return false;
};

/**
 * Validates that the image in a url exists.
 * @todo It remains to use the function and verify its use.
 * @param {string} url Image URL.
 * @returns {boolean} Returns if the image exists ( true ), does not exist ( false ).
 */
export const validImagen = (url: string): boolean => {
  let request = new window.XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  console.log(request);

  return request.status === 0 || request.status === 404 ? false : true;
};
