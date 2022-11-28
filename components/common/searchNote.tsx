import { Search as SearchIcon } from "../common/svg";
import {
  reorderTheNotes,
  searchFile,
  organitationOfDateMaxMin,
  organitationOfDateMinMax,
} from "../../utils/index";

type PropsSearch = {
  notes: any;
  setFunction: (notes: any) => void;
  theNotesaAreOutOfOrder: boolean;
  typeOfOrganization: boolean;
};

export function SearchNote({
  notes,
  setFunction,
  theNotesaAreOutOfOrder = true,
  typeOfOrganization = true,
}: PropsSearch) {
  const changeHandleSearch = (event: any) => {
    let value = event.target.value;
    let useNotes = theNotesaAreOutOfOrder ? reorderTheNotes(notes) : notes;
    let orderNotes = typeOfOrganization
      ? organitationOfDateMaxMin(useNotes)
      : organitationOfDateMinMax(useNotes);
    value != undefined && value != null && value != ""
      ? searchFile(orderNotes, value, setFunction)
      : setFunction(orderNotes);
  };

  return (
    <div className="container-input">
      <input
        type="text"
        className="input-search"
        placeholder="📄 Nombre de la nota o etiqueta"
        onChange={changeHandleSearch}
        id="input-search"
      />
      <SearchIcon classN={"icon-search"} />
    </div>
  );
}
