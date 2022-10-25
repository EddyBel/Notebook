// Filtrar la informacion pasado un parametro
export const searchFile = (files, param, setState) => {
  const newNotes = []; // Contenedor de las nuevas notas
  const Param = param.toLowerCase(); // Convierte el parametro a minusculas
  // Recorrer todos los archivos
  files.map((note) => {
    const title = note.title; // Obtener el titulo de cada nota
    const Title = title.toLowerCase(); // Convierte el titulo de cada nota a minuscula

    // Si el titulo tiene incluido el parametro, entonces agreagalo al contenedor de las nuevas notas
    if (Title.includes(Param)) {
      newNotes.push(note);
    }
  });

  // Agregalo al estado pasado por parametro
  try {
    setState(newNotes);
  } catch (err) {
    console.log(err);
  }

  return newNotes; // Retorna las nuevas notas
};
