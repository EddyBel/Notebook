import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";
import { language } from "../lib/language";

function Notes(props) {
  // console.log(props);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="w-full h-24"></div>
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Notas de estudio
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Apuntes de aprendizaje en programacion.
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
          {/* <!-- card - start --> */}
          {props.notes.map((note) => {
            return (
              <Link href={`Notes/${note.route}`} key={`card-note-${note.route}`}>
                <a>
                  <div className="bg-gray-100 rounded-lg p-5 shadow-xl hover:scale-105 duration-200 cursor-pointer">
                    <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                      <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                        {note.title}
                      </h3>
                      {/* <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                        
                      </span> */}
                      {language(note.language, "w-8 h-8 rounded-full")}
                    </div>

                    <p className="text-gray-500">{note.description}</p>
                  </div>
                </a>
              </Link>
            );
          })}
          {/* <!-- card - end --> */}
        </div>
      </div>
      <div className="w-full h-56"></div>
    </div>
  );
}

export default Notes;

// Obten los meta datos de los archivos mdx
export async function getStaticProps() {
  const data_notes = getAllFilesMetadata();

  return {
    props: {
      notes: data_notes,
    },
  };
}
