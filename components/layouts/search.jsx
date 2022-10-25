// Modulos
import { Search2Icon } from "@chakra-ui/icons";

export function Search({ onChangeFunction }) {
  return (
    <div className="w-full p-3 rounded-lg mb-8 bg-gray-900 shadow-lg shadow-blue-300 flex flex-row justify-center items-center gap-6">
      <input
        type="text"
        className="w-full p-2 pl-4 rounded-lg ml-2 duration-200"
        placeholder="Nombre de la nota 📄"
        onChange={onChangeFunction}
        id="input-search"
      />
      <Search2Icon
        width="30px"
        height="30px"
        color="#3498DB"
        className="duration-200"
        id="icon-search"
      />
    </div>
  );
}
