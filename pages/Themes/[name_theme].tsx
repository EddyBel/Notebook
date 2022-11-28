import { useState, useEffect } from "react";
import { CardNote, SearchNote } from "../../components/common/index";
import { MarkdownJSX } from "../../lib/mdx";
import { FormatMatter } from "../../utils/index";
import { themes } from "../../configs/index";
import { validationValues, organitationOfDateMaxMin } from "../../utils/index";

function NameTheme({ notes, name_theme }: any) {
  const [notesState, setNotes] = useState([{}]);

  useEffect(() => {
    setNotes(notes);
    setNotes(organitationOfDateMaxMin(notes));
  }, []);

  return (
    <div className="NOTES-BY-THEME">
      <div className="container-section-notes">
        {/* text - start */}
        <div className="container-texts">
          <h2 className="title">Notas de {name_theme}</h2>
        </div>
        {/* text - end */}

        {/* List-notes - start */}
        <div className="container-notes">
          <SearchNote
            theNotesaAreOutOfOrder={false}
            typeOfOrganization={true}
            notes={notes}
            setFunction={setNotes}
            key={"search-notes-by-matter"}
          />
          <section className="container-all-notes">
            {notesState.length === 0 ? (
              <h1 className="Text-Error-Notes">Ninguna nota encontrada</h1>
            ) : (
              notesState.map((note: any) => {
                let { title, date, route, matter, tags, level } =
                  validationValues(note);

                return (
                  <CardNote
                    date={date}
                    title={title}
                    route={route}
                    matter={matter}
                    tags={tags}
                    level={level}
                    key={route}
                  />
                );
              })
            )}
          </section>
        </div>
        {/* List-notes - end */}
      </div>
      <div className="w-full h-56"></div>
    </div>
  );
}

export default NameTheme;

// Obten los meta datos de los archivos mdx
export async function getStaticProps(context: any) {
  const mdx = new MarkdownJSX();
  const name_theme = context.params.name_theme;
  const data_notes = mdx.GetAllFilesMetadata(name_theme);

  return {
    props: {
      notes: data_notes,
      name_theme,
    },
  };
}

export async function getStaticPaths() {
  const paths = themes.map((theme) => {
    const name = FormatMatter(theme.matter);
    return {
      params: {
        name_theme: name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
