import {
  stringToArray,
  validationValues,
  convertValuesOfArrayInToLower,
  fragmentStringInArray,
} from "./index";

type noteObject = {
  title: string;
};

/**
 * This function filters the objects that match in their attribute ( title ) with the passed parameter.
 * @param {object[]} files Note list
 * @param {string} param Parameter to evaluate
 * @param {Function} setState Function that saves the new notes in the past state
 * @returns {Object[]} Return the new notes
 */
export const searchFile = (
  files: Object[],
  param: String,
  setState: Function | undefined = undefined
): Object[] => {
  // Create the list that will contain the new filtered notes then convert the passed parameter to lower case, iterate through the array of objects ( notes ) and convert the note object's attribute ( title ) to lower case, compare the converted parameter and the converted title and if they match then add it to the array of new notes, if it doesn't continue with the next note.
  let newNotes: Object[] = [];
  let minParam = param.toLowerCase();

  files.map((note: any) => {
    let { title, tags } = validationValues(note);
    let minTitle = title.toLowerCase();
    let arrayTags = stringToArray(tags);
    let minArrayTags = convertValuesOfArrayInToLower(arrayTags);
    let paramInMinArrayTags = fragmentStringInArray(minArrayTags, minParam);

    if (
      minTitle.includes(minParam) ||
      minArrayTags.includes(minParam) ||
      paramInMinArrayTags
    ) {
      newNotes.push(note);
    }
  });

  // Validates if there is a status function, if so, execute it if it does not continue.
  !setState ? {} : setState(newNotes);

  return newNotes;
};
