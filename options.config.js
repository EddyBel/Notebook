import {
  Home,
  Data,
  Folder,
  Report,
  Github,
  GithubI,
  Instagram,
  Twitter,
  Linkedin,
} from "./components/common/svg";

const options_menu = [
  {
    title: "Home",
    svg: <Home />,
    direccion: "/",
  },
  {
    title: "Notas",
    svg: <Folder />,
    direccion: "/Notes",
  },
  {
    title: "Temas",
    svg: <Report />,
    direccion: "/Themes",
  },
  {
    title: "Info",
    svg: <Data />,
    direccion: "/Info",
  },
];

const options_nav_bar = [
  {
    title: "github",
    svg: <Github />,
    direccion: "https://github.com/EddyBel",
  },
];

const classNameF = "w-6 h-6";

const footer = {
  icons: [
    {
      title: "Github",
      svg: <GithubI classN={classNameF} />,
      direccion: "https://github.com/EddyBel",
    },
    {
      title: "Instagram",
      svg: <Instagram classN={classNameF} />,
      direccion: "https://www.instagram.com/eduard_d18/",
    },
    {
      title: "Linkedin",
      svg: <Linkedin classN={classNameF} />,
      direccion:
        "https://www.linkedin.com/in/eduardo-antonio-rangel-serrano-30a330226/",
    },
    {
      title: "Twitter",
      svg: <Twitter classN={classNameF} />,
      direccion: "https://twitter.com/Eduardo51687981",
    },
  ],
  paginas: [
    {
      title: "Portafolio",
      direccion: "https://eduardo-rangel.netlify.app/",
    },
    {
      title: "Usuario",
      direccion: "https://eddybel.github.io/",
    },
    {
      title: "Blog",
      direccion: "#",
    },
  ],
  proyectos: [],
};

export { options_menu, options_nav_bar, footer };
