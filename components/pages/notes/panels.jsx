import { TabPanels, TabPanel } from "@chakra-ui/react";
import { Notes } from "../../layouts/notes";

export function Panels({ notes, themes }) {
  return (
    <TabPanels>
      <TabPanel>
        <Notes notes={notes} materia="todo" />
      </TabPanel>
      {themes.map((matter) => {
        return (
          <TabPanel key={`tabPanel-${matter.materia}`}>
            <Notes notes={notes} materia={matter.materia} />
          </TabPanel>
        );
      })}
    </TabPanels>
  );
}
