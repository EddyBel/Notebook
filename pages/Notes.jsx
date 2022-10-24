import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { getAllFiles, getAllFilesMetadataOfAllFolders } from "../lib/mdx";
import { validateTheme, searchFile } from "../lib/utils";
import { Notes } from "../components/layouts/notes";
import { themes as THEMES } from "../configs/index";

const themes = THEMES.themes;

function AllNotes(props) {
  const [notes, setNotes] = useState();

  const changeHandleSearch = (event) => {
    const value = event.target.value;
    if (value != "" || value != null || value != undefined) {
      const newNotes = searchFile(
        rearrangeTheData(props.meta),
        value,
        setNotes
      );
    } else {
      setNotes(rearrangeTheData(props.meta));
    }
  };

  useEffect(() => {
    const data = rearrangeTheData(props.meta);
    setNotes(data);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
      <div className="w-full h-14"></div>
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="w-full p-3 rounded-lg mb-8 bg-gray-900 shadow-lg shadow-blue-300 flex flex-row justify-center items-center gap-6">
          <input
            type="text"
            className="w-full p-2 pl-4 rounded-lg ml-2 duration-200"
            placeholder="Nombre de la nota 📄"
            onChange={changeHandleSearch}
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
        <Tabs variant="soft-rounded" colorScheme="telegram">
          <TabList>
            <div className="w-full p-2 bg-gray-100 dark:bg-slate-900 flex flex-row flex-wrap gap-6 justify-center items-center rounded-xl shadow-xl">
              <Tab>
                <p>Todo</p>
              </Tab>
              {themes.map((materia) => {
                return (
                  <Tab key={`tab-menu-option-${materia.materia}`}>
                    {materia.materia}
                  </Tab>
                );
              })}
            </div>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Notes notes={notes} materia="todo" />
            </TabPanel>
            {themes.map((materia) => {
              return (
                <TabPanel key={`tabPanel-${materia.materia}`}>
                  <Notes notes={notes} materia={materia.materia} />
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </div>
      <div className="w-full h-56"></div>
    </div>
  );
}

export default AllNotes;

function rearrangeTheData(data) {
  const newData = [];

  data.map((materia) => {
    materia.map((note) => {
      newData.push(note);
    });
  });

  return newData;
}

export function getStaticProps() {
  const files = getAllFiles();
  const meta = getAllFilesMetadataOfAllFolders();

  return {
    props: {
      notes: files,
      meta,
    },
  };
}
