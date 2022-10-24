import Link from "next/link";
import { CardNote } from "../../components/common/cards";
import { getAllFilesMetadata, validateTheme } from "../../lib/mdx";
import { language } from "../../lib/language";
import { useRouter } from "next/router";
import { themes as THEME } from "../../configs/index";
import { matter } from "gray-matter";
const themes = THEME.themes;

function NameTheme(props) {
  const route = useRouter();

  return (
    <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12 min-h-screen">
      <div className="w-full h-10"></div>
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 dark:text-slate-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Notas
          </h2>
        </div>
        {/* text - end */}

        {/* List-notes - start */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
          {props.notes.map((note) => {
            return (
              <CardNote
                date={note.date}
                title={note.title}
                route={note.route}
                matter={note.matter}
                materia={route.query.name_theme}
                href={`${route.query.name_theme}/${note.route}`}
                key={note.route}
              />
            );
          })}
        </div>
        {/* List-notes - end */}
      </div>
      <div className="w-full h-56"></div>
    </div>
  );
}

export default NameTheme;

// Obten los meta datos de los archivos mdx
export async function getStaticProps(context) {
  const name_theme = context.params.name_theme;
  const data_notes = getAllFilesMetadata(name_theme);

  return {
    props: {
      notes: data_notes,
    },
  };
}

export async function getStaticPaths() {
  const paths = themes.map((theme) => {
    const name = validateTheme(theme.materia);
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
