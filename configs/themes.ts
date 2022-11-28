import {
  CoverDocker,
  CoverJavaScript,
  CoverLinux,
  CoverMarkdown,
  CoverProgramming,
  CoverPython,
} from "./covers";
import settings from "./settings";

const { useThemes } = settings;

type ThemeObject = {
  matter: string;
  type: string;
  path: string;
  background: string;
  backgroundDefault: string | undefined;
};

/** List of objects and themes allowed to use */
const themes: ThemeObject[] = [];

/**
 * List of objects and themes allowed to use
 * @type { Object[] }
 * @example
 * // Subject object
 * {
 *    matter: "JavaScript",
 *    type: "Codigo",
 *    path: "Themes/JavaScript",
 *    background: "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg"
 * }
 */
const generalThemes = [
  {
    matter: "JavaScript",
    type: "Codigo",
    path: "Themes/JavaScript",
    background:
      "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
    backgroundDefault: CoverJavaScript.src,
  },
  {
    matter: "Markdown",
    type: "Codigo",
    path: "Themes/Markdown",
    background:
      "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
    backgroundDefault: CoverMarkdown.src,
  },
  {
    matter: "Docker",
    type: "Codigo",
    path: "Themes/Docker",
    background:
      "https://media.wired.com/photos/590965e876f462691f012f63/2:1/w_2500,c_limit/docker-wallpaper-black.jpg",
    backgroundDefault: CoverDocker.src,
  },
  {
    matter: "Programacion",
    type: "Conceptos y teoria",
    path: "Themes/Programacion",
    background:
      "https://www.adslzone.net/app/uploads-adslzone.net/2021/10/lenguaje-de-programacion.jpg",
    backgroundDefault: CoverProgramming.src,
  },
  {
    matter: "Python",
    type: "Codigo",
    path: "Themes/Python",
    background: "https://images.hdqwalls.com/wallpapers/python-logo-4k-i6.jpg",
    backgroundDefault: CoverPython.src,
  },
  {
    matter: "C",
    type: "Codigo",
    path: "Themes/C",
    background:
      "https://thumbor.cdn.classpert.com/GoaQhOSbNZRxWXvR0nTyeKlQAM4=/768x0/https%3A%2F%2Fcdn.classpert.com%2Fuploads%2Fpost__lenguajes-de-programacion-mas-usados-c-4983aa9055b9ae95789f9b7f77587184.jpg",
    backgroundDefault: undefined,
  },
  {
    matter: "C#",
    type: "Codigo",
    path: "Themes/CS",
    background:
      "https://niixer.com/wp-content/uploads/2020/11/csharp-800x445.jpg",
    backgroundDefault: undefined,
  },
  {
    matter: "C++",
    type: "Codigo",
    path: "Themes/C++",
    background:
      "https://www.softzone.es/app/uploads-softzone.es/2022/03/programar-c.jpg",
    backgroundDefault: undefined,
  },
  {
    matter: "Linux",
    type: "Codigo",
    path: "Themes/Linux",
    background:
      "https://www.skinatech.com/portal/wp-content/uploads/2017/05/original.png",
    backgroundDefault: CoverLinux.src,
  },
  {
    matter: "Fisica",
    type: "Ciencias",
    path: "Themes/Fisica",
    background: "https://fondosmil.com/fondo/75988.jpg",
    backgroundDefault: undefined,
  },
  {
    matter: "Matematicas",
    type: "Ciencias",
    path: "Themes/Matematicas",
    background:
      "https://msutexas.edu/academics/scienceandmath/mathematics/_assets/images/mathematics_image.jpg",
    backgroundDefault: undefined,
  },
  {
    matter: "Quimica",
    type: "Ciencias",
    path: "Themes/Quimica",
    background:
      "https://conceptoabc.com/wp-content/uploads/2021/07/Quimica.jpg",
    backgroundDefault: undefined,
  },
  {
    matter: "Ingles",
    type: "Lenguaje",
    path: "Themes/Ingles",
    background:
      "https://conceptodefinicion.de/wp-content/uploads/2016/09/Ingl%C3%A9s.jpg",
    backgroundDefault: undefined,
  },
];

/**
 * Get from the list ( generalThemes ) only the themes that are specified in the variable ( useThemes )
 */
const getThemes = (): void => {
  generalThemes.map((theme: ThemeObject) => {
    if (useThemes.includes(theme.matter)) {
      themes.push(theme);
    }
  });
};

getThemes();

export { themes };
