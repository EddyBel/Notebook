import Link from "next/link";
import { getAllFilesMetadata, validateTheme} from "../../lib/mdx";
import { language } from "../../lib/language";
import { useRouter } from "next/router";

const config = require("../../config.json");

function NameTheme(props) {
  const route = useRouter();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="w-full h-10"></div>
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Notas de estudio
          </h2>
        </div>
        {/* text - end */}

        {/* List-notes - start */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
          {props.notes.map((note) => {
            return (
              <Link
                href={`${route.query.name_theme}/${note.route}`}
                key={`card-note-${note.route}`}
              >
                <a>
                  <div className="bg-gray-100 rounded-lg p-5 shadow-xl hover:scale-105 duration-200 cursor-pointer">
                    <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                      <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                        {note.title}
                      </h3>
                      <img
                        src={language(note.theme).src}
                        alt=""
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="text-gray-500">{note.description}</p>
                  </div>
                </a>
              </Link>
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
  const paths = config.themes.map((theme) => {
    const name = validateTheme(theme.theme)
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
