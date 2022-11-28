import { StaticImageData } from "next/image";
import { icons } from "../configs/index";

const {
  Angular,
  CL,
  CPP,
  CS,
  Coding,
  Django,
  Docker,
  Document,
  Electron,
  Express,
  Fisica,
  IA,
  Folder,
  Ingles,
  JavaScript,
  Jquery,
  Linux,
  Markdown,
  Math,
  Matplotlib,
  Mobile,
  Node,
  PC,
  Pandas,
  Python,
  React,
  Sass,
  Server,
  Test,
  TypeScript,
  Vue,
  Yarn,
} = icons;

/**
 * Validates that the string reaches the function and, depending on the technology or theme, returns the corresponding image.
 * @param {string} matter Subject or technology to be evaluated.
 * @returns {StaticImageData} Imagen
 */
export const matterIcon = (matter: string): StaticImageData => {
  let minMatter = matter.toLowerCase();
  if (minMatter === "js" || minMatter == "javascript") return JavaScript;
  else if (minMatter === "python" || minMatter === "py") return Python;
  else if (minMatter === "docker" || minMatter === "dock") return Docker;
  else if (minMatter === "ingles" || minMatter === "en") return Ingles;
  else if (minMatter === "linux") return Linux;
  else if (minMatter === "c") return CL;
  else if (minMatter === "c++" || minMatter === "cpp") return CPP;
  else if (minMatter === "c#" || minMatter === "cs") return CS;
  else if (minMatter === "math" || minMatter === "matematicas") return Math;
  else if (minMatter === "fisic" || minMatter === "fisica") return Fisica;
  else if (minMatter === "markdown" || minMatter === "mark") return Markdown;
  else if (minMatter === "programacion" || minMatter == "program")
    return Coding;
  else return Document;
};

/**
 * Go through a list of strings and for each string it will evaluate its corresponding icon, if it matches you add the icon to an array and return it
 * @type {Function}
 * @param {string[]} tags String list
 * @returns {StaticImageData[]} Icon list
 */
export const subMatterIcon = (tags: string[]): StaticImageData[] => {
  let icons: StaticImageData[] = [];

  tags.map((tag: string) => {
    let minTag = tag.toLowerCase();

    if (minTag === "nodejs") icons.push(Node);
    else if (minTag === "typescript") icons.push(TypeScript);
    else if (minTag === "django") icons.push(Django);
    else if (minTag === "test") icons.push(Test);
    else if (minTag === "yarn") icons.push(Yarn);
    else if (minTag === "pandas") icons.push(Pandas);
    else if (minTag === "folder") icons.push(Folder);
    else if (minTag === "react") icons.push(React);
    else if (minTag === "jquery") icons.push(Jquery);
    else if (minTag === "servidor" || minTag === "server") icons.push(Server);
    else if (minTag === "vue") icons.push(Vue);
    else if (minTag === "angular") icons.push(Angular);
    else if (minTag === "mobile" || minTag === "mobil") icons.push(Mobile);
    else if (minTag === "pc" || minTag == "escritorio") icons.push(PC);
    else if (minTag === "matplotlib") icons.push(Matplotlib);
    else if (minTag === "express") icons.push(Express);
    else if (minTag === "sass" || minTag === "scss") icons.push(Sass);
    else if (minTag === "electron" || minTag === "electronjs")
      icons.push(Electron);
    else if (minTag === "ia" || minTag === "inteligencia artificial")
      icons.push(IA);
  });

  return icons;
};

/**
 * According to each string returns another.
 * @param {string} string String to evaluate.
 * @returns {string} new string or matter
 */
export const languageString = (string: string): string => {
  if (string === "js") return "JavaScript";
  else if (string === "python") return " Python";
  else if (string === "json") return "JSON";
  else if (string === "cp") return "C+";
  else if (string === "bash") return "Bash";
  else return string;
};
