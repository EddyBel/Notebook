import { params } from "../configs/index";
import Link from "next/link";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

function Home(props) {
  return (
    <div className="bg-white dark:bg-slate-900 pt-10 sm:pb-24 lg:pb-10 duration-300 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-screen-2xl px-4 pb-10 sm:mt-30 md:mt-20 md:px-8 mx-auto mt-16 lg:mt-0">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          {/* content - start */}
          <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
            <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
              Estudiante de programacion.
            </p>

            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 dark:text-slate-100">
              Blog de notas de estudio
            </h1>

            <p className="lg:w-4/5 text-gray-500 dark:text-slate-100 xl:text-lg leading-relaxed mb-8 md:mb-12">
              Almacen de notas de estudio personales, las notas estan
              almacenadas en archivos markdown y se pueden importar los codigos.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <Link href="/Notes">
                <a className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Notas
                </a>
              </Link>
              <Link href="/Info">
                <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Reporte
                </a>
              </Link>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div
            className="img-main xl:w-5/12 h-80 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg lg:mt-14"
            id="container-img"
          >
            <img
              src={params.backgrounds[0]}
              alt="imagen_main"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
}

export default Home;
