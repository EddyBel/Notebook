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

type DateObject = {
  day: number;
  mounth: number;
  year: number;
};

/**
 * Get the current date and time as an object
 * @type {Function}
 * @returns {DateObject} Date Object
 * @example
 * { day: number, mounth: number, year: number }
 */
export const getDate = (): DateObject => {
  const date = new Date();
  const dateObj = {
    day: date.getDate(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
  };
  return dateObj;
};

/**
 * Get the date as an object given a typed date
 * @type {Function}
 * @param {string} dateString Date as string
 * @returns {DateObject} Date Object
 * @example
 * { day: number, mounth: number, year: number }
 */
export const getObjectDate = (dateString: string): DateObject => {
  const date = new Date(dateString);
  const dateObj = {
    day: date.getDate(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
  };
  return dateObj;
};

/**
 * Given a date object and a specific format, returns a string with the new date type
 * @type {Function}
 * @param {DateObject} object Date Object
 * @param {string} format String indicating the type of formatting
 * @returns {string} Formatted date
 */
export const formatDate = (
  object: DateObject,
  format: string = "dd/mm/yy text"
): string => {
  const mounthT = mounths[object.mounth]; // Obtener el mes de acuerdo al objeto
  switch (format) {
    case "dd/mm/yy text":
      return `${object.day} de ${mounthT} del ${object.year}`;
    default:
      return `${object.day}-${object.mounth}-${object.year}`;
  }
};

/**
 * Get current date
 * @param {string} format String indicating the type of formatting
 * @returns {string} Formatted date
 */
export const currentDate = (format: string = "dd/mm/yy text"): string =>
  formatDate(getDate(), format);

export const convertDate = (
  date: string,
  format: string = "dd/mm/yy text"
): string => {
  try {
    const objDate = getObjectDate(date);
    return formatDate(objDate, format);
  } catch (err) {
    console.log(err);
    return date;
  }
};
