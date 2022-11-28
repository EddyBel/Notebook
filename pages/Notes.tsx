import { useState, useEffect } from "react";
import { MarkdownJSX } from "../lib/mdx";
import {
  reorderTheNotes,
  validationValues,
  organitationOfDateMinMax,
  organitationOfDateMaxMin,
} from "../utils/index";
import { CardNote, SearchNote } from "../components/common/index";
import { MatterSelect } from "../components/layouts/index";

function AllNotes({ meta }: any) {
  const [notes, setNotes] = useState([{}]);
  const [themeState, setTheme] = useState("Todo");

  useEffect(() => {
    setNotes(reorderTheNotes(meta));
    setNotes(organitationOfDateMaxMin(reorderTheNotes(meta)));
  }, []);

  return (
    <div className="NOTES">
      <div className="container-notes">
        {/* Input se busqueda */}
        <SearchNote
          key="search-input"
          theNotesaAreOutOfOrder={true}
          typeOfOrganization={true}
          notes={meta}
          setFunction={setNotes}
        />
        <section className="section-notes">
          <MatterSelect setTheme={setTheme} />
          <div className="container-all-notes">
            {notes.length === 0 ? (
              <h1 className="Text-Error-Notes">Ninguna nota encontrada</h1>
            ) : (
              notes.map((note: any) => {
                let { title, date, matter, route, tags, level } =
                  validationValues(note);

                if (themeState === "Todo")
                  return (
                    <CardNote
                      date={date}
                      title={title}
                      matter={matter}
                      route={route}
                      tags={tags}
                      level={level}
                      key={`note-${title}`}
                    />
                  );
                else if (themeState === matter) {
                  return (
                    <CardNote
                      date={date}
                      title={title}
                      matter={matter}
                      route={route}
                      tags={tags}
                      level={level}
                      key={`note-${title}-${matter}`}
                    />
                  );
                }
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllNotes;

export function getStaticProps() {
  const mdx = new MarkdownJSX();
  const files = mdx.GetAllFiles();
  const meta = mdx.GetAllFilesMetadataOfAllFolders();

  return {
    props: {
      notes: files,
      meta,
    },
  };
}
