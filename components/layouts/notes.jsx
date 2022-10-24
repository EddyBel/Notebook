import Link from "next/link";
import { CardNote } from "../common/cards";
import { Spinner, Stack } from "@chakra-ui/react";
import { language } from "../../lib/language";
import { validateTheme } from "../../lib/utils";

export function Notes({ notes, materia }) {
  const newMateria = validateTheme(materia);

  // notes = undefined

  return (
    <div className="grid sm:grid-cols-2 gap-6 md:gap-8 pt-10">
      {notes === undefined ? (
        <div className="w-full h-auto p-3 m-auto flex flex-row justify-end">
          <Spinner size="xl" className="w-full" />
        </div>
      ) : (
        notes.map((note) => {
          if (note.materia === newMateria) {
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
          } else if (materia === "todo") {
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
          }
        })
      )}
    </div>
  );
}
