import front from "../assets/img/front.png";
import background from "../assets/img/img-test.jpg";

/**
 * Web configuration object.
 * @type { Object }
 * @property { String } userGithub Name of github.
 * @property { String } pathPage Base path where the page will be served.
 * @property { String } folderNotes Name of the folder where the notes are located.
 * @property { String[] } extensionsFiles List of file extensions that are allowed.
 * @property { String[] } useThemes List of themes allowed to use.
 * @property { String } backgroundDefault Default background.
 * @property { String } frontDefault Default front.
 * @property { String[] } backgrounds List of image links to display.
 */
const Params = {
  userGithub: "EddyBel",
  pathPage: "/Notebook",
  folderNotes: "NOTES",
  extensionsFiles: [".mdx", ".md"],
  useThemes: ["JavaScript", "Docker", "Programacion", "Python"],
  backgroundDefault: background.src,
  frontDefault: front.src,
  backgrounds: [
    "https://images.pexels.com/photos/6958506/pexels-photo-6958506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
};

export default Params;
