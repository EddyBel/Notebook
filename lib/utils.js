// Validar el tema
export const validateTheme = (theme) => {
  if (theme === "Inteligencia Artificial") return "IA";
  else if (theme === "C#") return "CS";
  else return theme;
};

// Filtrar informacion con el input
export const searchFile = (files, param, setState) => {
  const newNotes = [];

  const newParam = param.toLowerCase();

  files.map((note) => {
    const nameOfNote = note.title.toLowerCase();

    if (nameOfNote.includes(newParam)) {
      newNotes.push(note);
    }
  });

  setState(newNotes);

  return newNotes;
};
