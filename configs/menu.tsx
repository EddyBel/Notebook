import { Home, Data, Folder, Report } from "../components/common/svg";

/**
 * @type {Object}
 * @property {string} title Option name.
 * @property {JSX.Element} svg SVG icon as react component.
 * @property {string} direction Address of the page where it will be directed.
 */
type MenuOption = {
  title: string;
  svg: JSX.Element;
  direccion: string;
};

/** List with the objects that will be rendered in the dropdown menu. */
export const MenuOptions: MenuOption[] = [
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
