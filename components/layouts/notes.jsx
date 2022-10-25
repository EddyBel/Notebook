import { CardNote } from "../common/cards";
import { Spinner } from "@chakra-ui/react";
import { FormatMatter } from "../../utils/index";

export function Notes({ notes, materia }) {
  const newMateria = FormatMatter(materia);

  return (
    <div className="grid sm:grid-cols-2 gap-6 md:gap-8 pt-10">
      {notes === undefined ? (
        <div className="w-full h-auto p-3 m-auto flex flex-row justify-end">
          <Spinner size="xl" className="w-full" />
        </div>
      ) : (
        notes.map((note) => {
          return (
            <CardNote
              date={note.date}
              title={note.title}
              route={note.route}
              matter={note.matter}
              materia={note.materia}
              href={`Themes/${note.materia}/${note.route}`}
              key={note.route}
            />
          );
        })
      )}
    </div>
  );
}
