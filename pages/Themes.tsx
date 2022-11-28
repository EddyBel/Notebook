import { CardTheme } from "../components/common/index";
import { themes } from "../configs/index";

function Themes() {
  return (
    <div className="THEMES">
      <div className="container-themes">
        {/* text - start */}
        <div className="container-texts">
          <h1 className="title">Temas de estudio</h1>
          <p className="description">
            La programación tiene muchos temas diferentes para estudiar.
            Aprender programación puede ser difícil, pero separar los temas de
            estudio puede ayudar. Si se dedica tiempo a la programación,
            aprender los conceptos básicos puede ser más fácil.
          </p>
        </div>
        {/* text - end */}

        <div className="container-list-themes" id="container-themes">
          {/* Card-theme - start*/}
          {themes.map((theme) => {
            return (
              <CardTheme
                background={theme.backgroundDefault}
                direction={theme.path}
                matter={theme.matter}
                type={theme.type}
                key={theme.matter}
              />
            );
          })}
          {/* Card-theme - end */}
        </div>
      </div>
    </div>
  );
}

export default Themes;
