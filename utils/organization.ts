/**
 * In the list of all notes, extract the date and convert it to a Date stay, and arrange it from smallest to largest.
 * @param {Object[]} notes Object that contains all the notes.
 * @returns {Object[]} List of notes already organized.
 */
export const organitationOfDateMinMax = (notes: Object[]): Object[] => {
  let newNotes = [...notes];
  let date1: string | null;
  let date2: string | null;
  let objD1: Date;
  let objD2: Date;

  for (let i = 1; i < newNotes.length; i++) {
    let length = newNotes.length - 1;
    for (let j = length; j >= i; j--) {
      date1 = getDate(newNotes[j - 1]);
      date2 = getDate(newNotes[j]);
      objD1 = !date1 ? new Date() : new Date(date1);
      objD2 = !date2 ? new Date() : new Date(date2);

      if (objD1 > objD2) {
        const temp = newNotes[j - 1];
        newNotes[j - 1] = newNotes[j];
        newNotes[j] = temp;
      }
    }
  }

  return newNotes;
};

/**
 * In the list of all notes, extract the date and make it Stay Date, and sort it from highest to lowest.
 * @param {Object[]} notes Object that contains all the notes.
 * @returns {Object[]} List of notes already organized
 */
export const organitationOfDateMaxMin = (notes: Object[]): Object[] => {
  let newNotes = [...notes];
  let date1: string | null;
  let date2: string | null;
  let objD1: Date;
  let objD2: Date;

  for (let i = 1; i < newNotes.length; i++) {
    let length = newNotes.length - 1;
    for (let j = length; j >= i; j--) {
      date1 = getDate(newNotes[j - 1]);
      date2 = getDate(newNotes[j]);
      objD1 = !date1 ? new Date() : new Date(date1);
      objD2 = !date2 ? new Date() : new Date(date2);

      if (objD1 < objD2) {
        const temp = newNotes[j - 1];
        newNotes[j - 1] = newNotes[j];
        newNotes[j] = temp;
      }
    }
  }

  return newNotes;
};

/**
 * Filtering inside the object notes the date to ensure that element exists or is null.
 * @param {any} note Note object.
 * @returns {string | null} Value of the date in the note.
 */
const getDate = (note: any): string | null => {
  return !note.date ? (!note.Fecha ? null : note.Fecha) : note.date;
};
