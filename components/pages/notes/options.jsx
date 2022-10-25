import { TabList, Tab } from "@chakra-ui/react";

export function Options({ themes }) {
  return (
    <TabList>
      <div className="w-full p-2 bg-gray-100 dark:bg-slate-800 flex flex-row flex-wrap gap-6 justify-center items-center rounded-xl shadow-xl">
        <Tab>Todo</Tab>
        {themes.map((materia) => {
          return (
            <Tab key={`tab-menu-option-${materia.materia}`}>
              {materia.materia}
            </Tab>
          );
        })}
      </div>
    </TabList>
  );
}
