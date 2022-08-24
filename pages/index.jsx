import Link from "next/link";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { getAllFilesMetadata } from "../lib/mdx";
import { language } from "../lib/language";

// import { Terminal_2, Terminal } from "../components/layouts/terminal";

function Home(props) {
  return (
    <div className="bg-white pt-24 pb-24 sm:pb-24 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          {/* <!-- content - start --> */}
          <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
            <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
              Estudiante de programacion.
            </p>

            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
              Blog de notas de estudio
            </h1>

            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              Almacen de notas de estudio personales, las notas estan
              almacenadas en archivos markdown y se pueden importar los codigos.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <Link href="/Notes">
                <a className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Notas
                </a>
              </Link>
              <a
                href="#notes-more"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Tour
              </a>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            <img
              src="https://images.pexels.com/photos/6958506/pexels-photo-6958506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
        </section>
      </div>
      <div className="w-full h-96"></div>
      {/* Seccion de Notas destacadas */}
      <div className="bg-white py-6 sm:py-8 lg:py-12" id="notes-more">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-24">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
            Notas destacadas
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {/* <!-- product - start --> */}
            {props.notes.map((note) => {
              if (note.important) {
                return (
                  <div key={`note-important-${note.route}`}>
                    <Link href={`Notes/${note.route}`}>
                      <a className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                        <img
                          src={note.front}
                          loading="lazy"
                          alt="Photo by Austin Wade"
                          className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                        />

                        <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                          <span className="text-gray-500">{note.date}</span>
                          <span className="text-gray-800 text-lg lg:text-xl font-bold">
                            {note.title}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              } else <></>;
            })}
            {/* <!-- product - end --> */}
          </div>
        </div>
      </div>
      <div className="w-full h-36"></div>
    </div>
  );
}

export default Home;

// Obten los meta datos de los archivos mdx
export async function getStaticProps() {
  const data_notes = getAllFilesMetadata();

  return {
    props: {
      notes: data_notes,
    },
  };
}
