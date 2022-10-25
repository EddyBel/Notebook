import Linux from "../assets/icons/linux (1).png";
import TypeScript from "../assets/icons/TypeScript.png";
import JavaScript from "../assets/icons/JavaScript.png";
import Node from "../assets/icons/nodo-js.png";
import Python from "../assets/icons/Python.png";
import Document from "../assets/icons/Documento.png";
import Docker from "../assets/icons/docker.png";
import CL from "../assets/icons/C.svg";
import CPP from "../assets/icons/CPP.svg";
import CS from "../assets/icons/CS.svg";
import IA from "../assets/icons/IA3.png";
import Fisica from "../assets/icons/Fisica.png";
import Math from "../assets/icons/funcion.png";
import Ingles from "../assets/icons/ingles.png";
import Coding from "../assets/icons/coding2.svg";

export const languageIcon = (language) => {
  if (language === "JS" || language === "js" || language === "JavaScript")
    return JavaScript;
  else if (language === "TS" || language === "ts" || language === "TypeScript")
    return TypeScript;
  else if (
    language === "NodeJS" ||
    language === "NODEJS" ||
    language === "NodeJs" ||
    language === "Nodejs"
  )
    return Node;
  else if (
    language === "PYTHON" ||
    language === "Python" ||
    language === "python"
  )
    return Python;
  else if (language === "LINUX" || language === "Linux" || language === "linux")
    return Linux;
  else if (
    language === "DOCKER" ||
    language === "Docker" ||
    language === "docker"
  )
    return Docker;
  else if (
    language === "Fisica" ||
    language === "fisica" ||
    language === "Fisc"
  )
    return Fisica;
  else if (language === "C" || language === "c") return CL;
  else if (language === "C#" || language === "c#") return CS;
  else if (language === "C++" || language === "c++" || language === "CPP")
    return CPP;
  else if (language === "IA" || language === "ia") return IA;
  else if (
    language === "Math" ||
    language === "Matematicas" ||
    language === "matematicas" ||
    language === "math"
  )
    return Math;
  else if (language === "Ingles" || language === "ingles" || language === "ing")
    return Ingles;
  else if (
    language === "programacion" ||
    language === "Programacion" ||
    language === "program"
  )
    return Coding;
  else return Document;
};

export const languageString = (string) => {
  if (string === "js") return "JavaScript";
  else if (string === "python") return " Python";
  else if (string === "json") return "JSON";
  else if (string === "cp") return "C+";
  else if (string === "bash") return "Bash";
  else return "Documento";
};
