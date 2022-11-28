import {
  formatDate,
  getDate,
  getObjectDate,
  currentDate,
  convertDate,
} from "./date";
import { matterIcon, languageString, subMatterIcon } from "./languaje";
import { searchFile } from "./search";
import { Percentage } from "./operations";
import {
  stringToArray,
  convertLevelToIcons,
  convertValuesOfArrayInToLower,
} from "./converts";
import { colorRandom } from "./generate";
import {
  organitationOfDateMaxMin,
  organitationOfDateMinMax,
} from "./organization";
import {
  FormatMatter,
  SetID,
  SetName,
  deleteExtension,
  getExtension,
  reorderTheNotes,
  validationValues,
  fragmentStringInArray,
  validImagen,
} from "./validations";

export {
  validImagen,
  organitationOfDateMinMax,
  organitationOfDateMaxMin,
  subMatterIcon,
  fragmentStringInArray,
  convertValuesOfArrayInToLower,
  convertDate,
  convertLevelToIcons,
  validationValues,
  colorRandom,
  stringToArray,
  FormatMatter,
  deleteExtension,
  getExtension,
  formatDate,
  getDate,
  getObjectDate,
  currentDate,
  matterIcon,
  languageString,
  searchFile,
  reorderTheNotes,
  Percentage,
  SetID,
  SetName,
};
