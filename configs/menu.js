import { Home, Data, Folder, Report } from "../components/common/svg";

export const MenuOptions = [
  {
    title: "Inicio",
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
