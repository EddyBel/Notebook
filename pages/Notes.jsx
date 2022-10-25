import { useState, useEffect } from "react";
import { Tabs } from "@chakra-ui/react";
import { getAllFiles, getAllFilesMetadataOfAllFolders } from "../lib/mdx";
import { searchFile, reorderTheNotes } from "../utils/index";
import { Search } from "../components/layouts/search";
import { Options, Panels } from "../components/pages/notes/index";
import { themes as THEMES } from "../configs/index";

const themes = THEMES.themes;

function AllNotes({ meta }) {
  const [notes, setNotes] = useState(); // Estado de las notas

  // Funcion que se actualiza cada que ocurre un cambio
  const changeHandleSearch = (event) => {
    const value = event.target.value; // Obtener el valor del input que sera pasado como parametro

    // Validar que el input no este vacio
    // Si el input esta vacio regresar todos los datos completos
    // Si no lo esta filtrar por el parametro pasado
    if (value != "" || value != null || value != undefined) {
      searchFile(reorderTheNotes(meta), value, setNotes);
    } else {
      setNotes(reorderTheNotes(meta));
    }
  };

  // Una vez renderizado el componente reordenar los datos y pasarselos al estado
  useEffect(() => {
    const data = reorderTheNotes(meta);
    setNotes(data);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
      <div className="w-full h-14"></div> {/* Separador de la pagina */}
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        {/* Input se busqueda */}
        <Search key="search-input" onChangeFunction={changeHandleSearch} />
        {/* Fin del input de busqueda */}
        {/* Panel por opcion */}
        <Tabs variant="soft-rounded" colorScheme="telegram">
          {/* Lista de opciones */}
          <Options key={"tab-options-for-panel"} themes={themes} />
          {/* Fin de la lista de opciones */}
          {/* Lista de paneles */}
          <Panels key="panels-of-options" notes={notes} themes={themes} />
          {/* Fin de la lista de paneles */}
        </Tabs>
        {/* Fin del panel por opcion */}
      </div>
      <div className="w-full h-56"></div> {/* Separador de pagina */}
    </div>
  );
}

export default AllNotes;

export function getStaticProps() {
  const files = getAllFiles(); // Obtener todas las notas
  const meta = getAllFilesMetadataOfAllFolders(); // Obtener todos los metadatos

  return {
    props: {
      notes: files,
      meta,
    },
  };
}
