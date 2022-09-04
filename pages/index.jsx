import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

const { imagenMain } = require("../config.json");

function Home(props) {
  return (
    <div className="bg-white pt-10 sm:pb-24 lg:pb-10">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          {/* content - start */}
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
              <Link href="/Themes">
                <a className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Temas
                </a>
              </Link>
              <Link href="/Info" >
                <a
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Reporte
                </a>
              </Link>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div
            className="img-main xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg"
            id="container-img"
          >
            <Image
              src={imagenMain}
              alt="imagen_main"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
}

export default Home;
