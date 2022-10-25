// Configuraciones
import { params } from "../configs/index";

// Modifica el titulo de la materia si es necesario
export const FormatMatter = (matter) => {
  switch (matter) {
    case "Inteligencia Artificial":
      return "IA";
    case "C#":
      return "CS";
    default:
      return matter;
  }
};

// Eliminar la extension del archivo
export const deleteExtension = (file) => {
  if (file.includes(".mdx")) {
    return file.replace(".mdx", "");
  } else if (file.includes(".md")) {
    return file.replace(".md", "");
  } else {
    return "Extencion desconocida";
  }
};

// Obtener la extension del archivo
export const getExtension = (file) => {
  if (file.includes(".mdx")) {
    return ".mdx";
  } else if (file.includes(".md")) {
    return ".md";
  } else {
    return "Extencion desconocida";
  }
};

// Reordena el array de las notas
export const reorderTheNotes = (notes) => {
  const newNotes = []; // Contenedor de las nuevas notas reordenadas

  // Recorre el array principal
  notes.map((matter) => {
    // Recorre los sub array de cada materia
    matter.map((note) => {
      newNotes.push(note); // Agreaga la nota al nuevo array
    });
  });

  return newNotes; // Retornar el nuevo array
};
