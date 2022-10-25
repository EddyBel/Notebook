const mounths = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Obtener la fecha y hora actual como un objeto
export const getDate = () => {
  const date = new Date();
  const dateObj = {
    day: date.getDate(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
  };
  return dateObj;
};

// Obtener la fecha como objeto dado una fecha escrita
export const getObjectDate = (dateString) => {
  const date = new Date(dateString);
  const dateObj = {
    day: date.getDate(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
  };
  return dateObj;
};

// Darle formato a la fecha
export const formatDate = (object, format) => {
  const mounthT = mounths[object.mounth]; // Obtener el mes de acuerdo al objeto
  // Diferentes tipos de formatos
  switch (format) {
    case "dd/mm/yy text":
      return `${object.day} de ${mounthT} del ${object.year}`;
    default:
      return "Error";
  }
};

// Obtener la fecha actual
export const currentDate = (format = "dd/mm/yy text") =>
  formatDate(getDate(), format);
