import { CardTheme } from "../components/common/cards";

const config = require("../config.json");

function Themes() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 w-10/12 m-auto">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Temas de estudio
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            La separacion de temas de estudio de programacion. La programación
            tiene muchos temas diferentes para estudiar. Aprender
            programación puede ser difícil, pero separar los temas de estudio
            puede ayudar. Si se dedica tiempo a la programación, aprender los
            conceptos básicos puede ser más fácil.
          </p>
        </div>
        {/* text - end */}

        <div className="grid lg:grid-cols-3 gap-8" id="container-themes">
          {/* Card-theme - start*/}
          {config.themes.map((theme) => {
            return <CardTheme {...theme} key={theme.theme} />;
          })}
          {/* Card-theme - end */}
        </div>
      </div>
    </div>
  );
}

export default Themes;
