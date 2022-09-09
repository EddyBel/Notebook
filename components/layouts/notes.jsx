import Link from "next/link";
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
          <Spinner size="xl"  className="w-full"/>
        </div>
      ) : (
        notes.map((note) => {
          if (note.materia === newMateria) {
            return (
              <Link
                href={`Themes/${note.materia}/${note.route}`}
                key={`card-note-${note.route}`}
              >
                <a>
                  <div className="bg-gray-100 rounded-lg p-5 shadow-xl hover:scale-105 duration-200 cursor-pointer">
                    <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                      <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                        {note.title}
                      </h3>
                      <img
                        src={language(note.matter).src}
                        alt=""
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="text-gray-500">{note.description}</p>
                  </div>
                </a>
              </Link>
            );
          } else if (materia === "todo") {
            return (
              <Link
                href={`Themes/${note.materia}/${note.route}`}
                key={`card-note-${note.route}`}
              >
                <a>
                  <div className="bg-gray-100 rounded-lg p-5 shadow-xl hover:scale-105 duration-200 cursor-pointer">
                    <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                      <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                        {note.title}
                      </h3>
                      <img
                        src={language(note.matter).src}
                        alt=""
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="text-gray-500">{note.description}</p>
                  </div>
                </a>
              </Link>
            );
          }
        })
      )}
    </div>
  );
}
